import { createClient } from './supabase/server';

interface FetchAndSaveAvatarParams {
  bucketName?: string;
}

export const getUserAvatar = async () => {
  const bucketName = 'users-avatar';
  const supabaseServer = await createClient();
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  const { data: profile } = await supabaseServer
    .from('profiles')
    .select('avatar_url')
    .eq('id', user?.id)
    .single();

  const fileName = profile?.avatar_url?.length
    ? profile.avatar_url
    : '/logo.png';

  const { data } = supabaseServer.storage
    .from(bucketName)
    .getPublicUrl(fileName);

  if (!data?.publicUrl) return '/logo.png';

  // 5️⃣ cache busting
  return `${data.publicUrl}?t=${Date.now()}`;
};

export default getUserAvatar;
