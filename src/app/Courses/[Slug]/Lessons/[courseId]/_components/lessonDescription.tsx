import React from 'react';
interface LessonDescriptionProps {
  LessonName: string;
  LessonDescription: string;
}
const LessonDescriptions = React.memo(
  ({ LessonName, LessonDescription }: LessonDescriptionProps) => {
    return (
      <div className="flex flex-col gap-2 pb-3 border-b border-gray-400">
        <h3 className="text-therd md:text-[18px] lg:text-[20px] font-bold">
          {LessonName}
        </h3>
        <p className="text-gray-500 text-[12px] sm:text-[14px] md:text-[16px]">
          {LessonDescription}
        </p>
      </div>
    );
  }
);
export default LessonDescriptions;
