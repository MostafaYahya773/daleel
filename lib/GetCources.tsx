import { createClient } from './supabase/client';

const GetCources = async () => {
  const { data, error } = await createClient()
    .from('courses')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default GetCources;
