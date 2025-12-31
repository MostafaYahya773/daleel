'use client';
import { useQuery } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
const useGetLessonsById = (id: string) => {
  const fetchLessonsById = async (): Promise<Lessonprops[]> => {
    const { data, error } = await createClient()
      .from('lessons')
      .select('*')
      .eq('course_id', id);
    if (error) throw new Error(error.message);
    return data;
  };

  return useQuery({
    queryKey: ['getCourseByName', id],
    queryFn: fetchLessonsById,
    enabled: !!id,
  });
};

export default useGetLessonsById;
