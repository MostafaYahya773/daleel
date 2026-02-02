'use client';
import { useMutation } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
import slugify from 'slugify';
interface UploadLessonParams {
  lesson: Lessonprops;
  file: File | null;
}
const bucketName = 'blog_imges';
const useAddLesson = () => {
  const supabase = createClient();
  const addLesson = async ({ lesson, file }: UploadLessonParams) => {
    const fileExt = file?.name.split('.').pop();
    const fileName =
      slugify(lesson.title, {
        replacement: '_', // استبدال الفراغات بـ _
        lower: false, // تحافظ على الحروف الكبيرة لو عايز
        strict: true, // يشيل أي رموز غير مسموح بها
      }) +
      '.' +
      fileExt;

    // upload New Image
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File);

    if (uploadError) throw uploadError;
    // get New Image
    const { data: image } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    const { data, error } = await supabase.from('lessons').insert({
      ...lesson,
      lesson_img: image.publicUrl,
    });
    if (error) throw new Error(error.message);

    return data;
  };

  return useMutation({
    mutationKey: ['addLesson'],
    mutationFn: addLesson,
  });
};

export default useAddLesson;
