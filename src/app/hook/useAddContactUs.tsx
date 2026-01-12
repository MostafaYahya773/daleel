'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { ContactUsProps } from '../interfaces/index';
import toast from 'react-hot-toast';
const useAddContactUs = () => {
  const addMessage = async (values: ContactUsProps) => {
    const { data, error } = await createClient().from('contact').insert({
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    });
    if (error) throw new Error('يجب عليك تسجيل الدخول اولا');
    return data;
  };

  return useMutation({
    mutationKey: ['addMessage'],
    mutationFn: addMessage,
    onSuccess: () => {
      toast.success('تم إرسال الرسالة بنجاح', { position: 'top-center' });
    },
    onError: (e) => {
      toast.error(e.message || 'فشل إرسال الرسالة', {
        position: 'top-center',
      });
    },
  });
};

export default useAddContactUs;
