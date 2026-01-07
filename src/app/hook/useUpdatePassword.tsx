'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
interface UpdatePassword {
  email: string;
  currentPassword: string;
  newPassword: string;
}

const useupdatePassword = () => {
  const updatePassword = async (values: UpdatePassword) => {
    const { error: signInError } = await createClient().auth.signInWithPassword(
      {
        email: values.email,
        password: values.currentPassword,
      }
    );

    if (signInError) throw new Error('كلمة المرور الحالية غير صحيحة');

    const { error: updateError } = await createClient().auth.updateUser({
      password: values.newPassword,
    });

    if (updateError) throw new Error(updateError.message);
  };

  return useMutation({
    mutationKey: ['updatePassword'],
    mutationFn: updatePassword,
    onSuccess: async () => {
      await createClient().auth.signOut();
    },
  });
};

export default useupdatePassword;
