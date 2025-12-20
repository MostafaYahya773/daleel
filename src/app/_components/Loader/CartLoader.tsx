import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function CartLoader() {
  return (
    <div className="grid col-span-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5 py-20 *:flex *:flex-col *:gap-5 *:bg-white *:border *:p-3">
      <div>
        <Skeleton height={200} count={1} />
        <Skeleton height={20} count={1} />
        <Skeleton height={10} count={1} />
        <Skeleton
          height={15}
          width={100}
          count={10}
          containerClassName="flex gap-2 flex-wrap"
        />
        <Skeleton height={40} count={1} />
      </div>
      <div>
        <Skeleton height={200} count={1} />
        <Skeleton height={20} count={1} />
        <Skeleton height={10} count={1} />
        <Skeleton
          height={15}
          width={100}
          count={10}
          containerClassName="flex gap-2 flex-wrap"
        />
        <Skeleton height={40} count={1} />
      </div>

      <div>
        <Skeleton height={200} count={1} />
        <Skeleton height={20} count={1} />
        <Skeleton height={10} count={1} />
        <Skeleton
          height={15}
          width={100}
          count={10}
          containerClassName="flex gap-2 flex-wrap"
        />
        <Skeleton height={40} count={1} />
      </div>
    </div>
  );
}
