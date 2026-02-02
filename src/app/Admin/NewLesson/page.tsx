'use client';
import { useEffect, useState } from 'react';
import DropList from '../_Components/DropList/DropList';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import NewLessonForm from './NewLessonForm';
export default function NewLesson() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<string>('');
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  });

  return (
    <div className="flex flex-col gap-7 h-screen">
      <div className="flex flex-col gap-3">
        <h2 className="text-therd md:text-[18px] font-bold px-2">
          اختر اسم الكورس لاضافة الدرس له
        </h2>
        <DropList
          selectOptions={courses}
          onselect={(courseId: string) => {
            setcourseID(courseId);
          }}
        />
      </div>
      <NewLessonForm CourseId={courseID} />
    </div>
  );
}
