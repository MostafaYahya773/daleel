import { supabase } from './supabaseClient';

const getLessons = async () => {
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
