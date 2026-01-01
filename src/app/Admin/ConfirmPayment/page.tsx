'use client';
import React, { useEffect, useState } from 'react';
import getUsers from '../../../../lib/GetUsers';
import DropList from '../_Components/DropList/DropList';
import { UserProps, Courseprops } from '../../interfaces/index';
import GetCources from '../../../../lib/GetCources';
import UsersDropList from '../_Components/UserDropList/UsersDropList';
import ConfirmAlert from '../_Components/ConfirmAlert/ConfirmAlert';
export default function ConfirmPayment() {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [users, setUsers] = useState<UserProps[]>();
  const [courses, setcourses] = useState<Courseprops[]>();
  const [corseID, setcourseID] = useState<string>('');
  const [userID, setuserID] = useState<string>('');
  const [userName, setuserName] = useState<string>('');
  const [courseName, setcourseName] = useState<string>('');

  useEffect(() => {
    const handleUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    const handleCourses = async () => {
      const courses = await GetCources();
      setcourses(courses);
    };
    handleUsers();
    handleCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-therd font-bold mx-2">اختر اسم الكورس</h2>
        <DropList
          selectOptions={courses!}
          onselect={(id: string, name: string) => {
            setcourseID(id);
            setcourseName(name);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-therd font-bold mx-2">اختر اسم المستخدم</h2>
        <UsersDropList
          selectOptions={users!}
          setConfirmation={setConfirmation}
          onselect={(userID: string, name: string) => {
            setuserID(userID);
            setuserName(name);
          }}
        />
      </div>
      <div className={`${confirmation ? 'block' : 'hidden'}`}>
        <ConfirmAlert
          courseID={corseID}
          setConfirmation={setConfirmation}
          courseName={courseName}
          userName={userName}
          userID={userID}
        />
      </div>
    </div>
  );
}
