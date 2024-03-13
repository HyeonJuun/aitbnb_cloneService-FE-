'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; //유효성 검증을 도와주는 react-hook-form
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import { useCallback, useState } from 'react';

import Heading from '@/app/components/Heading';
import Input from '@/app/components/inputs/Input';
import toast from 'react-hot-toast';
import Button from '@/app/components/Button';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false); // 로딩하는 중일 때 버튼 비활성화를 위해 사용
  const {
    register, // 회원가입 유효성 검증
    handleSubmit, // 제출 유효성 검증
    formState: {
      // form의 상태에 대한 정보가 포함되어 있다.
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      // form의 디폴트 값을 빈 값으로 설정
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account' />
      <Input
        id='email'
        label='Eamil'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className='
          text-neutral-500
          text-center
          mt-4
          font-light
        '
      >
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className='
              text-neutral-800
              cursor-pointer
              hover:underline
            '
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen} //isOpen이 true로  변경되면서 모달 창 오픈
      title='Sign up'
      body={bodyContent}
      footer={footerContent}
      actionLabel='Continue'
      onClose={registerModal.onClose} // isOpen이 false로 변경되면서 모달 창 닫힘
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
