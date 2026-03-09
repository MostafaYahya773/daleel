'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { CommentsProps } from '../interfaces/index';
import toast from 'react-hot-toast';

const useAddComment = () => {
  const queryClient = useQueryClient();

  const addComment = async (values: CommentsProps) => {
    const { data, error } = await createClient().from('reviews').insert({
      lesson_id: values.lesson_id,
      user_id: values.user_id,
      comment: values.comment,
    });

    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['addComments'],
    mutationFn: addComment,

    onSuccess: (_, variables) => {
      toast.success('تم اضافة التعليق بنجاح', { position: 'top-center' });
      queryClient.invalidateQueries({
        queryKey: ['getComments', variables?.lesson_id],
      });
    },

    onError: (e: any) => {
      toast.error(e.message || 'فشل التعليق', {
        position: 'top-center',
      });
    },
  });
};

export default useAddComment;
