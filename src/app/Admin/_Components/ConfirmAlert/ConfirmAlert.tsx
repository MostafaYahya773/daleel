'use client';
import useDeleteCourse from '@/app/hook/useDeleteCourse';
import { usePathname } from 'next/navigation';
import React from 'react';
import useDeleteLesson from '@/app/hook/useDeleteLesson';
import useEnroll from '@/app/hook/useEnroll';
import useDeleteStudentsInquiries from '@/app/hook/useDeleteStudentsInquiries';

const ConfirmAlert = React.memo(
  ({
    courseName,
    setConfirmation,
    courseID,
    lessonID,
    lessonName,
    userName,
    userID,
    message,
    studntId,
  }: {
    courseName?: string;
    setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
    courseID?: string;
    lessonID?: number;
    lessonName?: string;
    userName?: string;
    userID?: string;
    message?: string;
    studntId?: string;
  }) => {
    const path = usePathname();
    const { mutate: deleteCourse, isPending } = useDeleteCourse();
    const { mutate: DeleteLesson } = useDeleteLesson();
    const { mutate: ConfirmPayment } = useEnroll();
    const { mutate: DeleteMessage } = useDeleteStudentsInquiries();
    return (
      <div className="fixed z-[100] shadow-md backdrop-blur-sm w-screen h-screen bg-black/10 top-0 left-0 right-0 flex justify-center items-center ">
        <div className="flex flex-col  items-center  gap-3 bg-white px-10 py-5 rounded-lg w-full mx-3 sm:mx-0 sm:w-[500px]">
          <h2 className="text-therd text-[18px] font-bold">
            {`
              ${
                path === '/Admin/DeleteCourse' ? 'هل انت متأكد من حذف كورس' : ''
              }
              ${path === '/Admin/DeleteLesson' ? 'هل انت متأكد من حذف درس' : ''}
              ${
                path === '/Admin/ConfirmPayment'
                  ? 'هل انت متأكد من تاكيد الدفع'
                  : ''
              }
              ${
                path === '/Admin/StudentsInquiries'
                  ? 'هل انت متأكد من حذف الرسالة الخاصة بالطالب'
                  : ''
              }
              
           `}
          </h2>
          <p className="text-gray-500 text-[18px] font-medium">
            {`${path === '/Admin/DeleteCourse' ? courseName : ''} ${
              path === '/Admin/DeleteLesson' ? lessonName : ''
            } ${path === '/Admin/ConfirmPayment' ? courseName : ''}
            ${path === '/Admin/StudentsInquiries' ? message : ''}
            `}
          </p>
          <p className="text-gray-500 text-[18px]">
            {path === '/Admin/ConfirmPayment' ? `للمستخدم` : ''}
          </p>
          <span className="text-[20px] text-therd">
            {path === '/Admin/ConfirmPayment' ? userName : ''}
          </span>

          <div className="flex gap-2 w-full *:w-full *:p-2 *:rounded-lg *:text-white *:duration-300 mt-7">
            <button
              onClick={() => setConfirmation(false)}
              className="bg-gray-400 hover:opacity-80"
            >
              تراجع
            </button>
            <button
              disabled={isPending}
              onClick={() => {
                if (path === '/Admin/DeleteCourse') {
                  deleteCourse(courseID!);
                } else if (path === '/Admin/DeleteLesson') {
                  DeleteLesson(lessonID!);
                } else if (path === '/Admin/ConfirmPayment') {
                  ConfirmPayment({ courseID: courseID!, userID: userID! });
                } else if (path === '/Admin/StudentsInquiries') {
                  DeleteMessage(studntId!);
                }
                setConfirmation(false);
              }}
              className="bg-therd hover:opacity-80"
            >
              {isPending ? (
                <span className="loaderAnimation"></span>
              ) : (
                `${path === '/Admin/ConfirmPayment' ? 'تاكيد الدفع' : 'حذف'}`
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default ConfirmAlert;
