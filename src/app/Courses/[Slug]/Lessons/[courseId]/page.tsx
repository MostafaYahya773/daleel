import getLessonsByCourseId from '../../../../../../lib/getLessonsByCourseId';
import getSession from '../../../../../../lib/GetSession';
import VideosPage from './_components/VideosPage';
import getUserAvatar from '../../../../../../lib/getUserAvatar';
export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const data = await getLessonsByCourseId(courseId);
  const [user, avatar] = await Promise.all([getSession(), getUserAvatar()]);

  return (
    <VideosPage
      LessonInfo={data}
      userId={user?.userId!}
      avatar={avatar}
      userName={user?.user?.full_name}
    />
  );
}
