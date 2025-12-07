'use client';
import Image from 'next/image';
import React from 'react';
import {
  BookOpen,
  Zap,
  MessageCircle,
  RefreshCcw,
  Layers,
  Code,
  Calendar,
  Globe,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Features } from '../../interfaces/index';
import dynamic from 'next/dynamic';
const Title = dynamic(() => import('../../_components/Title/Title'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function WhyUs() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const features: Features[] = [
    {
      text: 'شرح بأسلوب بسيط ومباشر',
      icon: BookOpen,
      description: 'تتعلم المفاهيم الصعبة بأسلوب سهل وواضح بدون تعقيد.',
    },
    {
      text: 'تعليم فعال يخليك تشتغل وتطبق من أول أسبوع',
      icon: Zap,
      description: 'تبدأ التطبيق العملي من الأسبوع الأول وتكتسب خبرة حقيقية.',
    },
    {
      text: 'دعم يومي مباشر من المدربين',
      icon: MessageCircle,
      description:
        'المدربين متواجدين يوميًا للرد على أسئلتك ومساعدتك في أي مشكلة.',
    },
    {
      text: 'منهج محدّث دايمًا حسب آخر متطلبات سوق العمل',
      icon: RefreshCcw,
      description:
        'المحتوى دائمًا مواكب لأحدث المهارات والتقنيات المطلوبة في سوق العمل.',
    },
    {
      text: 'محتوى كامل وشامل من الصفر للاحتراف ',
      icon: Layers,
      description:
        'كل ما تحتاجه من معرفة ومهارات موجود هنا من البداية وحتى مستوى الاحتراف.',
    },
    {
      text: 'مشاريع حقيقية تضيفها لبورتفوليوك وGitHub ',
      icon: Code,
      description:
        'تنفذ مشاريع عملية يمكنك إضافتها إلى البورتفوليو الخاص بك وGitHub.',
    },
    {
      text: 'خطة دراسة واضحة وجدول زمني يناسبك',
      icon: Calendar,
      description: 'تتبع خطة منظمة وجدول زمني مرن يناسب جدولك الشخصي.',
    },
    {
      text: 'تعلم من أي مكان وفي أي وقت',
      icon: Globe,
      description:
        'الوصول إلى المحتوى التدريبي من أي مكان وفي أي وقت بدون قيود.',
    },
  ];
  return (
    <div
      ref={ref}
      className="bg-secondary min-h-fit py-5 mt-[70px] lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col px-5 lg:px-0 gap-5 ">
        <Title title="لماذا تختار دليل؟" />
        <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-5">
          <div
            className={`img1 mx-auto md:order-1 order-2 duration-1000 ${
              inView
                ? 'translate-y-0 opacity-100 '
                : 'translate-y-full opacity-0'
            }`}
          >
            <Image
              src="/WhyUs.png"
              width={500}
              height={500}
              alt="user Image"
              className="object-cover w-full"
            />
          </div>
          <div
            className={`text1 grid md:grid-rows-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-none  gap-5 md:order-2 order-1 duration-1000 ${
              inView
                ? 'md:translate-x-0 opacity-100 translate-y-0'
                : 'md:-translate-x-full opacity-0 translate-y-full'
            } `}
          >
            {features.slice(0, 4)?.map((feature: Features, index: number) => (
              <div
                key={index}
                className="flex md:gap-5 gap-2 items-start lg:items-center"
              >
                <feature.icon className="text-therd md:w-[50px] md:h-[50px] w-[40px] h-[40px]" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-fourth md:text-[22px] text-[18px] font-medium">
                    {feature.text}
                  </h4>
                  <p className="md:text-[18px] text-[16px] text-gray-500">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text2 grid md:grid-rows-[auto_auto_auto_auto] grid-cols-1 sm:grid-cols-2 md:grid-cols-none gap-5 duration-1000 ${
              inView ? 'translate-x-0' : 'translate-x-full'
            } `}
          >
            {features.slice(4, 8)?.map((feature: Features, index: number) => (
              <div
                key={index}
                className="flex gap-5 items-start lg:items-center"
              >
                <feature.icon className="text-therd md:w-[50px] md:h-[50px] w-[40px] h-[40px]" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-fourth md:text-[22px] text-[18px]">
                    {feature.text}
                  </h4>
                  <p className="md:text-[18px] text-[16px] text-gray-500">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`img2 w-full mx-auto hidden md:block duration-1000 ${
              inView ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <Image
              src="/WhyUs2.png"
              width={200}
              height={200}
              alt="user Image"
              className="object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
