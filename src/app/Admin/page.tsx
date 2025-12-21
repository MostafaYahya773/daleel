'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import AddAndEditindCourseAndLesson from '../_components/Loader/AddAndEditindCourseAndLesson';
const NewCourse = dynamic(() => import('./NewCourse/NewCourse'), {
  ssr: false,
  loading: () => <AddAndEditindCourseAndLesson />,
});
const EditCourse = dynamic(() => import('./EditCourse/EditCourse'), {
  ssr: false,
  loading: () => <p>loading</p>,
});
const DeleteCoure = dynamic(() => import('./DeleteCourse/DeleteCourse'), {
  ssr: false,
  loading: () => <p>loading</p>,
});
const NewLesson = dynamic(() => import('./NewLesson/NewLesson'), {
  ssr: false,
  loading: () => <p>loading</p>,
});
const EditLesson = dynamic(() => import('./EditLesson/EditLesson'), {
  ssr: false,
  loading: () => <p>loading</p>,
});
const DeleteLesson = dynamic(() => import('./DeleteLesson/DeleteLesson'), {
  ssr: false,
  loading: () => <p>loading</p>,
});

export default function Admin() {
  const Options = [
    { name: 'اضافة كورس' },
    { name: 'تعديل كورس' },
    { name: 'حزف كورس' },
    { name: 'اضافة درس' },
    { name: 'تعديل درس' },
    { name: 'حزف درس' },
  ];
  const [isActive, setIsActive] = useState<string>('اضافة كورس');

  return (
    <div className="flex flex-col gap-7">
      <div className="mt-28 grid grid-cols-3 gap-5 border-b-2 border-gray-300 pb-5">
        {Options?.map((opt, index) => (
          <ul key={index}>
            <li
              onClick={() => setIsActive(opt.name)}
              className={`${
                isActive === opt.name
                  ? 'bg-therd text-white'
                  : 'bg-slate-300 text-gray-700'
              }  text-[18px] p-2 text-center cursor-pointer  rounded-lg hover:bg-therd hover:text-white duration-300`}
            >
              {opt.name}
            </li>
          </ul>
        ))}
      </div>
      <div className="resolt">
        <div
          className={`${
            isActive === 'اضافة كورس' ? 'block' : 'hidden'
          } addCourse`}
        >
          <NewCourse />
        </div>
        <div
          className={`${
            isActive === 'تعديل كورس' ? 'block' : 'hidden'
          } addCourse`}
        >
          <EditCourse />
        </div>
        <div
          className={`${
            isActive === 'حزف كورس' ? 'block' : 'hidden'
          } addCourse`}
        >
          <DeleteCoure />
        </div>
        <div
          className={`${
            isActive === 'اضافة درس' ? 'block' : 'hidden'
          } addCourse`}
        >
          <NewLesson />
        </div>
        <div
          className={`${
            isActive === 'تعديل درس' ? 'block' : 'hidden'
          } addCourse`}
        >
          <EditLesson />
        </div>
        <div
          className={`${isActive === 'حزف درس' ? 'block' : 'hidden'} addCourse`}
        >
          <DeleteLesson />
        </div>
      </div>
    </div>
  );
}
