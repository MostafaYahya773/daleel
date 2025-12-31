import { createClient } from './supabase/client';

const getLessons = async () => {
  const { data, error } = await createClient()
    .from('lessons')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default getLessons;
