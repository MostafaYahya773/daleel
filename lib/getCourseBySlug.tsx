import { supabase } from './supabaseClient';

const getCourseBySlug = async (Slug: string) => {
  const normalizedSlug = Slug.normalize('NFC').trim();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', normalizedSlug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};

export default getCourseBySlug;
