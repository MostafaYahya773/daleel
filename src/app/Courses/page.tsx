'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const CoursesHero = dynamic(
  () => import('../_components/CoursesHero/CoursesHero'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
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
