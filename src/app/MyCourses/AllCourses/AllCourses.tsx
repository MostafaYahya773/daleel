'use client';

import React, { useMemo, useState } from 'react';
import { Courseprops, SelectOptionProps } from '@/app/interfaces';
import Select from '@/app/_components/Select/Select';
import Image from 'next/image';
import CartLoader from '@/app/_components/Loader/CartLoader';
import Link from 'next/link';
import { SearchX } from 'lucide-react';
const AllCourses = React.memo(({ courses }: { courses: Courseprops[] }) => {
  const [value, setValue] = useState<string>('');
  const selectTypes: SelectOptionProps[] = useMemo(
    () => [
      { label: 'كل التخصصات', value: 'كل التخصصات' },
      { label: 'مواد جامعية', value: 'مواد جامعية' },
      { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
    ],
    []
  );

  const coursesFilter = courses?.filter((course) => {
    if (value === 'كل التخصصات' || value === '') {
      return course;
    } else {
      return course.category === value;
    }
  });

  return (
    <div className="flex flex-col gap-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <h2 className="text-therd text-[25px] font-medium hidden sm:block">
          قائمة الكورسات
        </h2>
        <div className="sm:w-1/2 sm:ms-auto">
          <Select
            selectOptions={selectTypes}
            onselect={(value) => {
              setValue(value);
            }}
          />
        </div>
      </div>
      <div className="cart grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {!courses ? (
          <CartLoader />
        ) : coursesFilter && coursesFilter.length > 0 ? (
          coursesFilter.map((course) => (
            <Link
              href={`/Courses/${course?.slug}`}
              prefetch={true}
              key={course?.id}
              className="grid grid-rows-[auto_auto_1fr_auto] gap-5 bg-white border border-gray-300 rounded-lg  hover:shadow-lg hover:scale-[101%] transition-all duration-300"
            >
              <div className="h-[200px] bg-secondary rounded-md overflow-hidden">
                <Image
                  src={course?.image_url || '/logo.png'}
                  alt="Course"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-3">
                <h3 className="text-fourth font-bold md:text-[15px]">
                  {course?.course_name}
                </h3>

                <div className="text-[14px] flex flex-col gap-2">
                  <p className="text-therd font-bold">المهارات المكتسبة:</p>
                  <div className="flex flex-wrap gap-2 text-therd">
                    {course?.skills.split(',').map((skill, index) => (
                      <span
                        key={index}
                        className="text-fourth/90 font-bold border border-gray-400 rounded-md text-[12px] px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 items-center justify-between px-3">
                <div className="flex gap-1 items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.047 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.962z" />
                  </svg>
                  <span className="text-gray-400">|</span>
                  <p className="text-[14px] text-gray-500 pt-1">
                    {course?.reviews_count} تقييم
                  </p>
                </div>
                <p>{course?.level}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full flex justify-center opacity-50 flex-col gap-7 items-center py-10 h-[70vh]">
            <SearchX className="w-16 h-16 text-therd" />
            <p className="text-fourth text-[16px] md:text-[18px] lg:text-[20px] font-bold">
              لا يوجد دورات مطابقة للفلترة
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default AllCourses;
