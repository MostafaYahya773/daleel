'use client';

import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { FormSignUpFields } from '../interfaces';
import { useRouter } from 'next/navigation';

const useSignUp = () => {
  const router = useRouter();
  const signUp = async (values: FormSignUpFields) => {
    const { data, error } = await createClient().auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: 'http://localhost:3000/auth/callback',
        data: {
          full_name: values.full_name,
          date_of_birth: values.date_of_birth,
          gender: values.gender,
          role: 'user',
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  return useMutation({
    mutationKey: ['signUp'],
    mutationFn: signUp,
    onSuccess: () => {
      router.refresh();
    },
  });
};

export default useSignUp;
