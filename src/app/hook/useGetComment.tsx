'use client';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { CommentsProps } from '../interfaces/index';

const useGetComment = (lessonId: number) => {
  const getComments = async (): Promise<CommentsProps[]> => {
    const { data, error } = await createClient()
      .from('reviews')
      .select('*')
      .eq('lesson_id', lessonId)
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    return data || [];
  };

  return useQuery({
    queryKey: ['getComments', lessonId],
    queryFn: getComments,
    enabled: !!lessonId, // ما ينفذش لو lessonId undefined أو 0
  });
};

export default useGetComment;
