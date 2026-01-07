import getMyCourses from '../../../lib/getMyCourses';
import AllCourses from './AllCourses/AllCourses';

export default async function MyCourses() {
  const data = await getMyCourses();

  return (
    <div className="flex flex-col gap-7 mt-20 md:mt-20 lg:mt-24">
      <AllCourses courses={data} />
    </div>
  );
}
