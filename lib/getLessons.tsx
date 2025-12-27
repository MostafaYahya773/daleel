import { supabaseServer } from './supabaseServer';

const getLessons = async () => {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default getLessons;
