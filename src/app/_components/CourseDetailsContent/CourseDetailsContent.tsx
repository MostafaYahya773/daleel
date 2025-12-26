'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BookCheck } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const CourseDetailsContent = ({
  description,
  whatYouWillLearn,
  price,
  courseId,
  slug,
}: {
  description: string;
  whatYouWillLearn: string;
  price: number;
  courseId: string;
  slug: string;
}) => {
  interface FutureProps {
    name: string;
    id: number;
  }
  const features: FutureProps[] = [
    { name: 'وصف الدورة', id: 1 },
    { name: 'عن المعلم', id: 2 },
    { name: 'التقييم', id: 3 },
  ];
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="grid md:grid-cols-[2fr_1.2fr] grid-cols-1 gap-5">
      <div className="flex flex-col gap-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {features?.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelected(feature.id)}
              className={`${
                selected === feature.id
                  ? 'bg-therd text-white'
                  : 'bg-gray-200 text-gray-600'
              } flex items-center justify-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-therd hover:text-white duration-300`}
            >
              {feature.name}
            </div>
          ))}
        </div>
        <div className="resort px-3">
          <div className={`${selected === 1 ? 'block' : 'hidden '}`}>
            <p className="leading-10 md:text-[18px]">{description}</p>
            {!description && (
              <Skeleton height={15} count={4} baseColor="#e5e7eb" />
            )}
          </div>
          <div
            className={`${
              selected === 2 ? 'flex gap-5 items-center' : 'hidden'
            }`}
          >
            <div className="description flex flex-col gap-2">
              <h3 className="md:text-[20px] font-bold text-therd">
                المهندسة شهد ماذن طراف
              </h3>
              <p className="text-gray-500 leading-8 md:text-[18px]">
                المهندسة شهد مازن طراف هي خبيرة في الذكاء الاصطناعي وعلوم
                البيانات والبرمجة، وُلدت عام 2003 في اللاذقية وتخرجت من جامعة
                اللاذقية كمهندسة متميزة. تمتلك خبرة قوية في التدريب، وتركّز على
                تبسيط المفاهيم المعقدة وبناء مهارات المتدربين في أحدث تقنيات
                الـAI. تدرّس الأسس الرياضية الضرورية للذكاء الاصطناعي
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-md overflow-hidden flex flex-col ">
        <div className="img w-full h-full">
          <Image
            src="/blogHero.jpg"
            alt="logo"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="whatYouLearn flex flex-col gap-5">
            <h3 className="md:text-[20px] text-[16px] font-bold text-therd">
              ما الذي ستتعلمة في هذه الدورة ؟
            </h3>
            <div className="text-gray-500 flex flex-col  gap-5 leading-7">
              {whatYouWillLearn ? (
                whatYouWillLearn?.split(',').map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <BookCheck className="w-5 h-5 text-therd" />
                    <ul>
                      <li key={index}>{item}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <Skeleton height={20} count={7} baseColor="#e5e7eb" />
              )}
            </div>
            <p
              className={`${
                price === 0 && 'hidden'
              } text-therd font-bold text-[30px] text-center flex justify-center items-center gap-2`}
            >
              {price || (
                <Skeleton
                  height={20}
                  width={50}
                  count={1}
                  containerClassName="pt-1"
                  baseColor="#e5e7eb"
                />
              )}
              <span>جنية</span>
            </p>
            <Link
              className="w-full"
              href={
                price === 0
                  ? `/Courses/${slug}/Lessons/${courseId}`
                  : `/Courses/${slug}`
              }
            >
              <button className="bg-therd w-full py-2 md:text-[20px] text-[16px] rounded-lg text-white hover:opacity-70 duration-300">
                {price === 0 ? 'مشاهدة الدورة' : 'اشتري الان'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
