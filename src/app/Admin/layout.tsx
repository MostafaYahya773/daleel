import { redirect } from 'next/navigation';
import getSession from '../../../lib/GetSession';
import AdminLayout from './AdminLayout';

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || session.role !== 'admin') redirect('/');

  return <AdminLayout>{children}</AdminLayout>;
}
