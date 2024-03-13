import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import qs from 'query-string';
interface CategoryBoxProps {
  label: string;
  image: string;
  description: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  image,
  selected,
  description,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updateQuery.category;
    }
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updateQuery,
      },
      { skipNull: true },
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}
    >
      <div className='h-[44px] w-[56px] flex flex-col items-center justify-center'>
        <Image src={image} height={24} width={24} alt={label} />
        <span className=' font-medium text-xs text-nowrap'>{label}</span>
      </div>
    </div>
  );
};
export default CategoryBox;
