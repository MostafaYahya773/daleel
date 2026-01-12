import { createClient } from './supabase/server';

const getStudentsUnquiries = async () => {
  const supabaseServer = await createClient();
  const { data, error } = await supabaseServer.from('contact').select('*');

  if (error) {
    throw new Error('حدث خطأ اثناء جلب البيانات');
  }

  return data ?? [];
};

export default getStudentsUnquiries;
