'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { Lessonprops } from '../interfaces';
import slugify from 'slugify';
interface UpdateLessonParams {
  lesson: Lessonprops;
  file: File | null;
}
const bucketName = 'blog_imges';
const useEditLesson = (id: number) => {
  const supabase = createClient();
  const editCourse = async ({ lesson, file }: UpdateLessonParams) => {
    const fileExt = file?.name.split('.').pop();
    const fileName =
      slugify(lesson.title, {
        replacement: '_', // استبدال الفراغات بـ _
        lower: false, // تحافظ على الحروف الكبيرة لو عايز
        strict: true, // يشيل أي رموز غير مسموح بها
      }) +
      '.' +
      fileExt;
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file as File, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: image } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    const { error } = await createClient()
      .from('lessons')
      .update({
        ...lesson,
        lesson_img: `${image.publicUrl}?v=${Date.now()}`,
      })
      .eq('id', id);
    return error;
  };

  return useMutation({
    mutationKey: ['editLesson', id],
    mutationFn: editCourse,
  });
};

export default useEditLesson;
