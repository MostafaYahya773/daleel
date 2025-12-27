import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  const normalizedSlug = slug.normalize('NFC').trim();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', normalizedSlug)
    .maybeSingle();

  if (error) {
    return null;
  }
  return data;
};
export default getCourseBySlug;
