'use client';
import React from 'react';
import { Lessonprops } from '@/app/interfaces';
import Image from 'next/image';
interface Props {
  videos: Lessonprops[];
  onselect: (data: Lessonprops) => void;
}
const AllVideos = React.memo(({ videos, onselect }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {videos?.map((video) => (
          <div
            onClick={() => onselect(video)}
            key={video?.id}
            className="flex flex-col bg-white border border-gray-300  rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 "
          >
            <Image
              src={video?.lesson_img}
              alt={video?.title}
              loading="lazy"
              fetchPriority="low"
              width={200}
              height={200}
              className="bg-cover w-full h-[200px] rounded-t-lg"
            />
            <div className="flex flex-col gap-3 p-2">
              <p className="text-fourth text-[14px] md:text-16 lg:text-[18px]">
                {video?.title}
              </p>
              <p className="text-[12px] text-gray-500">
                اخر تحديث : {video?.updated_at?.slice(0, 10)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default AllVideos;
