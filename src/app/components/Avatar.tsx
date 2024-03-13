'use client';
import Image from 'next/image';
import useLoginModal from '@/app/hooks/useLoginModal';

const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      height='30'
      width='30'
      alt='Avatar'
      src='/images/placeholder.jpg'
    />
  );
};
const AvatarLogin = () => {
  return (
    <Image
      className='rounded-full'
      height='30'
      width='30'
      alt='AvatarLogin'
      src='/images/eu.png'
    />
  );
};
export  {Avatar, AvatarLogin};
