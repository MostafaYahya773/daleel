'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { BlogForms } from '../interfaces/index';
import slugify from 'slugify';

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
    const fileName =
      slugify(values.title, {
        replacement: '_', // استبدال الفراغات بـ _
        lower: false, // تحافظ على الحروف الكبيرة لو عايز
        strict: true, // يشيل أي رموز غير مسموح بها
      }) +
      '.' +
      fileExt;

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File as File, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: image } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    const { error: profileError } = await supabase.from('blog').insert({
      title: values.title,
      content: values.content,
      image_url: image?.publicUrl,
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
