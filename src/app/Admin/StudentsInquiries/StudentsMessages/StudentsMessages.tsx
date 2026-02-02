'use client';
import React, { useState } from 'react';

import { StudentProps } from '../../../interfaces';
import ConfirmAlert from '../../_Components/ConfirmAlert/ConfirmAlert';
import { MessageCircleOff } from 'lucide-react';
import StudentConfirm from '../../_Components/StudentConfirm/StudentConfirm';
import { formatMessageDate } from '../../../../../lib/formatMessageDate';

const StudentsMessages = React.memo(({ data }: { data: StudentProps[] }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [isShow, setIsShow] = useState(false);
  if (data.length === 0)
    return (
      <div className="text-center text-gray-600 flex flex-col items-center justify-center h-[50vh] gap-7 opacity-50">
        <MessageCircleOff className="w-24 h-24" />
        <span className="lg:text-[25px] md:text-[20px] ">لا يوجد رسائل</span>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-screen">
      {data?.map((studnt) => (
        <div key={studnt?.id}>
          <div className="grid grid-rows-[auto_1fr_auto]  gap-2 bg-white border border-gray-200 shadow-sm p-2 rounded-lg w-full h-[230px]">
            <div className="students_info flex flex-col gap-1 w-full border-b border-gray-400 pb-2">
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="font-bold text-[14px]">{studnt?.name}</h3>
                <span>
                  <span className="text-gray-400 text-[15px]">
                    {studnt?.created_at &&
                      formatMessageDate(studnt?.created_at)}
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between w-full gap-2 text-gray-600 flex-wrap *:text-[15px]">
                <p>{studnt?.phone}</p>
                <p>{studnt?.email}</p>
              </div>
            </div>
            <div className="subject_info flex flex-col gap-2 my-2">
              <h4 className="text-therd font-bold">{studnt?.subject}</h4>
              <p className="text-gray-500 text-[15px]">
                {studnt?.message
                  .split(' ')
                  .slice(0, 10)
                  .join(' ')
                  .concat('.....')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 *:p-1 *:rounded-md ">
              <button
                onClick={() => setConfirmation(true)}
                className="bg-gray-300 text-gray-700 hover:opacity-80"
              >
                حذف
              </button>
              <button
                onClick={() => setIsShow(true)}
                className="bg-therd text-white hover:opacity-80"
              >
                عرض
              </button>
            </div>
          </div>
          <div className={`${confirmation ? 'block' : 'hidden'}`}>
            <ConfirmAlert
              message={studnt?.name}
              setConfirmation={setConfirmation}
              studntId={studnt.id}
            />
          </div>
          <div className={`${isShow ? 'block' : 'hidden'}`}>
            <StudentConfirm studnt={studnt} setIsShow={setIsShow} />
          </div>
        </div>
      ))}
    </div>
  );
});

export default StudentsMessages;
