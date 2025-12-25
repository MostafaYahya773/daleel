'use client';
import 'plyr-react/plyr.css';
import { Lessonprops } from '@/app/interfaces/index';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Video } from 'lucide-react';
const Plyr = dynamic(() => import('plyr-react').then((mod) => mod.Plyr), {
  ssr: false,
});
export default function VideosPage({
  LessonInfo,
}: {
  LessonInfo: Lessonprops[];
}) {
  const [initialVideo, setInitialVideo] = useState<string>(
    LessonInfo?.[0]?.youtube_url
  );
  return (
    <div className="lg:mt-14 mt-10 py-10 grid grid-cols-[70%_30%] gap-7 lg:mx-4">
      <div className="flex flex-col gap-5">
        <Plyr
          source={{
            type: 'video',
            title: LessonInfo?.[0]?.title,
            sources: [
              { src: initialVideo, provider: 'youtube', type: 'video/mp4' },
            ],
          }}
          options={{
            controls: [
              'play-large',
              'restart',
              'progress',
              'volume',
              'fullscreen',
              'settings',
            ],
          }}
        />
      </div>

      <aside className="flex flex-col lg:gap-1 gap-5  overflow-auto lg:border lg:border-gray-300  rounded-md p-2 lesson">
        {LessonInfo?.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => {
              setInitialVideo(lesson.youtube_url);
            }}
            className={`
             grid lg:grid-cols-[auto_1fr] md:grid-cols-1 gap-1 shadow-md lg:shadow-none lg:border-none border border-gray-300 hover:bg-gray-200  cursor-pointer  rounded-lg transition-all duration-300`}
          >
            <div className="flex justify-center items-center gap-2 p-2  text-therd">
              <Video className="w-5 h-5 mt-1" />
              <h3 className=" text-[20px] lg:text-[16px]">{lesson.title}</h3>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
