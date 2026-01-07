'use client';
import { useEffect, useState } from 'react';
import UpdatePasswordForm from '../_Components/updatePasswordForm/updatePasswordForm';
import { createClient } from '../../../../lib/supabase/client';
export default function Security() {
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    const handleEmail = async () => {
      const {
        data: { user },
      } = await createClient().auth.getUser();
      if (!user) return;
      setEmail(user?.email);
    };
    handleEmail();
  }, []);
  return (
    <div className="flex flex-col p-3 gap-7">
      <h3 className="lg:text-[25px] md:text-[20px] text-[18px] font-medium">
        تعيين كلمة المرور
      </h3>
      <UpdatePasswordForm email={email!} />
    </div>
  );
}
