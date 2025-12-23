import { supabaseServer } from './supabaseServer';

const getLessons = async () => {
  const { data, error } = await supabaseServer
    .from('lessons')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default getLessons;
