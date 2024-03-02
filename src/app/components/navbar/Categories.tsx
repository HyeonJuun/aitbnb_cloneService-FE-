'use client';

import CategoryBox from '@/app/components/CategoryBox';
import Container from '@/app/components/Container';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const categories = [
  {
    label: '캠핑장',
    image: '/images/icons/캠핑장.jpeg',
    description: '캠핑캠핑캠핑',
  },
  {
    label: '한적한 시골',
    image: '/images/icons/한적한시골.jpeg',
    description: '시골시골시골',
  },
  {
    label: '멋진 수영장',
    image: '/images/icons/멋진수영장.jpeg',
    description: '수영수영수영',
  },
  {
    label: '한옥',
    image: '/images/icons/한옥.jpeg',
    description: '한옥한옥한옥',
  },
  {
    label: '인기 급상승',
    image: '/images/icons/인기급상승.jpeg',
    description: '인기급상승',
  },
  {
    label: '방',
    image: '/images/icons/방.jpeg',
    description: '방방',
  },
  {
    label: '최고의 전망',
    image: '/images/icons/최고의 전망.jpeg',
    description: '최고의전망망',
  },
  {
    label: '기상천외한 숙소',
    image: '/images/icons/기상천외한숙소.jpeg',
    description: '기상천외한숙소',
  },

  {
    label: '해변 근처',
    image: '/images/icons/해변근처.jpeg',
    description: '해변근처',
  },
  {
    label: '스키',
    image: '/images/icons/스키.jpeg',
    description: '스키스키',
  },
  {
    label: '국립공원',
    image: '/images/icons/국립공원.jpeg',
    description: '국립공원',
  },
  {
    label: '상징적 도시',
    image: '/images/icons/상징적도시.jpeg',
    description: '상징적인 도시',
  },
  {
    label: '농장',
    image: '/images/icons/농장.jpeg',
    description: '농장장',
  },
  {
    label: '통나무집',
    image: '/images/icons/통나무집.jpeg',
    description: '통나무집',
  },
  {
    label: '와인농장',
    image: '/images/icons/와인농장.jpeg',
    description: '',
  },
  {
    label: '북극',
    image: '/images/icons/북극.jpeg',
    description: '',
  },
  {
    label: '섬',
    image: '/images/icons/섬.jpeg',
    description: '',
  },
  {
    label: '세상의꼭대기',
    image: '/images/icons/세상의꼭대기.jpeg',
    description: '',
  },
  {
    label: '스키타고출입',
    image: '/images/icons/스키타고출입.jpeg',
    description: '',
  },
  {
    label: '호수근처',
    image: '/images/icons/호수근처.jpeg',
    description: '',
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, SetScrollPosition] = useState(0);

  const scroll = (scrollOffset: number) => {
    console.log(scrollPosition);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      console.log(scrollPosition);
      console.log('* 스크롤 왼쪽 현재 위치 : ' + scrollRef.current.scrollLeft);
      console.log('* 스크롤 현재 넓이' + scrollRef.current.scrollWidth);
      if (scrollRef.current.scrollLeft < 100) {
        SetScrollPosition(0);
      } else if (scrollRef.current.scrollLeft > 541) {
        SetScrollPosition(2);
      } else {
        SetScrollPosition(1);
      }
    }
  };

  if (!isMainPage) {
    return null;
  }
  return (
    <div className='relative p-2 justify-center'>
      <div
        ref={scrollRef}
        className={`w-full overflow-x-scroll whitespace-nowrap border border-gray-300 flex
        {${scrollPosition} === 0 ? 'hidden' : ''}`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <button
          onClick={() => scroll(-200)}
          className={`
            absolute 
            left-0 
            top-1/2
            transform 
            -translate-y-1/2 
            bg-blue-500 
            text-white 
            px-4 
            py-2 
            m-2
            `}
        >
          Scroll Left
        </button>
        <button
          onClick={() => scroll(200)}
          className={`
          absolute 
          right-0
          top-1/2
          transform 
          -translate-y-1/2
          bg-blue-500 
          text-white 
          px-4
          py-2
          m-2
          {${scrollPosition} === 2 ? 'hidden' : ''}
          `}
        >
          Scroll Right
        </button>
        <Container>
          <div
            className='
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        '
          >
            {categories.map((item) => (
              <CategoryBox
                key={item.label}
                label={item.label}
                description={item.description}
                image={item.image}
                selected={category === item.label}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Categories;
