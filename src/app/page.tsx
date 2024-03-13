import ClientOnly from '@/app/components/ClientOnly';
import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';
import HeartButton from '@/app/components/HeartButton';
import Image from 'next/image';

export default async function Home() {
  const result = await fetch('http://localhost:3000/api/accommodations', {
    method: 'POST',
  });
  const roomdatas = await result.json();

  if (roomdatas.results.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <>
      <ClientOnly>
        <Container>
          <div
            className='
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          '
          >
            {roomdatas.results.map((each: any, index: number) => (
              <div key={index} className='relative'>
                <div
                  className='
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-xl
                '
                >
                  <Image
                    src={each.image_url}
                    alt='Listing'
                    width={400}
                    height={400}
                    className='
                    object-cover
                    h-full
                    w-full
                    group-hover:scale-110
                    transition
                    '
                  />
                </div>
                <div className='absolute top-0 right-0 p-2'>
                  <HeartButton />
                </div>
                <div>
                  {each.category}, {each.location}
                </div>
                <div>Host: {each.host_name}</div>
                <div>${each.price_per_night} / night</div>
              </div>
            ))}
          </div>
        </Container>
      </ClientOnly>
    </>
  );
}
