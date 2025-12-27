import { supabaseServer } from './supabaseServer';
const getCourseBySlug = async (slug: string) => {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
