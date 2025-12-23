'use client';
import React, { useMemo, useState } from 'react';
import { Lessonprops } from '../../../interfaces/index';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
interface Props {
  selectOptions: Lessonprops[];
  onselect: (value: number) => void;
  isLoading: boolean;
}

const LessonsDropList = React.memo(
  ({ selectOptions, onselect, isLoading }: Props) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [intValue, setInitValue] = useState<string>('');
    const filterData = useMemo(
      () => selectOptions?.filter((item) => item.title.includes(intValue)),
      [intValue, selectOptions]
    );

    const handleSelect = (id: number, name: string) => {
      setInputValue(name);
      onselect(id);
      setIsOpen(false);
    };

    return (
      <div ref={ref} className="options relative">
        {inView && (
          <>
            <div className="input">
              <input
                type="text"
                placeholder={inputValue || 'اسم الدرس'}
                onChange={(e) => setInitValue(e.target.value)}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:text-[16px] text-[14px] outline-none p-2 border rounded-md border-gray-400 text-gray-500 font-bold focus:border-gray-600 cursor-pointer"
              />
              <ArrowDown className="absolute top-3 left-2 w-4 h-4 text-therd" />
              <ul
                className={`flex flex-col gap-0 bg-secondary contact-shadow rounded-b-md absolute z-10 w-full max-h-[400px] overflow-auto ${
                  filterData?.length === 0 || !selectOptions
                    ? 'min-h-[100px]'
                    : 'min-h-fit'
                } ${isOpen ? 'block' : 'hidden'}`}
              >
                {isLoading ? (
                  <Skeleton
                    height={25}
                    count={3}
                    containerClassName="p-1"
                    baseColor="#e5e7eb"
                    highlightColor="#fff"
                  />
                ) : filterData?.length === 0 ? (
                  <li className="mx-auto my-auto text-[18px] text-therd">
                    لا يوجد دروس لهذا الكورس
                  </li>
                ) : !selectOptions ? (
                  <li className="mx-auto my-auto text-[18px] text-therd">
                    من فضلك اختر كورس اولا
                  </li>
                ) : (
                  filterData?.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSelect(item.id!, item.title)}
                      className="flex items-center md:text-[16px] text-[14px] cursor-pointer p-2 hover:bg-therd text-gray-500 hover:text-white rounded-md"
                    >
                      {item.title}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default LessonsDropList;
