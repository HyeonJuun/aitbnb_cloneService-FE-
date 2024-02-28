import ListingRooms from '@/app/components/listings/LilstingRooms';

export default function Home() {
  return (
    <>
      <div className='text-rose-500 text-2xl'>Hello Airbnb!</div>
      <div className='mt-8'>
        <ListingRooms />
      </div>
    </>
  );
}
