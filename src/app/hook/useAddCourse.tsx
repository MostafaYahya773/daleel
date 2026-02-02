// hook/useAddCourse.ts
import { useMutation } from '@tanstack/react-query';
import { Courseprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
import slugify from 'slugify';
interface AddCourseParams {
  course: Courseprops;
  file: File | null;
}
const bucketName = 'blog_imges';
const useAddCourse = () => {
  const supabase = createClient();
  const addCourse = async ({ course, file }: AddCourseParams) => {
    const fileExt = file?.name.split('.').pop();
    const fileName =
      slugify(course.course_name, {
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
    // add course
    const { data, error } = await supabase.from('courses').insert({
      ...course,
      lesson_image: image.publicUrl,
    });
    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['addCourse'],
    mutationFn: addCourse,
  });
};

export default useAddCourse;
