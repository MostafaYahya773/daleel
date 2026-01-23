import { getAllBlogs } from '../../../../lib/getAllBlogs';
import getSession from '../../../../lib/GetSession';
import { BlogForms } from '../../interfaces';
import EditBlogsForm from './EditBlogsForm';
export default async function EditBlog() {
  const allBlogs: BlogForms[] = await getAllBlogs();
  const user = await getSession();
  return (
    <div className="grid grid-rows-[auto_1fr] gap-2">
      <h1 className="text-[20px] mx-2 text-therd">تحديث مقال</h1>
      <EditBlogsForm blogs={allBlogs} userId={user?.userId!} />
    </div>
  );
}
