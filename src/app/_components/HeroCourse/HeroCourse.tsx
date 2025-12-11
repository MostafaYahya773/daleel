import Image from 'next/image';
import React from 'react';
import { Award, RefreshCw, MessageCircle } from 'lucide-react';
export default function HeroCourse() {
  interface HeroText {
    description: string;
    icon: any;
  }

  const heroText: HeroText[] = [
    {
      icon: Award,
      description: 'ستحصل على شهادة معتمدة بعد الانتهاء من كل دورة.',
    },
    {
      icon: RefreshCw,
      description: 'تحديثات مجانية مدى الحياة لكل المحتوى',
    },
    {
      description:
        'إمكانية طرح الأسئلة والحصول على توجيه مستمر طوال فترة التعلّم.',
      icon: MessageCircle,
    },
  ];
  return (
    <div className="bg-secondary  lg:min-h-screen  py-5 overflow-x-hidden lg:py-0 flex justify-center items-center mt-[70px] lg:mt-10 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <span className="absolute md:w-[600] md:h-[600] w-[500px] h-[500px] rounded-full bg-primary -top-[160px] -right-40 z-10 "></span>

      <div className="max-w-[1200px] mx-auto px-5 lg:px-2 grid lg:grid-cols-2 grid-cols-1 gap-16 md:gap-8 lg:gap-10 z-40">
        <div className="text flex flex-col gap-7">
          <h1 className="lg:text-[40px] md:text-[30px] text-[30px] font-bold text-therd">
            اكتشف كل الكورسات المتاحة وتعلّم مهارات المستقبل !
          </h1>
          <p className="text-fourth leading-10 lg:text-[20px] md:text-[18px]">
            نأخذك في رحلة تعليمية تبدأ من الأساسيات وصولًا لأحدث مفاهيم{' '}
            <span className="text-therd">الذكاء الاصطناعي</span> بأسلوب بسيط
            يناسب المبتدئين والمتقدمين. تعتمد الكورسات على التطبيق العملي وبناء
            مشاريع حقيقية، مع شرح أدوات الـAI وكيفية استخدامها في العمل وتطوير
            النماذج ودمجها في المواقع والتطبيقات.
          </p>
          <div className="">
            <ul className="flex flex-col gap-5">
              {heroText?.map((item, index) => (
                <li key={index} className="flex gap-3 items-center text-therd">
                  <item.icon className=" w-6 h-6" />
                  <p className="md:text-[18px] text-[16px] ">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="img hidden lg:block">
          <Image
            src="/herocorses.png"
            width={500}
            height={500}
            priority
            alt="user Image"
            className="object-cover md:w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
