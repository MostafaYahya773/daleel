import { supabase } from './supabaseClient';

const GetCources = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default GetCources;
