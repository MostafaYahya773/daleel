import { createClient } from './supabase/client';

const getStudentsUnquiries = async () => {
  const { data, error } = await createClient().from('contact').select('*');

  if (error) {
    throw new Error('حدث خطأ اثناء جلب البيانات');
  }

  return data ?? [];
};

export default getStudentsUnquiries;
