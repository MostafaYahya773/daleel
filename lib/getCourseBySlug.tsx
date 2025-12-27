import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    return null;
  }
  return data;
};
export default getCourseBySlug;
