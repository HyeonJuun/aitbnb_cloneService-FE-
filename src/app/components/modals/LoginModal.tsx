'use client';

// import { signIn } from 'next-auth/react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import Modal from './Modal';
import { useState } from 'react';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false)		// 로딩하는 중일 때 버튼 비활성화를 위해 사용

  const {
    register,		// 회원가입 유효성 검증
    handleSubmit,	// 제출 유효성 검증
    formState: {	// form의 상태에 대한 정보가 포함되어 있다.
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {	// form의 디폴트 값을 빈 값d으로 설정
      email: 'yunsh0712@naver.com ',
      password: '12341234' 
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(false);
    loginModal.onClose();
    loginModal.onLoginPass();
    alert("Hello, Logged in");
    //toast.success('Logged in');
    router.refresh();//()는 서버 컴포넌트를 강제로 다시 랜더링 하도록 하는 기능입니다. 이 함수를 호출하지 않으면 서버의 데이터를 변경했음에도 서버 컴포넌트가 그대로 입니다.
    
    // signIn('credentials', {
    //   ...data,
    //   redirect: false,
    // })
    // .then(() => {
    //   setIsLoading(false);

    //   if(callback ?.ok){
    //     toast.success('Logged in');
    //     router.refresh();
    //   }

    //   if(callback?.error){
    //     toast.error(callback.error);
    //   }
    // })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <div className="justify-center flex flex-row items-center gap-2">
          <div>
            Already have an account?
          </div>
          <div
            onClick={loginModal.onClose}
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal 
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Continue"
      onClose={loginModal.onClose}	// isOpen이 false로 변경되면서 모달 창 닫힘
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default LoginModal;