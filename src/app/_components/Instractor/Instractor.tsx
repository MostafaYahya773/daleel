'use client';
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Instractor() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:gap-5 gap-16 mx-5">
      {inView && (
        <>
          <div className="aboutInstractor flex flex-col lg:gap-7 gap-3">
            <h3 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold text-therd mt-5">
              نبذة عن المدرس
            </h3>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] text-gray-500 leading-8">
              المهندسة شهد مازن طراف هي خبيرة في الذكاء الاصطناعي وعلوم البيانات
              والبرمجة، وُلدت عام 2003 في اللاذقية وتخرجت من جامعة اللاذقية
              كمهندسة متميزة. تمتلك خبرة قوية في التدريب، وتركّز على تبسيط
              المفاهيم المعقدة وبناء مهارات المتدربين في أحدث تقنيات الـAI.
              تدرّس الأسس الرياضية الضرورية للذكاء الاصطناعي، وتقدّم تدريبات
              احترافية في تعلم الآلة والتعلم العميق، إضافةً إلى برمجة بايثون
              باستخدام أشهر المكتبات. كما تتميز بخبرتها في معالجة اللغات
              الطبيعية وتقديم دعم أكاديمي متقدم في مواد الهندسة وعلوم الحاسوب.
              أسلوبها يجمع بين العمق النظري والتطبيق العملي، مما يساعد المتدربين
              على اكتساب مهارات حقيقية قابلة للتطبيق في مشاريع العالم الواقعي.
            </p>
          </div>
          <div className="Instractorimg flex lg:justify-end justify-center items-center">
            <Image
              src="/instractor.png"
              width={500}
              height={500}
              alt="instractor"
              className="object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
