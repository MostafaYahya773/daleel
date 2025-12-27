import { supabase } from './supabaseClient';

const getCourseBySlug = async (slug: string) => {
  // توحيد الشكل قبل أي query
  const normalizedSlug = slug.trim().normalize('NFC');

  console.log('DB FINAL SLUG:', JSON.stringify(normalizedSlug));

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', normalizedSlug)
    .maybeSingle(); // 🔥 بدل single

  // لو مفيش نتيجة → رجّع null
  if (error) {
    console.error('SUPABASE ERROR:', error.message);
    return null;
  }

  return data;
};

export default getCourseBySlug;
