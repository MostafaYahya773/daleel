import getLessonsByCourseId from '../../../../../../lib/getLessonsByCourseId';
import VideosPage from './_components/VideosPage';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const data = await getLessonsByCourseId(courseId);

  return <VideosPage LessonInfo={data} />;
}
