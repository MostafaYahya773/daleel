import React from 'react';
import getCourseBySlug from '../../../../lib/getCourseBySlug';
import getSession from '../../../../lib/GetSession';
import Link from 'next/link';
interface DataToShow {
  id: string;
  name: string;
  userId: string | undefined;
}
const Payment = async ({ params }: { params: Promise<{ Slug: string }> }) => {
  const { Slug } = await params;
  const slugDecoded = decodeURI(Slug).normalize('NFC').trim();
  const courseInfo = await getCourseBySlug(slugDecoded);
  const data = await getSession();

  const DataToShow: DataToShow = {
    id: courseInfo.id,
    name: courseInfo.course_name,
    userId: data?.userId,
  };

  return (
    <div className="flex flex-col gap-5 mt-32 bg-white p-5 rounded-lg shadow-md w-[90%] mx-auto">
      <h2 className="text-therd text-[18px] font-bold">
        من فضلك اتبع الخطوات التالية لشراء الكورس
      </h2>
      <ul className="flex flex-col gap-5  border-b pb-5 border-gray-300">
        <li className="flex gap-1 items-center text-[14px]">
          <p className="text-therd text-[16px] font-semibold">اسم الكورس : </p>
          <p className="mt-1 text-gray-500  text-[16px]">{DataToShow.name}</p>
        </li>
        <li className="flex gap-1 items-center text-[14px]">
          <p className="text-therd text-[16px] font-semibold">
            الرقم التعريفي للكورس :{' '}
          </p>
          <p className="mt-1 text-gray-400">{DataToShow.id}</p>
        </li>
        <li className="flex gap-1 items-center text-[14px]">
          <p className="text-therd text-[16px] font-semibold">
            الرقم التعريفي للمستخدم :{' '}
          </p>
          <p className="mt-1 text-gray-400">{DataToShow.userId}</p>
        </li>
      </ul>

      <ul className="flex flex-col gap-5">
        <li>1- قم بنسخ رقم التعريفي للكورس</li>
        <li>2- قم بنسخ رقم التعريفي للمستخدم</li>
        <li>
          <span>
            ارسل الارقام التعريفية التي قمت بنسخها مع رساله تتضمن اسمك الثلاثة{' '}
          </span>
          <Link
            className="text-therd underline"
            href="https://wa.me/01159635438"
            target="_blank"
          >
            هنا
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Payment;
