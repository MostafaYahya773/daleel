'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import 'plyr-react/plyr.css';

import useGetLessonsById from '@/app/hook/useGetLessonsById';
import LessonPageAnimation from '../../../../_components/Loader/lessonPageAnimation';
import { Lessonprops } from '@/app/interfaces/index';

// dynamic import عشان يتنفذ بس على client
const Plyr = dynamic(() => import('plyr-react').then((mod) => mod.Plyr), {
  ssr: false,
});

export default function LessonsPage() {
  const { courseId } = useParams();

  const { data: CourseLessons, isLoading } = useGetLessonsById(
    courseId as string
  );

  const [videoUrl, setVideoUrl] = useState<string>('');
  const [lessonName, setLessonName] = useState<string>('');
  const [lessonDescription, setLessonDescription] = useState<string>('');
  const [Playing, setPlaying] = useState<number>(0);
  const handlePlayVideo = (lesson: Lessonprops) => {
    setVideoUrl(lesson.youtube_url);
    setLessonName(lesson.title);
    setLessonDescription(lesson.description);
  };

  useEffect(() => {
    if (CourseLessons?.length) {
      setVideoUrl(CourseLessons[0].youtube_url);
      setLessonName(CourseLessons[0].title);
      setLessonDescription(CourseLessons[0].description);
    }
  }, [CourseLessons]);

  if (isLoading) {
    return <LessonPageAnimation />;
  }

  return (
    <div className="lg:mt-14 mt-10 py-10 flex flex-col gap-7 lg:mx-4">
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-5">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-md overflow-hidden">
            {videoUrl && (
              <Plyr
                key={videoUrl}
                source={{
                  type: 'video',
                  sources: [
                    {
                      src: videoUrl,
                      provider: 'youtube',
                    },
                  ],
                }}
                options={{
                  autoplay: false,
                  muted: true,
                  controls: [
                    'play',
                    'progress',
                    'volume',
                    'fullscreen',
                    'settings',
                  ],
                }}
              />
            )}
          </div>

          <div className="flex flex-col gap-2 md:text-[20px] text-[16px] md:border-b md:border-gray-400 border-none pb-3 px-2 ">
            <h2 className="text-therd font-bold">{lessonName}</h2>
            <p className="text-gray-400 lg:text-[18px] md:text-[16px] text-[15px]">
              {lessonDescription}
            </p>
          </div>
        </div>

        <aside className="grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 lg:gap-1 gap-5 lg:max-h-[438px] overflow-auto lg:border lg:border-gray-300  rounded-md p-2 lesson">
          {CourseLessons?.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => {
                handlePlayVideo(lesson);
                setPlaying(lesson?.id as number);
              }}
              className={`${
                Playing === lesson?.id ? 'bg-gray-200' : 'bg-secondary'
              } grid lg:grid-cols-[auto_1fr] md:grid-cols-1 gap-1 shadow-md lg:shadow-none lg:border-none border border-gray-300 hover:bg-gray-200  cursor-pointer  rounded-lg transition-all duration-300`}
            >
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt={lesson.title}
                className="object-cover rounded-s-lg w-full lg:h-full h-[200px]"
              />
              <div className="flex flex-col justify-center gap-1 p-2 md:p-3">
                <h3 className=" text-therd font-bold text-[20px] lg:text-[16px]">
                  {lesson.title}
                </h3>
                <p className="text-[14px] leading-6 text-gray-500 md:text-[18px] lg:text-[14px]">
                  {lesson?.description.split(' ').slice(0, 10).join(' ')}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
