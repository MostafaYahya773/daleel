'use client';
import Image from 'next/image';
import React, { use, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import Instractor from '../Instractor/Instractor';
import Link from 'next/link';

const CoursesCart = React.memo(
  ({
    filterOptions,
    filterLevel,
  }: {
    filterOptions: string;
    filterLevel: string;
  }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    console.log(filterOptions, filterLevel);

    interface Course {
      id: number;
      imageUrl: string;
      instructorName: string;
      courseName: string;
      skills: string[];
      rating: number;
      reviewsCount: number;
      level: 'مبتدئ' | 'متوسط' | 'متقدم';
      category: 'مواد جامعية' | 'ذكاء اصطناعي';
      lessonsCount: number;
    }

    const coursesData: Course[] = useMemo(
      () => [
        {
          id: 1,
          imageUrl: '/logo.png',
          instructorName: 'أحمد محمد',
          courseName: 'مقدمة في الذكاء الاصطناعي وتطبيقاته الحديثة 2025',
          skills: [
            'AI Basics',
            'Machine Learning',
            'Neural Networks',
            'Python',
          ],
          rating: 4.8,
          reviewsCount: 5421,
          level: 'مبتدئ',
          category: 'مواد جامعية',
          lessonsCount: 42,
        },
        {
          id: 2,
          imageUrl: '/logo.png',
          instructorName: 'سارة علي',
          courseName:
            'تعلم عميق (Deep Learning) من الصفر باستخدام TensorFlow وPyTorch',
          skills: ['TensorFlow', 'PyTorch', 'CNN', 'RNN'],
          rating: 4.9,
          reviewsCount: 7890,
          level: 'متوسط',
          category: 'ذكاء اصطناعي',
          lessonsCount: 68,
        },
        {
          id: 3,
          imageUrl: '/logo.png',
          instructorName: 'محمد خالد',
          courseName: 'معالجة اللغة الطبيعية NLP بالعربية والإنجليزية',
          skills: ['Transformers', 'BERT', 'Arabic NLP', 'Hugging Face'],
          rating: 4.9,
          reviewsCount: 6234,
          level: 'متقدم',
          category: 'ذكاء اصطناعي',
          lessonsCount: 55,
        },
        {
          id: 4,
          imageUrl: '/logo.png',
          instructorName: 'يوسف عبدالله',
          courseName: 'رؤية الحاسوب ومعالجة الصور باستخدام OpenCV وYOLO',
          skills: ['OpenCV', 'YOLOv8', 'Object Detection', 'Segmentation'],
          rating: 4.7,
          reviewsCount: 4987,
          level: 'متوسط',
          category: 'ذكاء اصطناعي',
          lessonsCount: 61,
        },
        {
          id: 5,
          imageUrl: '/logo.png',
          instructorName: 'أمل حسن',
          courseName: 'بناء نماذج Generative AI - Stable Diffusion وLLMs',
          skills: ['Diffusion', 'LLAMA', 'LangChain', 'Prompt Engineering'],
          rating: 5.0,
          reviewsCount: 9321,
          level: 'متقدم',
          category: 'ذكاء اصطناعي',
          lessonsCount: 79,
        },
        {
          id: 6,
          imageUrl: '/logo.png',
          instructorName: 'خالد العتيبي',
          courseName: 'تعلم الآلة (Machine Learning) - مادة جامعية شاملة',
          skills: [
            'Scikit-learn',
            'Regression',
            'Classification',
            'Clustering',
          ],
          rating: 4.8,
          reviewsCount: 11234,
          level: 'متوسط',
          category: 'مواد جامعية',
          lessonsCount: 50,
        },
        {
          id: 7,
          imageUrl: '/logo.png',
          instructorName: 'ريم سامي',
          courseName: 'MLOps ونشر نماذج الذكاء الاصطناعي في الإنتاج',
          skills: ['Docker', 'Kubernetes', 'MLflow', 'FastAPI'],
          rating: 4.8,
          reviewsCount: 3876,
          level: 'متقدم',
          category: 'ذكاء اصطناعي',
          lessonsCount: 44,
        },
        {
          id: 8,
          imageUrl: '/logo.png',
          instructorName: 'علي الزهراني',
          courseName: 'الذكاء الاصطناعي التوليدي باستخدام ChatGPT وAPIs',
          skills: ['OpenAI API', 'GPT-4', 'Fine-tuning', 'RAG'],
          rating: 4.9,
          reviewsCount: 15678,
          level: 'متوسط',
          category: 'ذكاء اصطناعي',
          lessonsCount: 58,
        },
      ],
      []
    );
    const coursesFilter = useMemo(() => {
      const categorySelected =
        !!filterOptions && filterOptions !== 'كل التخصصات';
      const levelSelected = !!filterLevel && filterLevel !== 'كل المستويات';

      return coursesData.filter((course) => {
        if (categorySelected && levelSelected) {
          return (
            course.category === filterOptions && course.level === filterLevel
          );
        } else if (categorySelected) {
          return course.category === filterOptions;
        } else if (levelSelected) {
          return course.level === filterLevel;
        } else {
          return true;
        }
      });
    }, [coursesData, filterOptions, filterLevel]);

    return (
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {inView && (
          <>
            {coursesFilter?.map((course) => (
              <Link
                href="/CourseDetails"
                key={course?.id}
                className="grid grid-rows-[auto_auto_1fr_auto_auto] gap-5 bg-white hover:shadow-md hover:scale-[103%] transition-all duration-300 border border-gray-300 rounded-lg p-3"
              >
                <div className="img h-[200px] bg-secondary rounded-md">
                  <Image
                    src={course?.imageUrl}
                    alt="Course"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* <div className="grid grid-rows-[auto_auto_auto_auto] gap-5"> */}
                <h3 className="courseName text-fourth font-bold md:text-[15px]">
                  {course?.courseName}
                </h3>
                <div className="skills text-[14px] flex flex-col  gap-2">
                  <p className="text-therd font-bold">المهارات المكتسبة: </p>
                  <div className="flex flex-wrap gap-2 text-therd">
                    {course?.skills.map((skill, index) => (
                      <span
                        key={index}
                        className=" border  border-gray-400 text-fourth/90 font-bold rounded-md text-[12px] px-3 py-1"
                      >{`${skill}`}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.962z" />
                  </svg>
                  <p className="text-[14px] text-gray-500">{`${course?.rating} | `}</p>
                  <p className="text-[14px] text-gray-500">{`${course?.reviewsCount} تقييم `}</p>
                </div>
                <div className="flex gap-3 justify-between items-center text-gray-500 md:text-[16px] text-[14px]">
                  <p className="level ">{course?.level}</p>
                  <p>{`${course?.lessonsCount} درس`}</p>
                </div>
                {/* </div> */}
              </Link>
            ))}
          </>
        )}
      </div>
    );
  }
);
export default CoursesCart;
