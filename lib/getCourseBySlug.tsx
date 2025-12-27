import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  console.log('[PRODUCTION LOG] Query started for slug:', slug);
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
