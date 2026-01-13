import Image from 'next/image';
import { Computer, CalendarRange, ClockFading } from 'lucide-react';
import Link from 'next/link';
interface counter {
  name: string;
  icon: any;
}
const counter: counter[] = [
  {
    name: 'مقالات تقنية ',
    icon: <Computer className="w-5 h-5" />,
  },
  {
    name: 'تحديثات مستمرة',
    icon: <CalendarRange className="w-5 h-5" />,
  },
  {
    name: 'قرائة سريعة',
    icon: <ClockFading className="w-5 h-5" />,
  },
];
const HeroBlog = () => {
  return (
    <div className="bg-secondary py-5 overflow-hidden lg:py-0 flex justify-center items-center mt-[70px] lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center sm:text-start px-5 gap-5 z-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-5">
            <h2 className="lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]">
              اهلا بك في <span className="text-therd">مدونتنا</span>
            </h2>
            <p className="text-gray-500 lg:text-[20px] md:text-[14px] sm:text-[14px] text-[12px]">
              استكشف مقالات ثرية بالأفكار الملهمة، والنصائح العملية التي تساعدك
              على التعلّم، النمو، وتوسيع آفاقك. تصفح المحتوى، اغتنم المعرفة،
              وابدأ رحلتك نحو تطوير مهاراتك واكتشاف كل ما هو جديد في عالم
              المعرفة والتقنية.
            </p>
          </div>
          <div className="counter">
            <div className="flex gap-3 justify-center md:justify-start">
              {counter.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center md:justify-start flex-wrap gap-2 lg:text-[20px] md:text-[14px] sm:text-[14px] text-[12px]"
                >
                  <span className="text-therd">{item.icon}</span>
                  <p className="text-gray-500">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="#blog"
            className="p-2 text-center font-semibold md:text-[18px] bg-therd rounded-md text-white md:w-1/2 mt-5 hidden xl:block hover:bg-therd/70 duration-300"
          >
            استكشف الان
          </Link>
        </div>
        <Image
          src="/blog.png"
          width={500}
          height={500}
          priority
          alt="hero"
          className="object-cover w-full h-full hidden sm:block"
        />
      </div>
    </div>
  );
};

export default HeroBlog;
