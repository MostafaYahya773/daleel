import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function Hero() {
  return (
    <div className="bg-therd lg:min-h-[500px] min-h-screen flex justify-center items-center mt-16 relative  left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-0 max-w-[1200px] mx-auto h-full px-2">
        <div className="text flex flex-col gap-8 lg:text-start text-center">
          <h1 className="lg:text-[40px] md:text-[30px] text-[23px] font-bold text-white">
            تعلم الذكاء الاصطناعي من الصفر إلى الاحتراف
          </h1>
          <p className="text-secondary lg:text-[20px]  ">
            منصة تعليمية متخصصة في الذكاء الاصطناعي، تقدم محتوى عالي الجودة
            بأسلوب مبسط وعملي، مع مشاريع حقيقية وشهادات معتمدة
          </p>
          <div className="link w-full">
            <Link
              href="/Courses"
              className="bg-white lg:text-[30px] md:text-[25px] text-[20px] text-therd  px-16 py-3 rounded-lg cursor-pointer"
            >
              ابدأ رحلتك الأن
            </Link>
          </div>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-secondary">
            انضم الأن الي أكثر من 1000 طالب اختاروا الطريق الإحترافي في الذكاء
            الاصطناعي
          </p>
        </div>
        <div className="img flex lg:justify-end justify-center items-center ">
          <Image
            src="/heroImg.png"
            width={420}
            height={420}
            priority
            alt="hero img"
            className="object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
