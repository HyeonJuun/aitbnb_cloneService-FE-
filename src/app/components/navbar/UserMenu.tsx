'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import {Avatar, AvatarLogin} from '../Avatar';
import { useCallback, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

const UserMenu = () => {

  const registerModal  = useRegisterModal()
  const loginModal = useLoginModal();
  console.log(">>>>>>>>>loginModal", loginModal);
  const [isOpen, setIsOpen] = useState(false);

  // const [isLoginPass, setIsLoginPass] = useState(false); //무조건 트루로반환되는상태
  // setIsLoginPass(isLoginPass);

  const [isLoginPass, setIsLoginPass] = useState(loginModal.isLoginPass)
  useEffect(() => {
    setIsLoginPass(loginModal.isLoginPass);
  }, [loginModal.isLoginPass])
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  


  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='
        hidden
        md:block
        text-sm
        front-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer
        '
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        hover:shadow-md
        transition
        '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* if(!isLoginPass){
              <Avatar />
            } */}
          {!isLoginPass ? <Avatar /> : <AvatarLogin/>}
          </div>

         {/* AvatarLogin */}
        </div>
      </div>
      {isOpen && (
        <div
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bh-white
            overflow-hidden
            right-0
            top-12
            text-sm
          '
        > 
        {!isLoginPass &&(
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem onClick={() => {loginModal.onOpen()}} label='로그인' />
              <MenuItem onClick={() => {registerModal.onOpen()}} label='회원 가입' />
              <div className='border-b border-gray-100'></div>
              <div className="text-sm text-gray-400">
                <MenuItem onClick={() => {}} label='당신의 공간을 에어비앤비하세요' />
                <MenuItem onClick={() => {}} label='도움말 센터' />
              </div>
            </>
          </div>
        )}
        {isLoginPass &&(
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem onClick={() => {loginModal.onOpen()}} label='메시지' />
              <MenuItem onClick={() => {registerModal.onOpen()}} label='여행' />
              <MenuItem onClick={() => {registerModal.onOpen()}} label='위시리스트' />
              <div className='border-b border-gray-100'></div>
              <div className="text-sm text-gray-400">
                <MenuItem onClick={() => {}} label='당신의 공간을 에어비앤비하세요' />
                <MenuItem onClick={() => {}} label='계정' />
              </div>
              <div className='border-b border-gray-100'></div>
              <div className="text-sm text-gray-400">
                <MenuItem onClick={() => {}} label='도움말 센터' />
              </div>
                <MenuItem onClick={() => {loginModal.onLogoutPass()}} label='로그아웃' />
            </>
          </div>
        )}
        </div>
      )}
    </div>
  );
};
export default UserMenu;
