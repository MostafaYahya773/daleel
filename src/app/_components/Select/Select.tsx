'use client';
import React, { useState } from 'react';
import { SelectOptionProps } from '../../interfaces/index';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const Select = React.memo(
  ({ selectOptions }: { selectOptions: SelectOptionProps[] }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
      <div ref={ref} className="options relative">
        {inView && (
          <>
            <div className="input">
              <input
                onClick={() => setIsOpen(!isOpen)}
                type="text"
                className="w-full md:text-[16px] text-[14px] outline-none p-2 border rounded-md border-gray-400 text-gray-500 font-bold focus:border-gray-600 cursor-pointer"
                placeholder={selectOptions[0].value}
                value={inputValue || ''}
                readOnly
              />
              <ArrowDown className="absolute top-3 left-2 w-4 h-4 text-therd" />
            </div>
            <ul
              className={`flex flex-col gap-0 bg-secondary shadow-md rounded-b-md ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              {selectOptions?.map((item, index) => (
                <li
                  onClick={() => {
                    setInputValue(item.value);
                    setIsOpen(false);
                  }}
                  key={index}
                  className="flex items-center md:text-[16px] text-[14px] cursor-pointer p-2 hover:bg-therd text-gray-500 hover:text-white rounded-md"
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
);

export default Select;
