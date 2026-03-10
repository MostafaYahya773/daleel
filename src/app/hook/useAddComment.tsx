'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { CommentsProps } from '../interfaces/index';
import toast from 'react-hot-toast';

const useAddComment = () => {
  const queryClient = useQueryClient();
  const supabase = createClient();

  const addComment = async (values: { lesson_id: number; comment: string }) => {
    const { data: sessionData } = await supabase.auth.getSession();

    const user = sessionData?.session?.user;
    if (!user) throw new Error('يجب تسجيل الدخول لإضافة تعليق');

    const { data, error } = await supabase.from('reviews').insert({
      lesson_id: values.lesson_id,
      user_id: user.id,
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
      toast.error(e.message || 'فشل التعليق', { position: 'top-center' });
    },
  });
};

export default useAddComment;
