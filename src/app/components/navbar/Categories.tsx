'use client';

import CategoryBox from '@/app/components/CategoryBox';
import Container from '@/app/components/Container';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LeftButtonIcon from '/public/images/LeftButtonIcon.svg';
import RightButtonIcon from '/public/images/RightButtonIcon.svg';
import Image from 'next/image';

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
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;

      if (scrollRef.current.scrollLeft + scrollOffset < 200) {
        SetScrollPosition(0);
        scrollRef.current.scrollLeft = 0;
      } else if (scrollRef.current.scrollLeft + scrollOffset > 3900) {
        SetScrollPosition(1);
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - 1000;
      } else {
        SetScrollPosition(2);
      }
    }
  };

  if (!isMainPage) {
    return null;
  }
  return (
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
  );
};

export default Categories;
