'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const useDeleteStudentsInquiries = () => {
  const router = useRouter();
  const deleteMessaege = async (messageId: string) => {
    const { data, error, statusText } = await createClient()
      .from('contact')
      .delete()
      .eq('id', messageId);
    if (error) throw new Error('حدث خطأ اثناء حذف الرسالة');
    return data;
  };

  return useMutation({
    mutationKey: ['deleteMessaege'],
    mutationFn: deleteMessaege,
    onSuccess: () => {
      toast.success('تم حذف الرسالة بنجاح', { position: 'top-center' });
      router.refresh();
    },
    onError: () => {
      toast.error('فشل حذف الرسالة', { position: 'top-center' });
    },
  });
};

export default useDeleteStudentsInquiries;
