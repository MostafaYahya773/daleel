'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { FormLoginFields } from '../interfaces/index';
import { useRouter } from 'next/navigation';
const useLogin = () => {
  const router = useRouter();
  const sendFields = async (values: FormLoginFields) => {
    const { data, error } = await createClient().auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) throw new Error(error.message);
    router.refresh();
    return data;
  };

  return useMutation({
    mutationKey: ['Login'],
    mutationFn: sendFields,
  });
};

export default useLogin;
