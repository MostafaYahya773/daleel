import { supabaseServer } from './supabaseServer';
import { Courseprops } from '../src/app/interfaces';
const getCourseBySlug = async (slug: string) => {
  const { data, error } = await supabaseServer
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw new Error(error.message);
  return data;
};
export default getCourseBySlug;
