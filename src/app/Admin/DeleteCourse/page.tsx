'use client';
import { useEffect, useState } from 'react';
import GetCources from '../../../../lib/GetCources';
import { Courseprops } from '@/app/interfaces';
import DropList from '../_Components/DropList/DropList';
import ConfirmAlert from '../_Components/ConfirmAlert/ConfirmAlert';

export default function DeleteCourse() {
  const [courses, setCourses] = useState<Courseprops[]>([]);
  const [courseID, setcourseID] = useState<string>('');
  const [courseName, setcourseName] = useState<string>('');
  const [confirmation, setConfirmation] = useState<boolean>(false);
  useEffect(() => {
    const handleData = async () => {
      const data = await GetCources();
      setCourses(data);
    };
    handleData();
  }, []);

  return (
    <div className="mt-0 flex flex-col gap-7 h-screen">
      <DropList
        selectOptions={courses}
        onselect={(courseid: string, CourseName: string) => {
          setcourseID(courseid);
          setcourseName(CourseName);
          setConfirmation(true);
        }}
      />

      <div className={`${confirmation ? 'block' : 'hidden'}`}>
        <ConfirmAlert
          courseName={courseName}
          setConfirmation={setConfirmation}
          courseID={courseID}
        />
      </div>
    </div>
  );
}
