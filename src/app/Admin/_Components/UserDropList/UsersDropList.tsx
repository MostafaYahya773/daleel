'use client';
import React, { useMemo, useState } from 'react';
import { UserProps } from '../../../interfaces/index';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Props {
  selectOptions: UserProps[];
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  onselect: (value: string, name: string) => void;
}

const UsersDropList = React.memo(
  ({ selectOptions, onselect, setConfirmation }: Props) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [intValue, setInitValue] = useState<string>('');
    // filterData محسّنة بدون شرط غير ضروري
    const filterData = useMemo(
      () => selectOptions?.filter((item) => item.full_name.includes(intValue)),
      [intValue, selectOptions]
    );

    const handleSelect = (id: string, name: string) => {
      setInputValue(name);
      onselect(id, name);
      setIsOpen(false);
      setConfirmation(true);
    };

    return (
      <div ref={ref} className="options relative">
        {inView && (
          <>
            <div className="input">
              <input
                type="text"
                placeholder={inputValue || 'اسم المستخدم'}
                onChange={(e) => setInitValue(e.target.value)}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:text-[16px] text-[14px] outline-none p-2 border rounded-md border-gray-400 text-gray-500 font-bold focus:border-gray-600 cursor-pointer"
              />
              <ArrowDown className="absolute top-3 left-2 w-4 h-4 text-therd" />
              <ul
                className={`flex flex-col gap-0 bg-secondary contact-shadow rounded-b-md absolute z-10 w-full max-h-[300px] h-fit overflow-y-auto ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {filterData?.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSelect(item?.id!, item?.full_name!)}
                    className="flex items-center md:text-[16px] text-[14px] cursor-pointer p-2 hover:bg-therd text-gray-500 hover:text-white rounded-md"
                  >
                    {item.full_name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default UsersDropList;
