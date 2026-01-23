import BlogForm from './BlogForm';
import { createClient } from '../../../../lib/supabase/server';
export default async function AddBlog() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  return (
    <div>
      <BlogForm userId={userId!} />
    </div>
  );
}
