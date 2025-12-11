'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import CoursesHero from '../_components/HeroCourse/HeroCourse';
const AllCourses = dynamic(
  () => import('../_components/AllCourses/AllCourses'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Courses() {
  return (
    <div className="flex flex-col gap-7">
      <CoursesHero />
      <AllCourses />
    </div>
  );
}
