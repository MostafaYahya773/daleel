import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Supabase Admin error:', error);
    throw new Error(error.message);
  }
  return data;
};
export default getCourseBySlug;
