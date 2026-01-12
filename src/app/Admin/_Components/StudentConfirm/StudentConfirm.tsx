import React from 'react';
import { StudentProps } from '../../../interfaces';
import { X } from 'lucide-react';
interface studentsConfirmProps {
  studnt: StudentProps;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentConfirm = React.memo(
  ({ studnt, setIsShow }: studentsConfirmProps) => {
    return (
      <div className="fixed w-screen h-screen backdrop-blur-sm flex justify-center items-center bg-black/10 top-0 left-0 z-[100]">
        <div className="bg-white md:w-[600px] mx-3 md:mx-0 h-fit rounded-lg p-3">
          <div className="grid grid-rows-[auto_1fr_auto] h-full gap-2 bg-white shadow-sm p-2 rounded-lg w-full">
            <div className="students_info flex flex-col gap-1 w-full border-b border-gray-400 pb-2">
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="font-bold text-[14px]">{studnt?.name}</h3>
                <X
                  onClick={() => setIsShow(false)}
                  className="cursor-pointer w-4 text-gray-600"
                />
              </div>
              <div className="flex items-center justify-between w-full gap-2 text-gray-600 flex-wrap *:text-[15px]">
                <p>{studnt?.phone}</p>
                <p>{studnt?.email}</p>
              </div>
            </div>
            <div className="subject_info flex flex-col gap-2 my-2">
              <h4 className="text-therd font-bold">{studnt?.subject}</h4>
              <p className="text-gray-500 text-[15px]">{studnt?.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default StudentConfirm;
