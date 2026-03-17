'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';

const useEditComment = () => {
  const queryClient = useQueryClient();
  const updateComment = async ({
    newComment,
    comment_id,
    user_id,
  }: {
    newComment: string;
    comment_id: number;
    user_id: string;
  }) => {
    const { data, error } = await createClient()
      .from('reviews')
      .update({ comment: newComment })
      .eq('id', comment_id)
      .eq('user_id', user_id);

    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['updateComment'],
    mutationFn: updateComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['getComments'],
      });
    },
  });
};

export default useEditComment;
