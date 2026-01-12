import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface UploadAvatarParams {
  file: File;
  userId: string;
  bucketName?: string;
}

const useUploadAvatar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const uploadAvatar = async ({
    file,
    userId,
    bucketName = 'users-avatar',
  }: UploadAvatarParams) => {
    const supabase = createClient();

    // 1️⃣ نطلع الامتداد الحقيقي
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}.${fileExt}`;

    // 2️⃣ نرفع الصورة
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, { upsert: true });

    if (uploadError) throw uploadError;

    // 3️⃣ نخزّن اسم الملف في البروفايل
    const { error: profileError } = await supabase
      .from('profiles')
      .update({
        avatar_url: fileName,
      })
      .eq('id', userId);

    if (profileError) throw profileError;

    return fileName;
  };

  return useMutation({
    mutationKey: ['uploadAvatar'],
    mutationFn: uploadAvatar,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['user-avatar', variables.userId],
      });
      toast.success('تم رفع الصورة بنجاح', { position: 'top-center' });
      router.refresh();
    },
    onError: (e: any) => {
      toast.error(e.message || 'فشل رفع الصورة', {
        position: 'top-center',
      });
    },
  });
};

export default useUploadAvatar;
