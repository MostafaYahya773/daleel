'use client';
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { SelectOptionProps } from '../../interfaces/index';

const Select = dynamic(() => import('../Select/Select'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const AllCourses = () => {
  const selectTypes: SelectOptionProps[] = useMemo(
    () => [
      { label: 'كل التخصصات', value: 'كل التخصصات' },
      { label: 'مواد الجامعة', value: 'مواد الجامعة' },
      { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
    ],
    []
  );

  const selectLevel: SelectOptionProps[] = useMemo(
    () => [
      { label: 'كل المستويات', value: 'كل المستويات' },
      { label: 'مبتدئ', value: 'مبتدئ' },
      { label: 'متوسط', value: 'متوسط' },
      { label: 'محترف', value: 'محترف' },
    ],
    []
  );

  const filterBy: SelectOptionProps[] = useMemo(
    () => [
      { label: 'ترتيب حسب', value: 'ترتيب حسب' },
      { label: 'الأحدث', value: 'الأحدث' },
      { label: 'الاقدم', value: 'الاقدم' },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-7 min-h-screen">
      <div className="filters grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Select selectOptions={selectTypes} />
        <Select selectOptions={selectLevel} />
        <Select selectOptions={filterBy} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
    </div>
  );
};

export default AllCourses;
