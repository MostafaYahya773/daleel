import Image from 'next/image';
import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-secondary py-5 overflow-hidden lg:py-7 relative left-1/2 right-1/2  ml-[-50vw] mr-[-50vw] w-screen">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 px-3 lg:px-0">
        <div className="logo flex flex-col gap-3">
          <h2 className="text-therd font-bold text-[25px]">دليل</h2>
          <p className="text-gray-500">
            منصة تعليمية متكاملة تهدف إلى تطوير مهاراتك العملية والاحترافية من
            خلال كورسات تطبيقية مبنية على احتياجات سوق العمل، ومحتوى تعليمي محدث
            باستمرار لمواكبة أحدث التطورات والتقنيات.
          </p>
          <SocialLinks />
        </div>
        <div className="flex flex-col gap-3 lg:items-center ">
          <h4 className="text-therd font-bold">روابط سريعة</h4>
          <ul className="flex flex-col gap-2 text-gray-500 cursor-pointer">
            <li className="hover:underline hover:text-therd">
              <Link href={'/'}>الرئيسية</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'/Courses'}>الكورسات</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'/Blogs'}>المقالات</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'/Contact'}>تواصل معنا</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 lg:items-center ">
          <h4 className="text-therd font-bold">نبذة عن دليل</h4>
          <ul className="flex flex-col gap-2 text-gray-500 cursor-pointer ">
            <li className="hover:underline hover:text-therd">
              <Link href={'#AboutUs'}>من نحن</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'#aboutInstractor'}>عن المدربين</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'#WhyUs'}>لماذا نحن</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'#OurValues'}>قيمنا</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 lg:items-center ">
          <h4 className="text-therd font-bold">الدعم والمساعدة</h4>
          <ul className="flex flex-col gap-2 text-gray-500 cursor-pointer">
            <li className="hover:underline hover:text-therd">
              <Link href={'/Contact'}>تواصل معنا</Link>
            </li>
            <li className="hover:underline hover:text-therd">
              <Link href={'#Faq'}>الاسئلة الشائعة</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
