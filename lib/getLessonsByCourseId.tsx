import { supabaseServer } from './supabaseServer';

const getLessonsByCourseId = async (id: string) => {
  const { data, error } = await supabaseServer
    .from('lessons')
    .select('*')
    .eq('course_id', id);

  if (error) throw new Error(error.message);
  return data;
};
export default getLessonsByCourseId;
