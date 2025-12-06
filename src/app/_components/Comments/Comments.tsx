import React from 'react';
import AutoSwiper from '../Swiper/swiper';
import { CommentProps } from '../../interfaces/index';
const HomeComments = React.memo(() => {
  const Comments: CommentProps[] = [
    {
      name: 'ليلى أحمد',
      rate: 5,
      comment:
        'الكورس كان ممتاز! استفدت كتير وبدأت أطبق مشاريع حقيقية على طول.',
    },
    {
      name: 'محمد سامي',
      rate: 3.5,
      comment: 'المحتوى كويس بس كنت أتمنى توضيح بعض النقاط بشكل أعمق.',
    },
    {
      name: 'نوران خالد',
      rate: 4,
      comment:
        'تعلمت حاجات جديدة ومفيدة، الكورس ساعدني أفهم التكنولوجيا الحديثة.',
    },
    {
      name: 'أيمن علي',
      rate: 2.5,
      comment:
        'الكورس متوسط، في شوية أجزاء محتاجة تحسين في الشرح والمثال العملي.',
    },
    {
      name: 'سارة محمد',
      rate: 4.5,
      comment: 'شرح ممتاز وأمثلة عملية مفيدة جدًا للتطبيق الفوري.',
    },
    {
      name: 'عمر حسن',
      rate: 5,
      comment: 'أفضل كورس حضرتُه، المحتوى منظم وواضح جدًا.',
    },
    {
      name: 'رنا سمير',
      rate: 3,
      comment: 'المحتوى جيد لكن كان ممكن يكون فيه أمثلة أكثر توضيحًا.',
    },
    {
      name: 'أحمد عبد الله',
      rate: 4,
      comment: 'الكورس ساعدني أفهم المفاهيم المعقدة بسهولة.',
    },
    {
      name: 'منة الله',
      rate: 2,
      comment: 'الكورس يحتاج تحديث في بعض المواضيع القديمة.',
    },
    {
      name: 'هشام ياسين',
      rate: 4.5,
      comment: 'أنصح بهذا الكورس لكل مبتدئ يرغب في تعلم التكنولوجيا الحديثة.',
    },
  ];

  return (
    <div className="flex flex-col  relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <div>
        <div className="max-w-[1200px] mx-auto lg:py-10 py-5  px-5 lg:px-0 flex flex-col gap-7">
          <h2 className=" lg:text-[40px] md:text-[30px] text-[25px] text-therd border-b-2 border-therd font-bold w-fit pb-5 md:pb-3">
            تقييمات طلاب دليل
          </h2>
          <div className="name__rate flex gap-3 items-center w-full ">
            <AutoSwiper allComments={Comments} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomeComments;
