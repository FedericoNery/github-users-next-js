import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonCardUserProps {
  quantity: number;
}

export function SkeletonCardUser({ quantity }: SkeletonCardUserProps) {
  const list = Array.from({ length: quantity }, (value, index) => index);
  return (
    <>
      {list.map((x, index) => (
        <div className='flex items-center space-x-4 w-[700px] h-16 justify-between' key={`SkeletonCardUser${index}`}>
          <div className='flex justify-center items-center gap-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[200px]' />
            </div>
          </div>
          <Skeleton className='h-12 w-12' />
        </div>
      ))}
    </>
  );
}
