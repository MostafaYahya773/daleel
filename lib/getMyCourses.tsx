import { createClient } from './supabase/server';

const getMyCourses = async () => {
  const supabaseServer = await createClient();

  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  const { data, error } = await supabaseServer
    .from('enrollments')
    .select('course_id')
    .eq('user_id', user?.id);

  if (error) {
    throw new Error('لا يوجد كورسات لديك');
  }

  //  map in courses id from enrollments
  const courseIds = data.map((enrollment) => enrollment?.course_id);
  // function get all courses by ids
  const { data: courses, error: courseError } = await supabaseServer
    .from('courses')
    .select('*')
    .in('id', courseIds);

  if (courseError) {
    return [];
  }

  return courses ?? [];
};

export default getMyCourses;
