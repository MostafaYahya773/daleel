import { createClient } from './supabase/client';

const getBlogBySlug = async (Slug: string) => {
  const normalizedSlug = Slug.normalize('NFC').trim();
  const { data, error } = await createClient()
    .from('blog')
    .select('*')
    .eq('slug', normalizedSlug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};

export default getBlogBySlug;
