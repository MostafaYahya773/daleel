'use client';

import { useQuery } from '@tanstack/react-query';
import { supabaseServer } from '../../../lib/supabaseServer';
import { Courseprops } from '../interfaces';
const useGetCourses = () => {
  const getData = async (): Promise<Courseprops[]> => {
    const { data, error } = await supabaseServer
      .from('courses')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data ?? [];
  };

  return useQuery<Courseprops[]>({
    queryKey: ['getAllCourses'],
    queryFn: getData,
  });
};

export default useGetCourses;
