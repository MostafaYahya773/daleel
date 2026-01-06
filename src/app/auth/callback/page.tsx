// app/auth/callback/page.tsx
import { redirect } from 'next/navigation';
import { createClient } from '../../../../lib/supabase/server';

export default async function AuthCallback({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; error?: string; error_code?: string }>;
}) {
  // فك الـ Promise
  const { code, error_code } = await searchParams;
  const supabase = await createClient();

  if (error_code) {
    redirect(`/auth/ExpiredValidate`);
  }

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      redirect(`/auth/ExpiredValidate`);
    }
  }

  redirect('/auth/LogIn');
}
