import { createClient } from './supabase/client';

const getEnrollments = async (userId: string, courseId: string) => {
  if (!userId || !courseId) return false;

  const supabase = createClient();

  const { data, error } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data !== null;
};

export default getEnrollments;
