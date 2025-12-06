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
export default function WhyUs() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  interface Feature {
    text: string;
    icon: any;
    description: string;
  }
  const features: Feature[] = [
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
      className="bg-secondary min-h-fit py-5 mt-[70px] px-5 lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen"
    >
      {inView && (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-5 ">
          <h3 className="lg:text-[50px] md:text-[35px] text-[25px] text-therd font-bold text-start ">
            لماذا دليل !
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-5">
            <div className="img1 mx-auto md:order-1 order-2">
              <Image
                src="/WhyUs.png"
                width={500}
                height={500}
                alt="user Image"
                className="object-cover w-full"
              />
            </div>
            <div className="text1 grid md:grid-rows-[auto_auto_auto_auto] grid-cols-1 sm:grid-cols-2 md:grid-cols-none gap-5 md:order-2 order-1">
              {features.slice(0, 4)?.map((feature: Feature, index: number) => (
                <div key={index} className="flex md:gap-5 gap-2 items-start">
                  <feature.icon className="text-therd lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-fourth lg:text-[25px] md:text-[20px] text-[18px]">
                      {feature.text}
                    </h3>
                    <p className="md:text-[16px] text-[14px] text-gray-500">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text2 grid md:grid-rows-[auto_auto_auto_auto] grid-cols-1 sm:grid-cols-2 md:grid-cols-none gap-5">
              {features.slice(4, 8)?.map((feature: Feature, index: number) => (
                <div key={index} className="flex gap-5 items-start">
                  <feature.icon className="text-therd lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-fourth lg:text-[25px] md:text-[20px] text-[18px]">
                      {feature.text}
                    </h3>
                    <p className=" md:text-[20px] text-[14px] text-gray-500">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="img2 w-full mx-auto hidden md:block">
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
      )}
    </div>
  );
}
