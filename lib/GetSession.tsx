import { createClient } from './supabase/server';

const getSession = async () => {
  const supabaseServer = await createClient();
  const { data: sessionData } = await supabaseServer.auth.getSession();
  if (!sessionData.session) return null;

  const { data: userData } = await supabaseServer.auth.getUser(
    sessionData.session.access_token
  );
  if (!userData.user) return null;
  const user = userData.user.user_metadata;
  const userId = userData.user.id;
  if (!user) return null;

  const role = userData.user.user_metadata.role;
  return { role, user, userId };
};

export default getSession;
