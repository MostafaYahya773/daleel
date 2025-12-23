'use client';
import { useParams } from 'next/navigation';
import 'plyr-react/plyr.css';
import dynamic from 'next/dynamic';

// dynamic import عشان يتنفذ بس على client
const Plyr = dynamic(() => import('plyr-react').then((mod) => mod.Plyr), {
  ssr: false,
});
export default function LessonsPage() {
  const param = useParams();
  const videoId = 'joKv_xC11tM';
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div className="mt-20 py-10 grid grid-rows-[auto_1fr] gap-10">
      <div className="mainVideo flex flex-col gap-5">
        <div className="w-full bg-black rounded-md overflow-hidden ">
          <Plyr
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
        </div>

        <h2 className="text-therd font-bold md:text-[20px] text-[16px] border-b border-gray-400 pb-3 ">
          اسم الدرس هنا
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 *:rounded-lg">
        <div className="one bg-black w-full h-[150px]">2</div>
        <div className="two bg-black w-full h-[150px]">2</div>
        <div className="three bg-black w-full h-[150px]">2</div>
        <div className="four bg-black w-full h-[150px]">2</div>
      </div>
    </div>
  );
}
