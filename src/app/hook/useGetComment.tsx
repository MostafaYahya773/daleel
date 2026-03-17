'use client';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { CommentsProps } from '../interfaces/index';

const useGetComment = (lessonId: number) => {
  const getComments = async (): Promise<CommentsProps[]> => {
    const { data, error } = await createClient()
      .from('reviews')
      .select(
        `id,
        lesson_id,
        user_id,
        comment,
        created_at,
        profiles (
        full_name,
        avatar_url
        )`,
      )
      .eq('lesson_id', lessonId)
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    return (data as unknown as CommentsProps[]) || [];
  };

  return useQuery({
    queryKey: ['getComments', lessonId],
    queryFn: getComments,
    enabled: !!lessonId,
  });
};

export default useGetComment;
