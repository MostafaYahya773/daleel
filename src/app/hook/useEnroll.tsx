'use client';

import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import toast from 'react-hot-toast';

interface EnrollProps {
  courseID: string;
  userID: string;
}

const useEnroll = () => {
  const enrollCourse = async (values: EnrollProps) => {
    const { error } = await createClient().from('enrollments').upsert({
      course_id: values.courseID,
      user_id: values.userID,
    });

    if (error) throw error;
    return true;
  };

  return useMutation({
    mutationKey: ['enroll-course'],
    mutationFn: enrollCourse,

    onSuccess: () => {
      toast.success('تم تسجيلك في الكورس بنجاح', {
        position: 'top-center',
      });
    },

    onError: (error: any) => {
      if (error?.message?.includes('duplicate') || error?.code === '23505') {
        toast.error('المستخدم مسجل بالفعل في هذا الكورس', {
          position: 'top-center',
        });
        return;
      }

      toast.error('فشل التسجيل، حاول مرة أخرى', {
        position: 'top-center',
      });
    },
  });
};

export default useEnroll;
