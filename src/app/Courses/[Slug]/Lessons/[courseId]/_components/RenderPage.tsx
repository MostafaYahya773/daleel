'use client';
import React, { useState } from 'react';
import LessonDescriptions from './lessonDescription';
import AllVideos from './AllVideos';
import { Lessonprops } from '@/app/interfaces';
const RenderPage = React.memo(
  ({
    allLessons,
    setInitialVideo,
    initialVideo,
  }: {
    allLessons: Lessonprops[];
    setInitialVideo: any;
    initialVideo: Lessonprops;
  }) => {
    const Links = [
      {
        name: ' الدرس',
        id: '1',
      },
      {
        name: 'التعليقات',
        id: '2',
      },
    ];
    const [isClicked, setIsClicked] = useState<number>(1);
    return (
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          {Links.map((link) => (
            <button
              key={link.id}
              className={`${
                isClicked === Number(link.id)
                  ? 'border-b border-therd text-therd'
                  : 'text-gray-500'
              } pb-2 md:text-[16px] lg:text-[18px] font-semibold`}
              onClick={() => setIsClicked(Number(link.id))}
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="result">
          <div
            className={`${
              isClicked === 1 ? 'block' : 'hidden'
            } flex flex-col gap-5`}
          >
            <LessonDescriptions
              LessonName={initialVideo.title}
              LessonDescription={initialVideo.description}
            />

            <AllVideos
              onselect={(data) => setInitialVideo(data)}
              videos={allLessons}
            />
          </div>
          <div className={`${isClicked === 2 ? 'block' : 'hidden'}`}></div>
        </div>
      </div>
    );
  }
);
export default RenderPage;
