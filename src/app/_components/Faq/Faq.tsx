'use client';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

const Title = dynamic(() => import('../../_components/Title/Title'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'كل متى يتم تحديث الكورسات؟',
    answer:
      'نقوم بتحديث محتوى الكورسات بشكل مستمر، حتى يظل مواكبًا للتطورات الجديدة. لذلك يحصل الطالب دائمًا على أحدث المعلومات دون الحاجة لشراء أي محتوى إضافي.',
  },
  {
    question: 'هل الكورسات مناسبة للمبتدئين؟',
    answer:
      'نعم، الكورسات مصممة لتناسب المبتدئين تمامًا. نبدأ من الأساسيات وبخطوات واضحة حتى يصل الطالب إلى مستوى متقدم دون الحاجة لأي معرفة سابقة.',
  },
  {
    question: 'هل أحتاج برامج أو أدوات قبل البدء؟',
    answer:
      'لا، لست بحاجة إلى أي أدوات مدفوعة أو برامج معقدة قبل البدء. نستخدم فقط الأدوات المجانية والمتاحة للجميع، ونوضح طريقة استخدامها داخل الدروس.',
  },
  {
    question: 'هل يوجد دعم أثناء الدراسة؟',
    answer:
      'نعم، نقدم دعمًا متواصلًا للطلاب عبر فريق متخصص يجيب عن الأسئلة ويساعد في حل المشكلات، إضافة إلى مجتمع طلابي للتفاعل وتبادل الخبرات.',
  },
  {
    question: 'هل سأعمل على مشاريع تطبيقية حقيقية؟',
    answer:
      'نعم، تعتمد طريقتنا على التعلم بالممارسة. ستقوم بتنفيذ تمارين، وحل دراسات حالة، والعمل على مشروع نهائي يمكنك إضافته إلى معرض أعمالك.',
  },
];

const FAQ = () => {
  return (
    <section id="Faq" className="flex flex-col gap-4 py-7">
      <Title title="الأسئلة الشائعة" />

      {faqData.map((item, index) => (
        <details key={index} className="border shadow-md rounded-lg p-4 group">
          <summary className="cursor-pointer font-semibold text-therd md:text-[18px] sm:text-[16px] text-[14px] list-none flex justify-between items-center">
            {item.question}

            <span className="transition-transform duration-300 group-open:rotate-90 ">
              <ArrowRight className="w-4 h-4" />
            </span>
          </summary>

          <p className="mt-4 text-gray-500 md:text-[16px] sm:text-[14px] text-[13px] font-medium">
            {item.answer}
          </p>
        </details>
      ))}
    </section>
  );
};

export default FAQ;
