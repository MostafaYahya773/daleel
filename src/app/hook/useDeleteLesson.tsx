'use client';
import { useMutation } from '@tanstack/react-query';
import { supabaseServer } from '../../../lib/supabaseServer';
import toast from 'react-hot-toast';
const useDeleteLesson = () => {
  const deleteLesson = async (LessonId: number) => {
    const { error } = await supabaseServer
      .from('lessons')
      .delete()
      .eq('id', LessonId);
    if (error) throw error;
  };

  return useMutation({
    mutationKey: ['deleteLesson'],
    mutationFn: deleteLesson,
    onSuccess: () => {
      toast.success('تم حذف الدرس بنجاح', { position: 'top-center' });
    },
    onError: () => {
      toast.error('فشل حذف الدرس', { position: 'top-center' });
    },
  });
};

export default useDeleteLesson;
