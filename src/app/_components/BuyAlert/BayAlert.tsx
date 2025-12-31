import Link from 'next/link';
import { X } from 'lucide-react';
const BayAlert = ({
  courseName,
  setIsFree,
}: {
  courseName: string;
  setIsFree: React.Dispatch<React.SetStateAction<boolean | null>>;
}) => {
  return (
    <div className="fixed w-screen h-screen backdrop-blur-sm flex justify-center items-center bg-black/50 top-0 left-0 z-[100]">
      <div className="flex flex-col gap-3 items-center bg-white rounded-lg md:w-[700px] sm:w-[500px] mx-2 w-full p-5 relative">
        <X
          onClick={() => setIsFree(true)}
          className="absolute top-2 right-3 md:w-5 w-4 text-gray-400 cursor-pointer"
        />
        <h3 className="text-gray-400 md:text-[20px] text-[18px] font-bold">
          {courseName}
        </h3>
        <p className="text-therd md:text-[18px]">لمتابعة شراء الكورس </p>
        <Link target="_blank" href=" https://wa.me/+201159635438">
          <button className="p-2 bg-therd rounded-lg text-white">
            تواصل معنا
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BayAlert;
