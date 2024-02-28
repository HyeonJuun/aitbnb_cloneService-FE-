import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// const images = [room1Image, room2Image, room3Image];

const ListingRooms = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className='
        flex
        flex-row
        gap-5
        mt-32
        mx-16
    '
    >
      <Image
        alt='room1'
        src='/images/room1.png'
        width={520}
        height={500}
        className='rounded-xl'
      />
      <Image
        alt='room2'
        src='/images/room2.png'
        width={520}
        height={500}
        className='rounded-xl'
      />
      <Image
        alt='room3'
        src='/images/room3.png'
        width={520}
        height={500}
        className='rounded-xl'
      />
    </div>
  );
};
export default ListingRooms;
