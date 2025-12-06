'use client';
import Image from 'next/image';
import React from 'react';
import { Route, BadgeCheck, Video, UserCheck } from 'lucide-react';
import { Features } from '../../interfaces/index';
import { useInView } from 'react-intersection-observer';

export default function Target() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const ourTarget: Features[] = [
    {
      text: 'مسار واضح من اليوم الأول',
      icon: Route,
      description:
        'تبدأ رحلتك بخطة واضحة ومراحل محددة تعرف من خلالها إيه اللي هتتعلمه وامتى.',
    },
    {
      text: 'شهادة موثّقة ويمكن التحقق منها',
      icon: BadgeCheck,
      description:
        'تحصل على شهادة رسمية قابلة للتحقق online وتضيفها بسهولة على LinkedIn.',
    },
    {
      text: 'لقاءات حية مع المدربين',
      icon: Video,
      description:
        'تحضر جلسات Live للتطبيق العملي وطرح الأسئلة بشكل مباشر مع المدرب.',
    },
    {
      text: 'متابعة شخصية وتوجيه مهني',
      icon: UserCheck,
      description:
        'مهندسين متخصصين يتابعوا تقدمك خطوة بخطوة ويوجهوك للوصول لهدفك المهني.',
    },
  ];
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-5 my-5 duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-[30%]'
      }`}
    >
      {/* {inView && ( */}
      {/* <> */}
      <div className="flex flex-col gap-5 lg:pt-5 md:mt-3">
        <h3 className="lg:text-[20px] md:text-[18px] text-[16px] text-gray-500 leading-8">
          هدفنا في <span className="text-therd font-bold">دليل</span> أن يخرج كل
          طالب من منصتنا محترفًا حقيقيًا في الذكاء الاصطناعي، يمتلك سجلاً مهنيًا
          قويًا يضم مشاريع فعلية قابلة للعرض، وشهادات معتمدة باسمه، ومسارًا
          واضحًا تمامًا يؤهله للحصول على الوظيفة التي يطمح إليها أو لبناء مشروعه
          الخاص، في أقصر وقت ممكن وبأعلى كفاءة ممكنة.
        </h3>
        <Image
          src="/Target.png"
          width={400}
          height={400}
          alt="user Image"
          loading="lazy"
          className="object-cover mx-auto "
        />
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="lg:text-[50px] md:text-[35px] text-[25px] text-therd font-bold text-start ">
          دليل يضمن لك{' '}
        </h4>
        <div className="text grid sm:grid-cols-2 md:grid-rows-4 md:grid-cols-none gap-3 ">
          {ourTarget.slice(0, 4)?.map((target: Features, index: number) => (
            <div key={index} className="flex md:gap-5 gap-2 items-start">
              <target.icon className="text-therd lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]" />
              <div className="flex flex-col gap-2">
                <h3 className="text-fourth lg:text-[25px] md:text-[20px] text-[18px]">
                  {target.text}
                </h3>
                <p className="lg:text-[20px] md:text-[16px] text-[14px] text-gray-500">
                  {target?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </> */}
      {/* )} */}
    </div>
  );
}
