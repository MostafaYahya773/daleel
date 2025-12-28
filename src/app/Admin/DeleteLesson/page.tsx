'use client';
import { useEffect, useState } from 'react';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import DropList from '../_Components/DropList/DropList';
import useGetLessonsById from '@/app/hook/useGetLessonsById';
import LessonsDropList from '../_Components/LessonsDropList/LessonsDropList';
import ConfirmAlert from '../_Components/ConfirmAlert/ConfirmAlert';

export default function DeleteLesson() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [lessonsId, setLessonsId] = useState<number>(0);
  const [courseID, setcourseID] = useState<string>('');
  const [lessonName, setlessonName] = useState<string>('');
  const [confirmation, setConfirmation] = useState<boolean>(false);
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };

    handleData();
  }, []);

  const { data: lesson, isLoading } = useGetLessonsById(courseID);

  return (
    <div className="mt-0 flex flex-col gap-7">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-therd md:text-[18px] text-[14px] font-bold px-2">
            اختر اسم الكورس المراد حذف الدرس منه
          </h2>
          <DropList
            selectOptions={courses}
            onselect={(courseid: string) => {
              setcourseID(courseid);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-therd md:text-[18px] text-[14px] font-bold px-2">
            اختر الدرس المراد حذفة
          </h2>
          <LessonsDropList
            selectOptions={lesson!}
            isLoading={isLoading}
            onselect={(lessonId: number, name: string) => {
              setLessonsId(lessonId);
              setlessonName(name);
              setConfirmation(true);
            }}
          />
        </div>
        <div className={`${confirmation ? 'block' : 'hidden'}`}>
          <ConfirmAlert
            setConfirmation={setConfirmation}
            lessonID={lessonsId}
            lessonName={lessonName}
          />
        </div>
      </div>
    </div>
  );
}
