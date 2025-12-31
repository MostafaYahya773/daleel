import { createClient } from './supabase/client';

const getLessonsByCourseId = async (id: string) => {
  const { data, error } = await createClient()
    .from('lessons')
    .select('*')
    .eq('course_id', id);

  if (error) throw new Error(error.message);
  return data;
};
export default getLessonsByCourseId;
