'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';
const useDeleteComment = (lessonId: number) => {
  const queryClient = useQueryClient();
  const supabase = createClient();
  const deleteComment = async (id: number) => {
    const { data, error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);
    if (error) throw error;

    return data;
  };

  return useMutation({
    mutationKey: ['deleteComment'],
    mutationFn: deleteComment,
    onSuccess: (_, variables) => {
      toast.success('تم حذف التعليق بنجاح', { position: 'top-center' });
      queryClient.invalidateQueries({
        queryKey: ['getComments', lessonId],
      });
    },
    onError: () => {
      toast.error('فشل حذف التعليق', { position: 'top-center' });
    },
  });
};

export default useDeleteComment;
