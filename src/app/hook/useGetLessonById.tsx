'use client';
import { useQuery } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
const useGetLessonById = (id: number) => {
  const fetchLessonsById = async (): Promise<Lessonprops[]> => {
    const { data, error } = await createClient()
      .from('lessons')
      .select('*')
      .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  };

  return useQuery({
    queryKey: ['getCourseByName', id],
    queryFn: fetchLessonsById,
    enabled: !!id,
  });
};

export default useGetLessonById;
