'use client';
import Image from 'next/image';
import React, { use, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { SearchX } from 'lucide-react';
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

    interface Course {
      id: number;
      slug: string; // للـ routing
      imageUrl: string;
      instructorName: string;
      courseName: string;
      skills: string;
      rating: number;
      reviewsCount: number;
      category: 'مواد جامعية' | 'ذكاء اصطناعي';
      level?: string;
      lessonsCount?: number;
      price: number;
      studentsCount: number;
      description?: string;
      whatYouWillLearn?: string;
      instructorPhotoUrl?: string;
      instructorBio?: string;
    }

    const coursesData: Course[] = useMemo(
      () => [
        {
          id: 1,
          slug: 'ai-grade-3-basics',
          imageUrl: '/logo.png',
          instructorName: 'أحمد محمد',
          courseName: 'الذكاء الاصطناعي للصف الثالث - مفاهيم أساسية ممتعة',
          skills: 'Scratch , AI للأطفال ,  التفكير المنطقي , مشاريع تفاعلية',
          rating: 4.9,
          reviewsCount: 8921,
          category: 'مواد جامعية',
          level: 'سنة ثالثة',
          lessonsCount: 30,
          price: 0,
          studentsCount: 1200,
          description: 'مقدمة ممتعة للذكاء الاصطناعي للأطفال مع مشاريع عملية',
          whatYouWillLearn:
            'Scratch, AI للأطفال, التفكير المنطقي, مشاريع تفاعلية',
          instructorPhotoUrl: '/instructor1.png',
          instructorBio: 'مدرب ذو خبرة في تعليم الذكاء الاصطناعي للأطفال',
        },
        {
          id: 2,
          slug: 'deep-learning-from-zero',
          imageUrl: '/logo.png',
          instructorName: 'سارة علي',
          courseName: 'تعلم عميق Deep Learning من الصفر إلى الاحتراف',
          skills: 'TensorFlow, PyTorch, CNN, RNN',
          rating: 4.9,
          reviewsCount: 7890,
          category: 'ذكاء اصطناعي',
          level: 'متوسط',
          lessonsCount: 68,
          price: 1500,
          studentsCount: 980,
          description: 'تعلم مفصل لمفاهيم التعلم العميق ونماذج CNN وRNN',
          whatYouWillLearn: 'TensorFlow, PyTorch, CNN, RNN',
          instructorPhotoUrl: '/instructor2.png',
          instructorBio: 'خبيرة تعلم عميق مع خبرة تدريبية عالية',
        },
        {
          id: 3,
          slug: 'nlp-arabic-english',
          imageUrl: '/logo.png',
          instructorName: 'محمد خالد',
          courseName: 'معالجة اللغة الطبيعية NLP بالعربية والإنجليزية',
          skills: 'Transformers, BERT , Arabic NLP , Hugging Face',
          rating: 4.9,
          reviewsCount: 6234,
          category: 'ذكاء اصطناعي',
          level: 'متقدم',
          lessonsCount: 55,
          price: 2000,
          studentsCount: 740,
          description: 'تعلم NLP بالعربية والإنجليزية باستخدام أحدث النماذج',
          whatYouWillLearn: 'Transformers, BERT, Arabic NLP, Hugging Face',
          instructorPhotoUrl: '/instructor3.png',
          instructorBio: 'خبير معالجة لغة طبيعية مع خبرة عملية كبيرة',
        },
        {
          id: 4,
          slug: 'computer-vision-opencv-yolo',
          imageUrl: '/logo.png',
          instructorName: 'يوسف عبدالله',
          courseName: 'رؤية الحاسوب ومعالجة الصور باستخدام YOLO وOpenCV',
          skills: 'OpenCV , YOLOv8 , Object Detection , Segmentation',
          rating: 4.7,
          reviewsCount: 4987,
          category: 'ذكاء اصطناعي',
          level: 'متوسط',
          lessonsCount: 61,
          price: 1800,
          studentsCount: 620,
          description: 'مشاريع تطبيقية في رؤية الحاسوب باستخدام YOLO وOpenCV',
          whatYouWillLearn: 'OpenCV, YOLOv8, Object Detection, Segmentation',
          instructorPhotoUrl: '/instructor4.png',
          instructorBio: 'مهندس رؤية حاسوبية وخبير في OpenCV وYOLO',
        },
        {
          id: 5,
          slug: 'ai-grade-5-projects',
          imageUrl: '/logo.png',
          instructorName: 'أمل حسن',
          courseName: 'الذكاء الاصطناعي للصف الخامس - مشاريع عملية متقدمة',
          skills:
            'Python , Teachable Machine , AI Projects , Image Recognition',
          rating: 5.0,
          reviewsCount: 11342,
          category: 'مواد جامعية',
          level: 'سنة رابعة',
          lessonsCount: 40,
          price: 0,
          studentsCount: 1500,
          description: 'مشاريع عملية متقدمة للأطفال في الصف الخامس',
          whatYouWillLearn:
            'Python, Teachable Machine, AI Projects, Image Recognition',
          instructorPhotoUrl: '/instructor5.png',
          instructorBio: 'مدربة ذكاء اصطناعي متقدمة للأطفال',
        },
        {
          id: 6,
          slug: 'machine-learning-grade-4',
          imageUrl: '/logo.png',
          instructorName: 'خالد العتيبي',
          courseName: 'تعلم الآلة للصف الرابع - من الصفر إلى بناء نماذج حقيقية',
          skills: 'Machine Learning , Python , Data Analysis , Classification',
          rating: 4.8,
          reviewsCount: 9876,
          category: 'مواد جامعية',
          level: 'سنة خامسة',
          lessonsCount: 50,
          price: 1200,
          studentsCount: 890,
          description: 'أساسيات تعلم الآلة مع مشاريع حقيقية للصف الرابع',
          whatYouWillLearn:
            'Machine Learning, Python, Data Analysis, Classification',
          instructorPhotoUrl: '/instructor6.png',
          instructorBio: 'خبير تعلم آلة وبناء نماذج حقيقية',
        },
        {
          id: 7,
          slug: 'mlops-deployment',
          imageUrl: '/logo.png',
          instructorName: 'ريم سامي',
          courseName: 'MLOps ونشر نماذج الذكاء الاصطناعي في الإنتاج',
          skills: 'Docker, Kubernetes, MLflow, FastAPI',
          rating: 4.8,
          reviewsCount: 3876,
          category: 'ذكاء اصطناعي',
          level: 'متقدم',
          lessonsCount: 44,
          price: 2200,
          studentsCount: 430,
          description:
            'نشر نماذج الذكاء الاصطناعي باستخدام MLOps وأدوات الإنتاج',
          whatYouWillLearn: 'Docker, Kubernetes, MLflow, FastAPI',
          instructorPhotoUrl: '/instructor7.png',
          instructorBio: 'خبيرة MLOps ونشر نماذج AI في الإنتاج',
        },
        {
          id: 8,
          slug: 'generative-ai-gpt-chatgpt',
          imageUrl: '/logo.png',
          instructorName: 'علي الزهراني',
          courseName: 'الذكاء الاصطناعي التوليدي - GPT وChatGPT وRAG',
          skills: 'OpenAI API, GPT-4 , Fine-tuning, RAG',
          rating: 4.9,
          reviewsCount: 15678,
          category: 'ذكاء اصطناعي',
          level: 'متوسط',
          lessonsCount: 58,
          price: 2500,
          studentsCount: 1100,
          description: 'تعلم الذكاء الاصطناعي التوليدي مع GPT وChatGPT وRAG',
          whatYouWillLearn: 'OpenAI API, GPT-4, Fine-tuning, RAG',
          instructorPhotoUrl: '/instructor8.png',
          instructorBio: 'خبير الذكاء الاصطناعي التوليدي',
        },
      ],
      []
    );

    const coursesFilter = useMemo(() => {
      const categorySelected =
        !!filterOptions && filterOptions !== 'كل التخصصات';

      const isUniversity = filterOptions === 'مواد جامعية';

      const levelSelected =
        !!filterLevel &&
        filterLevel !== (isUniversity ? 'كل السنين' : 'كل المستويات');

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
            {coursesFilter.length > 0 ? (
              coursesFilter.map((course) => (
                <Link
                  href={`/Courses/${course.slug}`}
                  key={course.id}
                  className="grid grid-rows-[auto_auto_1fr_auto_auto] gap-5 bg-white border border-gray-300 rounded-lg p-3 hover:shadow-lg hover:scale-[103%] transition-all duration-300"
                >
                  <div className="h-[200px] bg-secondary rounded-md overflow-hidden">
                    <Image
                      src={course.imageUrl}
                      alt="Course"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-fourth font-bold md:text-[15px]">
                    {course.courseName}
                  </h3>

                  <div className="text-[14px] flex flex-col gap-2">
                    <p className="text-therd font-bold">المهارات المكتسبة:</p>
                    <div className="flex flex-wrap gap-2 text-therd">
                      {course.skills.split(',').map((skill, index) => (
                        <span
                          key={index}
                          className="text-fourth/90 font-bold border border-gray-400 rounded-md text-[12px] px-3 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-1 items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.962z" />
                    </svg>
                    <p className="text-[14px] text-gray-500">
                      {course.rating} |
                    </p>
                    <p className="text-[14px] text-gray-500">
                      {course.reviewsCount} تقييم
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-gray-500 md:text-[16px] text-[14px]">
                    <p>{course.level}</p>
                    {course.lessonsCount && <p>{course.lessonsCount} درس</p>}
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex justify-center opacity-50 flex-col gap-7 items-center py-10">
                <SearchX className="w-16 h-16 text-therd" />
                <p className="text-fourth text-[16px] md:text-[18px] lg:text-[20px] font-bold">
                  لا يوجد دورات مطابقة للفلترة
                </p>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
);
export default CoursesCart;
