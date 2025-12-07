'use client';
import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function HomeFollow() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-10 py-5 min-h-fit duration-[2000ms] ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h4 className="lg:text-[40px] md:text-[30px] text-[25px] font-bold w-fit text-therd">
        يمكنك متابعتنا والتواصل معنا
      </h4>

      <div className="grid md:grid-cols-[30%_70%] contact-shadow ">
        <div className="sendMessage flex flex-col justify-center  gap-3 bg-primary px-3 py-7 rounded-s-lg">
          <h5 className="lg:text-[25px] md:text-[20px] text-[18px] text-therd">
            لديكم استفسار؟
          </h5>
          <p className="md:text-[18px] text-[16px] text-gray-500">
            نرحب بكافة استفساراتكم ويسعدنا خدمتكم والعمل على توفير بيئة تعليمية
            سهلة ومتطورة.
          </p>
          <Link href="/Contact">
            <button className="bg-therd hover:bg-fourth w-full py-2 rounded-lg text-white duration-300">
              تواصل معنا
            </button>
          </Link>
        </div>
        <div className="email bg-therd grid grid-cols-[30%_70%]  gap-3 px-3 py-7 rounded-e-lg">
          <Image
            src="/contacatHome.png"
            alt="email"
            width={130}
            height={130}
            className="object-cover w-full"
          />
          <div className="input flex flex-col justify-center gap-3 pe-3">
            <h6 className="text-white lg:text-[25px] md:text-[20px] text-[18px] font-bold">
              اشترك في القائمة البريدية
            </h6>
            <p className="text-white font-medium md:text-[18px] text-[16px]">
              اشترك في قائمة البريد الالكتروني للحصول على احدث المعلومات
            </p>
            <div className="relative w-full md:w-[90%]">
              <input
                type="text"
                className="w-full ps-12 pe-3 py-2 rounded-lg outline-none dir-ltr"
              />
              <span className="absolute left-0 h-full top-0 px-3 rounded-md text-therd hover:bg-fourth duration-300 cursor-pointer  bg-gray-200  ">
                <Send className="w-5 h-5 my-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
