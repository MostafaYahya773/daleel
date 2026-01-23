'use client';
import { useMutation } from '@tanstack/react-query';
import { BlogForms } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
const useUpdateBlog = (userId: string) => {
  const supabase = createClient();
  const bucketName = 'blog_imges';
  const updateBlog = async (value: BlogForms) => {
    const file = value.file;
    const fileExt = file?.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;
    const { data: response, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File, { upsert: false });

    if (uploadError) throw uploadError;
    const { data, error } = await createClient()
      .from('blog')
      .update({
        title: value.title,
        content: value.content,
        image_url: response.path,
        author_id: userId,
        reading_minutes: value.reading_minutes,
      })
      .eq('id', value.id);
    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['getBlog'],
    mutationFn: updateBlog,
  });
};

export default useUpdateBlog;
