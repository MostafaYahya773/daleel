'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';
const useDeleteCourse = () => {
  const deleteCourse = async (id: string) => {
    const { error } = await createClient()
      .from('courses')
      .delete()
      .eq('id', id);
    if (error) throw error;
  };

  return useMutation({
    mutationKey: ['deleteCourse'],
    mutationFn: deleteCourse,
    onSuccess: () => {
      toast.success('تم حذف الكورس بنجاح', { position: 'top-center' });
    },
    onError: () => {
      toast.error('فشل حذف الكورس', { position: 'top-center' });
    },
  });
};

export default useDeleteCourse;
