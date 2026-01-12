import { createClient } from './supabase/server';

const getEnrollments = async (userId: string, courseId: string) => {
  if (!userId || !courseId) return false;
  const subapaseServer = await createClient();
  const { data, error } = await subapaseServer
    .from('enrollments')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data !== null;
};

export default getEnrollments;
