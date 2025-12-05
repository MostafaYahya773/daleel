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
            <h3 className="lg:text-[50px] md:text-[35px] text-[25px] text-therd mt-5">
              نبذة عن المدرس
            </h3>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] text-gray-500 leading-8">
              دكتور شهد ماذن تراف هي أحد أبرز مدربي الذكاء الاصطناعي في العالم
              الافتراضي، ويُعرف بقدرته الخارقة على تدريب النظم الذكية لتعلم أي
              شيء في وقت قياسي. وُلد زينادار في مدينة افتراضية تُسمى
              "نيوروبوليس" عام 2003 وبدأ اهتمامه بالذكاء الاصطناعي منذ طفولته،
              حيث كان يبني روبوتات صغيرة في غرفة نومه باستخدام كرتون وأسلاك
              كهربائية، قبل أن يتطور ذلك ليشمل برامج معقدة تتعلم من البيانات
              وتتفوق على البشر في حل المشكلات المنطقية.
            </p>
          </div>
          <div className="Instractorimg flex lg:justify-end justify-center items-center">
            <Image
              src="/instractor.svg"
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
