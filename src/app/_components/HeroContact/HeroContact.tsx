import Image from 'next/image';

const HeroContact = () => {
  return (
    <div className="bg-secondary  py-5 overflow-hidden lg:py-0 flex justify-center items-center mt-[70px]  lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <span className="absolute md:w-[600] md:h-[600] w-[500px] h-[500px] rounded-full bg-primary -top-[160px] -right-40 z-10"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start px-5 gap-5 z-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-7 justify-center">
          <h2 className=" md:text-[70px] sm:text-[60px] text-[40px] text-therd">
            تواصل معنا{' '}
          </h2>
          <p className=" md:text-[20px] sm:text-[18px] text-[16px] text-gray-500">
            يسعدنا تواصلك معنا في منصة دليل، حيث نحرص على الإجابة على جميع
            استفساراتك وتقديم الدعم اللازم لمساعدتك في الحصول على أفضل تجربة
            استخدام ممكنة
          </p>
        </div>
        <div className="w-full hidden md:block">
          <Image
            src="/contactHero.svg"
            width={500}
            height={500}
            priority
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
