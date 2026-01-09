import { createClient } from './supabase/client';

interface FetchAndSaveAvatarParams {
  userId: string;
  bucketName?: string;
  fileExt?: string; // لو مش عارف الامتداد، ممكن تبعته أو تخلي افتراضية
}

export const getUserAvatar = async ({
  userId,
  bucketName = 'users-avatar',
  fileExt = 'png',
}: FetchAndSaveAvatarParams) => {
  const supabase = createClient();

  const fileName = `${userId}.${fileExt}`;

  const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);
  if (!data?.publicUrl) throw new Error('حدث خطأ في الحصول على رابط الصورة');
  const publicUrl = data.publicUrl;
  const avatarUrl = `${data.publicUrl}?t=${Date.now()}`;

  const { error: profileError } = await supabase
    .from('profiles')
    .update({ avatar_url: publicUrl })
    .eq('id', userId);

  //   if (profileError) throw new Error('حدث خطأ في حفظ رابط الصورة في البروفايل');

  return avatarUrl;
};

export default getUserAvatar;
