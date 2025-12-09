'use client';
import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { SelectOptionProps } from '../../interfaces/index';
const Select = dynamic(() => import('../Select/Select'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const CoursesCart = dynamic(() => import('../CoursesCart/CoursesCart'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const AllCourses = () => {
  const selectTypes: SelectOptionProps[] = useMemo(
    () => [
      { label: 'كل التخصصات', value: 'كل التخصصات' },
      { label: 'مواد جامعية', value: 'مواد جامعية' },
      { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
    ],
    []
  );

  const selectLevel: SelectOptionProps[] = useMemo(
    () => [
      { label: 'كل المستويات', value: 'كل المستويات' },
      { label: 'مبتدئ', value: 'مبتدئ' },
      { label: 'متوسط', value: 'متوسط' },
      { label: 'متقدم', value: 'متقدم' },
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
  // select filter options
  const [filterOptions, setFilteOptions] = useState<string>('كل التخصصات');
  const [filterLevel, setFilterLevel] = useState<string>('كل المستويات');
  const [FilterDate, setFilterDate] = useState<string>('');

  return (
    <div className="flex flex-col gap-7 min-h-screen py-5">
      <div className="filters grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <Select selectOptions={selectTypes} onselect={setFilteOptions} />
        <Select selectOptions={selectLevel} onselect={setFilterLevel} />
        <Select selectOptions={filterBy} onselect={setFilterDate} />
      </div>
      <div className="course cart">
        <CoursesCart filterOptions={filterOptions} filterLevel={filterLevel} />
      </div>
    </div>
  );
};

export default AllCourses;
