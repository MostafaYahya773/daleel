import CoursesHero from '../_components/HeroCourse/HeroCourse';
import AllCourses from '../_components/AllCourses/AllCourses';
import GetCources from '../../../lib/GetCources';
export const revalidate = 60;
export default async function Courses() {
  // get data from server
  const data = await GetCources();

  return (
    <div className="flex flex-col gap-7">
      <CoursesHero />
      <AllCourses courses={data} />
    </div>
  );
}
