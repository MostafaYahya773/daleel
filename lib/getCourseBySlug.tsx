import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  console.log('DB SEARCH SLUG:', JSON.stringify(slug));
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.log(error);

    throw new Error(error.message);
  }
  return data;
};
export default getCourseBySlug;
