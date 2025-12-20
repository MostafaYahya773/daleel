'use client';
import dynamic from 'next/dynamic';
import CoursesHero from '../_components/HeroCourse/HeroCourse';
import Skeleton from 'react-loading-skeleton';
const AllCourses = dynamic(
  () => import('../_components/AllCourses/AllCourses'),
  {
    ssr: false,
    loading: () => <Skeleton height={40} count={1} />,
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
