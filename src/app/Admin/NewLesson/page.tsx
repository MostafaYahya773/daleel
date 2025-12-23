'use client';
import React, { useEffect, useState } from 'react';
import DropList from '../_Components/DropList/DropList';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import LessonForm from '../_Components/LessonForm/LessonForm';
export default function NewLesson() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<number>(0);
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  });

  return (
    <div className="flex flex-col gap-7">
      <DropList
        selectOptions={courses}
        onselect={(id: number, name: string) => {
          setcourseID(id);
        }}
      />
      <LessonForm courseId={courseID} />
    </div>
  );
}
