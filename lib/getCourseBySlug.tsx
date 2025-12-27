import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  const initSlug = slug.trim();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', initSlug)
    .single();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
