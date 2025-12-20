'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabaseClient';
import { Courseprops } from '../interfaces';
const useGetCourseByName = (name: string) => {
  const fetchCourseByName = async (): Promise<Courseprops> => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('course_name', name)
      .single(); // واحد فقط لأنه الاسم فريد

    if (error) throw new Error(error.message);
    return data;
  };

  return useQuery({
    queryKey: ['getCourseByName', name],
    queryFn: fetchCourseByName,
    enabled: !!name,
  });
};

export default useGetCourseByName;
