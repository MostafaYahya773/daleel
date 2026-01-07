import { redirect } from 'next/navigation';
import getEnrollments from '../../../../../../lib/GetEnrollments';
import getLessonsByCourseId from '../../../../../../lib/getLessonsByCourseId';
import getSession from '../../../../../../lib/GetSession';
import VideosPage from './_components/VideosPage';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const data = await getLessonsByCourseId(courseId);
  const user = await getSession();
  const userId = user?.userId;
  const enrolled = await getEnrollments(userId!, courseId);
  if (!enrolled) return redirect('/Courses');
  return <VideosPage LessonInfo={data} />;
}
