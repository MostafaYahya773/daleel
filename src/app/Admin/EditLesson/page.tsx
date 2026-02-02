'use client';
import { useEffect, useState } from 'react';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import DropList from '../_Components/DropList/DropList';
import LessonForm from './LessonForm';
import useGetLessonsById from '@/app/hook/useGetLessonsById';
import LessonsDropList from '../_Components/LessonsDropList/LessonsDropList';

export default function EditCourse() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [lessonsId, setLessonsId] = useState<number>(0);
  const [courseID, setcourseID] = useState<string>('');
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };

    handleData();
  }, []);

  const { data: lesson, isLoading } = useGetLessonsById(courseID);

  return (
    <div className="mt-0 flex flex-col gap-7 h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-therd md:text-[18px] font-bold px-2">
            اختر اسم الكورس المراد تعديلة
          </h2>
          <DropList
            selectOptions={courses}
            onselect={(courseid: string) => {
              setcourseID(courseid);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-therd md:text-[18px] font-bold px-2">
            اختر الدرس المراد تعديلة
          </h2>
          <LessonsDropList
            selectOptions={lesson!}
            isLoading={isLoading}
            onselect={(lessonId: number) => {
              setLessonsId(lessonId);
            }}
          />
        </div>
      </div>
      <LessonForm lessonID={lessonsId} isLoading={isLoading} />
    </div>
  );
}
