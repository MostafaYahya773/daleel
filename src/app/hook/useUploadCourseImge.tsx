import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';

interface UploadAvatarParams {
  file: File;
  bucketName?: string;
}

const useUploadCourseImage = () => {
  const uploadCourseImage = async ({
    file,
    bucketName = 'blog_imges',
  }: UploadAvatarParams) => {
    const supabase = createClient();

    const uuid = crypto.randomUUID();
    // 1️⃣ الامتداد
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuid}.${fileExt}`;

    // 2️⃣ رفع الصورة
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);

    return data.publicUrl;
  };

  return useMutation({
    mutationKey: ['upload-course-image'],
    mutationFn: uploadCourseImage,
    onSuccess: () => {
      toast.success('تم رفع الصورة بنجاح', {
        position: 'top-center',
      });
    },
    onError: (e: any) => {
      toast.error(e.message || 'فشل رفع الصورة', {
        position: 'top-center',
      });
    },
  });
};

export default useUploadCourseImage;
