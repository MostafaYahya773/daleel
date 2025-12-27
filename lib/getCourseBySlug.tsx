import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  console.log('DB SLUG:', JSON.stringify(slug));
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export default getCourseBySlug;
