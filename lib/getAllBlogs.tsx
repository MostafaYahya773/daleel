import { createClient } from './supabase/server';

export const getAllBlogs = async () => {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase.from('blog').select('*');

  if (error) {
    throw new Error('Failed to fetch blogs');
  }

  return blogs;
};
