import getLessonsByCourseId from '../../../../../../lib/getLessonsByCourseId';
import VideosPage from './VideosPage';

interface Props {
  params: {
    slug: string;
    courseId: string;
  };
}

export default async function LessonPage({ params }: Props) {
  const { courseId } = await params;
  const data = await getLessonsByCourseId(courseId);

  return <VideosPage LessonInfo={data} />;
}
