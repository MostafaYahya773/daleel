'use client';
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
const Title = dynamic(() => import('../../_components/Title/Title'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const OurValues = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 grid-cols-1 gap-8 overflow-hidden"
      id="OurValues"
    >
      <div
        className={`flex flex-col gap-6 md:mt-7  duration-1000 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <Title title="قيمتنا التي نؤمن بها" />
        <p className="md:text-[18px] text-[16px] text-gray-500 lg:leading-10 leading-7 ">
          نؤمن في <span className="text-therd">دليل</span> بالوضوح التام الذي
          يجعل كل خطوة مكتوبة ومحددة وواضحة للطالب منذ اللحظة الأولى فلا نتركه
          يضيع أبدًا وبالصدق والأمانة التامة فلا نعد بما لا نستطيع تنفيذه وننفذ
          بالحرف ما نعد به وبالعملية المطلقة فلا نُدرّس نظريات طويلة ومعقدة بل
          كل درس ينتج مشروعًا حقيقيًا يمكن عرضه في السيرة الذاتية والمحفظة
          واستخدامه في مقابلات العمل مباشرة وبالشمولية الكاملة فلا نترك أحدًا
          خلفنا مهما كان مستواه السابق صفرًا أو متقدمًا وبالاستمرارية الدائمة
          فالطالب يبقى معنا مدى الحياة بالدعم المباشر والتحديثات المستمرة
          والمجتمع القوي المتكامل الذي يدعم بعضه بعضًا ويتبادل الخبرات حتى بعد
          التخرج والنجاح في سوق العمل.
        </p>
      </div>
      <div
        className={`${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } duration-1000 `}
      >
        <Image
          src="/OurValue.png"
          alt="Values Illustration"
          width={300}
          height={300}
          className="rounded-lg object-cover w-full"
        />
      </div>
    </div>
  );
};

export default OurValues;
