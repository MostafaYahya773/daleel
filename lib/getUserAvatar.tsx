import { createClient } from './supabase/server';

export const getUserAvatar = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('avatar_url')
    .eq('id', user?.id)
    .single();

  // لو مفيش صورة
  if (!profile?.avatar_url) return '/logo.png';

  // لو الرابط كامل
  if (profile?.avatar_url?.startsWith('http')) return profile?.avatar_url;
};

export default getUserAvatar;
