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

  const filterBy: SelectOptionProps[] = useMemo(
    () => [
      { label: 'ترتيب حسب', value: 'ترتيب حسب' },
      { label: 'الأحدث', value: 'الأحدث' },
      { label: 'الأقدم', value: 'الأقدم' },
    ],
    []
  );

  const [filterOptions, setFilterOptions] = useState<string>('كل التخصصات');
  const [filterLevel, setFilterLevel] = useState<string>('');
  const [FilterDate, setFilterDate] = useState<string>('');

  const dynamicLevels: SelectOptionProps[] = useMemo(() => {
    if (filterOptions === 'مواد جامعية') {
      return [
        { label: 'كل الصفوف', value: 'كل الصفوف' },
        { label: 'الصف الثالث', value: 'الصف الثالث' },
        { label: 'الصف الرابع', value: 'الصف الرابع' },
        { label: 'الصف الخامس', value: 'الصف الخامس' },
      ];
    }

    return [
      { label: 'كل المستويات', value: 'كل المستويات' },
      { label: 'مبتدئ', value: 'مبتدئ' },
      { label: 'متوسط', value: 'متوسط' },
      { label: 'متقدم', value: 'متقدم' },
    ];
  }, [filterOptions]);

  return (
    <div className="flex flex-col gap-7 min-h-fit py-5">
      <div className="filters grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <Select
          selectOptions={selectTypes}
          onselect={(value) => {
            setFilterOptions(value);
            setFilterLevel('');
          }}
        />

        <Select selectOptions={dynamicLevels} onselect={setFilterLevel} />

        <Select selectOptions={filterBy} onselect={setFilterDate} />
      </div>

      <div className="course cart">
        <CoursesCart filterOptions={filterOptions} filterLevel={filterLevel} />
      </div>
    </div>
  );
};

export default AllCourses;
