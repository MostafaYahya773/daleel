'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center overflow-hidden"
    >
      {/* {inView && ( */}
      <>
        <div
          className={`whyusimg w-full lg:order-1 order-2 duration-1000 ${
            inView
              ? 'md:translate-x-0 translate-y-0 opacity-100'
              : 'md:translate-x-full translate-y-full opacity-0'
          }`}
        >
          <Image
            src="/AboutUs.png"
            width={400}
            height={400}
            alt="whyUsImage"
            className="object-cover w-full"
          />
        </div>

        <div
          className={`whyusText my-10 flex flex-col gap-7 lg:order-2 order-1 duration-1000 ${
            inView
              ? 'md:translate-x-0 translate-y-0 opacity-100'
              : 'md:-translate-x-full translate-y-full opacity-0'
          }`}
        >
          <h3 className="text-therd lg:text-[35px] text-[25px]">من نحن ؟</h3>
          <p className="lg:text-[20px] md:text-[18px] text-[16px] text-gray-500 leading-8">
            نحن منصة تعليمية متخصصة في الذكاء الاصطناعي، هدفنا تمكين كل متعلم من
            اكتساب مهارات الذكاء الاصطناعي وتطبيقاتها العملية بطريقة سهلة
            وممتعة. نؤمن بأن التعلم لا يجب أن يكون معقدًا، لذلك نقدم محتوى
            تفاعلي ودورات متدرجة تناسب المبتدئين والمحترفين على حد سواء. من خلال
            منصتنا، يمكنك تعلم أساسيات الذكاء الاصطناعي، تعلم البرمجة الخاصة
            بالذكاء الاصطناعي، استكشاف أحدث الأدوات والتقنيات، والعمل على مشاريع
            عملية تساعدك على تحويل المعرفة إلى مهارات حقيقية. نحن نركز على
            الجانب العملي للتعلم، ونوفر تجارب تفاعلية تجعل فهم المفاهيم المتقدمة
            أكثر سهولة ويسر. رؤيتنا هي بناء مجتمع متعلمي الذكاء الاصطناعي حيث
            يمكن لكل شخص تطوير مهاراته، مشاركة أفكاره، والوصول إلى الفرص
            المستقبلية في هذا المجال المتطور باستمرار. انضم إلينا، وابدأ رحلتك
            لتصبح جزءًا من مستقبل الذكاء الاصطناعي.
          </p>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default AboutUs;
