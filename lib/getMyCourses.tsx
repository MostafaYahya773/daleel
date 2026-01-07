import { createClient } from './supabase/client';
import getSession from './GetSession';
const getMyCourses = async () => {
  const user = await getSession();
  const { data, error } = await createClient()
    .from('enrollments')
    .select('course_id')
    .eq('user_id', user?.userId);

  if (error) {
    throw new Error('لا يوجد كورسات لديك');
  }

  //  map in courses id from enrollments
  const courseIds = data.map((enrollment) => enrollment?.course_id);
  // function get all courses by ids
  const { data: courses, error: courseError } = await createClient()
    .from('courses')
    .select('*')
    .in('id', courseIds);

  if (courseError) {
    return [];
  }

  return courses ?? [];
};

export default getMyCourses;
