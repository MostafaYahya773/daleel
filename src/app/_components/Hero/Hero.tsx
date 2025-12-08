import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroCounter from '../HeroCounter/HeroCounter';
import { GraduationCap, Sparkle } from 'lucide-react';
export default function Hero() {
  return (
    <div className="bg-secondary min-h-screen  py-5 overflow-x-hidden lg:py-0 flex justify-center  items-center mt-[70px]  lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <span className="absolute md:w-[600] md:h-[600] w-[500px] h-[500px] rounded-full bg-primary -top-[160px] -right-40 z-10"></span>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 md:gap-8 lg:gap-0 max-w-[1200px] mx-auto h-full px-2 z-20">
        <div className="text flex flex-col gap-10 ">
          <h1 className="lg:text-[40px] md:text-[30px] text-[40px] font-bold text-therd">
            تعلم الذكاء الاصطناعي من الصفر إلى الاحتراف
          </h1>
          <p className="text-fourth lg:text-[20px]">
            منصة تعليمية متخصصة في{' '}
            <span className="text-therd">الذكاء الاصطناعي</span>، تقدم محتوى
            عالي الجودة بأسلوب مبسط وعملي، مع مشاريع حقيقية وشهادات معتمدة
          </p>
          <HeroCounter />
          <div className="link w-full flex justify-center lg:justify-start">
            <Link
              href="/Courses"
              className="shadow-[0px_0px_1px] hover:bg-primary hover:text-therd transition-all duration-300 shadow-therd lg:text-[25px] md:text-[25px] text-[20px] text-fourth  px-16 py-3 rounded-lg cursor-pointer"
            >
              ابدأ رحلتك الأن
            </Link>
          </div>
        </div>
        <div className="img flex  justify-center items-center relative z-0">
          <GraduationCap className="absolute w-20 h-20 right-10 top-0 rounded-full text-therd hidden lg:block" />
          <Sparkle className="absolute w-20 h-20 left-10 top-0 rounded-full text-therd hidden lg:block" />
          <Image
            src="/hero.png"
            width={420}
            height={420}
            priority
            alt="hero img"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
