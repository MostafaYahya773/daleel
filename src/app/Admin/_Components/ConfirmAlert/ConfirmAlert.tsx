'use client';
import useDeleteCourse from '@/app/hook/useDeleteCourse';
import React from 'react';

const ConfirmAlert = React.memo(
  ({
    courseName,
    setConfirmation,
    courseID,
  }: {
    courseName: string;
    setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
    courseID: string;
  }) => {
    const { mutate: deleteCourse, isPending } = useDeleteCourse();
    return (
      <div className="fixed z-[50] shadow-md backdrop-blur-sm w-screen h-screen bg-black/50 top-0 left-0 right-0 flex justify-center items-center ">
        <div className="flex flex-col items-center  gap-3 bg-white px-10 py-5 rounded-lg min-w-[500px]">
          <h2 className="text-therd text-[18px] font-bold">
            هل انت متاكد من حذف
          </h2>
          <p className="text-gray-500 text-[18px] font-medium">{courseName}</p>
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
                deleteCourse(courseID);
                setConfirmation(false);
              }}
              className="bg-therd hover:opacity-80"
            >
              {isPending ? <span className="loaderAnimation"></span> : 'حذف'}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default ConfirmAlert;
