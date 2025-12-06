'use client';
import React from 'react';
export default function HeroCounter() {
  interface CounterProps {
    name: string;
    number: number;
  }
  const counter: CounterProps[] = [
    { name: 'طالب', number: 100 },
    { name: 'درس', number: 50 },
    { name: 'أختبار', number: 200 },
  ];
  return (
    <div className="flex gap-7 item-center justify-center lg:justify-start">
      {counter.map((item, index) => (
        <div
          key={index}
          className="counterSide flex flex-col gap-2 items-center rounded-md bg-white p-7 relative z-10 overflow-hidden shadow-lg"
        >
          <h1 className="text-[25px] font-bold text-therd">{`${item.number}+`}</h1>
          <p className="text-gray-500 text-[18px]">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
