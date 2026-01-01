import { createClient } from './supabase/client';

const getEnrollments = async () => {
  const { data, error } = await createClient()
    .from('enrollments')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
};

export default getEnrollments;
