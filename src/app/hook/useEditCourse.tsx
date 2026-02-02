'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { Courseprops } from '../interfaces';
import slugify from 'slugify';

interface EditCourseProps {
  values: Courseprops;
  file: File | null;
}
const bucketName = 'blog_imges';
const useEditCourse = (courseId: string) => {
  const supabase = createClient();
  const editCourse = async ({ values, file }: EditCourseProps) => {
    const fileExt = file?.name.split('.').pop();
    const fileName =
      slugify(values?.course_name, {
        replacement: '_', // استبدال الفراغات بـ _
        lower: false, // تحافظ على الحروف الكبيرة لو عايز
        strict: true, // يشيل أي رموز غير مسموح بها
      }) +
      '.' +
      fileExt;
    // await supabase.storage.from(bucketName).remove([fileName]);
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: newAmge } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    const { data, error } = await supabase
      .from('courses')
      .update({
        ...values,
        image_url: `${newAmge.publicUrl}?v=${Date.now()}`,
      })
      .eq('id', courseId);

    if (error) throw new Error(error.message);

    return data;
  };

  return useMutation({
    mutationKey: ['editCourse', courseId],
    mutationFn: editCourse,
  });
};

export default useEditCourse;
