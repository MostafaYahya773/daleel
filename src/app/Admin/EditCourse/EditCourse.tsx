'use client';
import { useEffect, useState } from 'react';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import DropList from './DropList';
import CourseForm from './CourseForm';
export default function EditCourse() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<number>(0);
  const [courseName, setcourseName] = useState<string>('');

  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  }, []);

  return (
    <div className="mt-0 flex flex-col gap-7">
      <DropList
        selectOptions={courses}
        onselect={(courseid: number, CourseName: string) => {
          setcourseID(courseid);
          setcourseName(CourseName);
        }}
      />
      <CourseForm courseID={courseID} courseName={courseName} />{' '}
    </div>
  );
}
