import { supabase } from './supabaseClient';
const getCourseBySlug = async (slug: string) => {
  if (!slug) return null;
  const normalizedSlug = slug.normalize('NFC').trim();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', normalizedSlug)
    .single();

  if (error) {
    return null;
  }
  return data;
};
export default getCourseBySlug;
