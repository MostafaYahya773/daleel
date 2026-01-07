import { redirect } from 'next/navigation';
import getSession from '../../../lib/GetSession';
export default async function page() {
  redirect('/Admin/NewCourse');
}
