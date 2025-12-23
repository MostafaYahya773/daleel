'use client';
import React, { useEffect, useState } from 'react';
import DropList from '../_Components/DropList/DropList';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import LessonForm from '../EditLesson/LessonForm';
import NewLessonForm from './NewLessonForm';
export default function NewLesson() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<number>(0);
  const [courseName, setcourseName] = useState<string>('');
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  });

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="text-therd md:text-[18px] font-bold px-2">
          اختر اسم الكورس لاضافة الدرس له
        </h2>
        <DropList
          selectOptions={courses}
          onselect={(courseId: number, courseName: string) => {
            setcourseID(courseId);
            setcourseName(courseName);
          }}
        />
      </div>
      <NewLessonForm CourseId={courseID} courseName={courseName} />
    </div>
  );
}
