'use client';
import 'plyr-react/plyr.css';
import { Lessonprops } from '@/app/interfaces/index';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import RenderPage from './RenderPage';
const Plyr = dynamic(() => import('plyr-react').then((mod) => mod.Plyr), {
  ssr: false,
});

export default function VideosPage({
  LessonInfo,
}: {
  LessonInfo: Lessonprops[];
}) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [initialVideo, setInitialVideo] = useState<Lessonprops>({
    course_id: '',
    title: LessonInfo?.[0]?.title,
    description: LessonInfo?.[0]?.description,
    youtube_url: LessonInfo?.[0]?.youtube_url,
    is_free: false,
    lesson_img: LessonInfo?.[0]?.lesson_img,
  });

  useEffect(() => setMounted(true), []);
  return (
    <div className="lg:mt-14 mt-10 py-10 flex flex-col gap-3 px-2">
      <div className="flex flex-col gap-5 lg:h-[500px] ">
        {initialVideo && mounted && (
          <Plyr
            source={{
              type: 'video',
              title: initialVideo.title,
              sources: [
                {
                  src: initialVideo.youtube_url,
                  provider: 'youtube',
                  type: 'video/mp4',
                },
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
        )}
      </div>
      <RenderPage
        allLessons={LessonInfo}
        initialVideo={initialVideo}
        setInitialVideo={setInitialVideo}
      />
    </div>
  );
}
