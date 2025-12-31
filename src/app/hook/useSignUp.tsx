'use client';

import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { FormSignUpFields } from '../interfaces';

const useSignUp = () => {
  const signUp = async (values: FormSignUpFields) => {
    const { data, error } = await createClient().auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          full_name: values.full_name,
          date_of_birth: values.date_of_birth,
          role: 'user',
        },
      },
    });

    if (error) {
      console.log(error);

      throw new Error(error.message);
    }

    return data;
  };

  return useMutation({
    mutationKey: ['signUp'],
    mutationFn: signUp,
  });
};

export default useSignUp;
