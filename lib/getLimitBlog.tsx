import { createClient } from './supabase/server';

export const getLimitBlogs = async () => {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase
    .from('blog')
    .select('*')
    .limit(4);

  if (error) {
    throw new Error('Failed to fetch blogs');
  }

  return blogs;
};
