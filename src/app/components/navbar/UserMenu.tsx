'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import RegisterModal from '@/app/components/modals/RegisterModal';

const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
            absolute
            roundec-xl
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
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                label='Login'
              />
              {isOpen === true ? null : 'hello'}
            </>
            <MenuItem onClick={() => {}} label='Sign up' />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
