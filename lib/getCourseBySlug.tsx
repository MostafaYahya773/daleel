import { supabase } from './supabaseClient';

const getCourseBySlug = async (slug: string) => {
  console.log('getCourseBySlug received slug:', slug);

  if (!slug) {
    console.log('Slug is empty');
    return null;
  }

  const normalizedSlug = slug.normalize('NFC').trim();
  console.log('Normalized slug for query:', normalizedSlug);

  const { data, error, count } = await supabase
    .from('courses')
    .select('*', { count: 'exact' })
    .eq('slug', normalizedSlug)
    .maybeSingle();

  console.log('Supabase query result:', { data, error, count });

  if (error) {
    console.error('Supabase error:', error);
    return null;
  }

  if (!data) {
    console.log('No course found for this slug');
    return null;
  }

  console.log('Course found:', data.course_name);
  return data;
};

export default getCourseBySlug;
