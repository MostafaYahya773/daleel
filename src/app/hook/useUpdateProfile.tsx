'use client';
import { useMutation } from '@tanstack/react-query';
import { UserProps } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';

const useUpdateUser = () => {
  const updateUser = async (values: UserProps) => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.updateUser({
      email: values.email,
      data: {
        full_name: values.full_name,
        gender: values.gender,
        date_of_birth: values.date_of_birth,
      },
    });

    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['updateUser'],
    mutationFn: updateUser,
  });
};

export default useUpdateUser;
