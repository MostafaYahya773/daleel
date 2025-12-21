import { supabaseServer } from './supabaseServer';

const GetCources = async () => {
  const { data, error } = await supabaseServer
    .from('courses')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export default GetCources;
