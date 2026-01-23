import { getAllBlogs } from '../../../../lib/getAllBlogs';
import { BlogForms } from '../../interfaces';
import BlogsList from './BlogList';
export default async function DeleteBlog() {
  const allBlogs: BlogForms[] = await getAllBlogs();
  return (
    <div className="flex flec-col gap-2">
      <BlogsList blogs={allBlogs!} />
    </div>
  );
}
