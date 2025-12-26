import { supabaseServer } from './supabaseServer';
const getCourseBySlug = async (slug: string) => {
  const { data, error } = await supabaseServer
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
