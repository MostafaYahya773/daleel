import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function LessonPageAnimation() {
  return (
    <div className="flex flex-col gap-3 mt-28">
      <div>
        <Skeleton
          height={400}
          count={1}
          baseColor="#e5e7eb"
          highlightColor="#fff"
        />
      </div>
      <div>
        <Skeleton
          height={30}
          width={150}
          count={1}
          baseColor="#e5e7eb"
          highlightColor="#fff"
        />
      </div>
      <div>
        <Skeleton
          height={20}
          count={2}
          baseColor="#e5e7eb"
          highlightColor="#fff"
        />
      </div>
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-2">
          <Skeleton
            height={200}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
          <Skeleton
            height={20}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            height={200}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
          <Skeleton
            height={20}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            height={200}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
          <Skeleton
            height={20}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            height={200}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
          <Skeleton
            height={20}
            count={1}
            baseColor="#e5e7eb"
            highlightColor="#fff"
            className="grid grid-rows-[1fr_auto]"
          />
        </div>
      </div>
    </div>
  );
}
