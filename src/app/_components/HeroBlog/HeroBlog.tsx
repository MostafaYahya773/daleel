import Image from 'next/image';
import React from 'react';

const HeroBlog = () => {
  return (
    <div className="w-screen lg:h-[85vh] h-[50vh] mt-[70px] lg:mt-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      <Image
        src="/blogsHero.jpg"
        width={1200}
        height={1200}
        alt="hero"
        className="absolute top-0 left-0 object-cover object-[40%_60%] md:object-[85%_15%] w-full h-full "
      />
    </div>
  );
};

export default HeroBlog;
