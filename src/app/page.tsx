import ListingRooms from '@/app/components/listings/LilstingRooms';

export default async function Home() {
  const result = await fetch('http://localhost:3000/api/accommodations', {
    method: 'POST',
  });
  const roomdatas = await result.json();
  console.log(roomdatas.results.map((each: any) => each.title));
  return (
    <>
      <div className='text-rose-500 text-2xl'>Hello Airbnb!</div>
      <div className='mt-8'>
        <ListingRooms />
      </div>
      {roomdatas.results.map((each: any, index: number) => (
        <div key={index}>
          <div>{each.title}</div>
          <div>{each.description}</div>
          <div>{each.price_per_night}</div>
        </div>
      ))}
    </>
  );
}
