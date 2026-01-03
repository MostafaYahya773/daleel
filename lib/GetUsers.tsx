import { createClient } from './supabase/client';

const getUsers = async () => {
  const { data, error } = await createClient()
    .from('profiles')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);

  return data ?? [];
};

export default getUsers;
