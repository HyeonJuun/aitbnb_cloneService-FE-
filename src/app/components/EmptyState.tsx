'use client';

import Button from '@/app/components/Button';
import Heading from '@/app/components/Heading';
import { useRouter } from 'next/navigation';

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
}) => {
  const router = useRouter;
  return (
    <div
      className='
  h-[60vh]
  flex
  flex-col
  gap-2
  justify-center
  items-center
  '
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button outline label='Remove all filters' onClick={() => {}} />
        )}
      </div>
    </div>
  );
};
export default EmptyState;
