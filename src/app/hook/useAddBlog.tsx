'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { BlogForms } from '../interfaces/index';
interface ValueProps {
  values: BlogForms;
  userId: string;
  bucketName?: string;
}
const useAddBlogs = () => {
  const supabase = createClient();
  const addBlog = async ({
    values,
    userId,
    bucketName = 'blog_imges',
  }: ValueProps) => {
    const file = values.file;

    const fileExt = file?.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;

    const { data: response, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File, { upsert: false });

    if (uploadError) throw uploadError;

    const { error: profileError } = await supabase.from('blog').insert({
      title: values.title,
      content: values.content,
      image_url: response?.path,
      reading_minutes: values.reading_minutes,
      author_id: userId,
    });

    if (profileError) throw profileError;

    return profileError;
  };

  return useMutation({
    mutationKey: ['addBlog'],
    mutationFn: addBlog,
  });
};

export default useAddBlogs;
