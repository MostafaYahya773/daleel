'use client';
import { useEffect, useState } from 'react';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import DropList from '../_Components/DropList/DropList';
import CourseForm from './CourseForm';
export default function EditCourse() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<string>('');
  const [courseName, setcourseName] = useState<string>('');

  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  }, []);

  return (
    <div className="flex flex-col gap-7 h-screen">
      <div className="flex flex-col gap-3">
        <h2 className="text-therd md:text-[18px] font-bold px-2">
          اختر اسم الكورس المراد تحديثة
        </h2>
        <DropList
          selectOptions={courses}
          onselect={(value: string, CourseName: string) => {
            setcourseID(value);
            setcourseName(CourseName);
          }}
        />
      </div>
      <CourseForm courseID={courseID} courseName={courseName} />
    </div>
  );
}
