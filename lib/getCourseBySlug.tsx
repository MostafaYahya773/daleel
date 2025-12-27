import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .ilike('slug', slug)
    .single();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
