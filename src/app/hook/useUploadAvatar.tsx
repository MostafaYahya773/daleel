import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';

interface UploadAvatarParams {
  file: File;
  userId: string;
  bucketName?: string;
}

const useUploadAvatar = () => {
  const queryClient = useQueryClient();

  const uploadAvatar = async ({
    file,
    userId,
    bucketName = 'users-avatar',
  }: UploadAvatarParams) => {
    const supabase = createClient();

    const fileExt = file?.name?.split('.').pop();
    const fileName = `${userId}.${fileExt}`;

    const { data, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, { upsert: true });

    if (uploadError) throw new Error(uploadError.message);

    return data;
  };

  return useMutation({
    mutationKey: ['uploadAvatar'],
    mutationFn: uploadAvatar,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['user-avatar', variables.userId],
      });
      toast.success('تم رفع الصورة بنجاح', { position: 'top-center' });
    },
    onError: (e) => {
      toast.error(e.message || 'فشل رفع الصورة', { position: 'top-center' });
    },
  });
};

export default useUploadAvatar;
