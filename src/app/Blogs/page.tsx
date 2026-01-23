import { getAllBlogs } from '../../../lib/getAllBlogs';
import BlogCart from '../_components/BlogCart/BlogCart';
import HeroBlog from '../_components/HeroBlog/HeroBlog';

export default async function Blogs() {
  const blogs = await getAllBlogs();
  return (
    <div className="flex flex-col gap-7">
      <HeroBlog />
      <BlogCart articles={blogs} />
    </div>
  );
}
