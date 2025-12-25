'use client';
import { useQuery } from '@tanstack/react-query';
import { Courseprops } from '../interfaces';
import { supabaseServer } from '../../../lib/supabaseServer';
const useGetCourseById = (id: string) => {
  const fetchCourseById = async (): Promise<Courseprops> => {
    const { data, error } = await supabaseServer
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  };

  return useQuery({
    queryKey: ['getCourseByName', id],
    queryFn: fetchCourseById,
    enabled: !!id,
  });
};

export default useGetCourseById;
