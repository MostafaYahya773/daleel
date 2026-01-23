import { createClient } from './supabase/server';

export const getAllBlogs = async () => {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase.from('blog').select('*');

  if (error) {
    console.error(error);
    throw new Error('Failed to fetch blogs');
  }

  const blogsWithImages = blogs.map((blog) => {
    const { data } = supabase.storage
      .from('blog_imges')
      .getPublicUrl(blog.image_url);

    return {
      ...blog,
      image_url: data.publicUrl,
    };
  });

  return blogsWithImages;
};
