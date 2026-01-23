'use client';
import { useQuery } from '@tanstack/react-query';
import { BlogForms } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';
const useGetBlogById = (id: string) => {
  const fetchCourseById = async (): Promise<BlogForms> => {
    const { data, error } = await createClient()
      .from('blog')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  };

  return useQuery({
    queryKey: ['getBlog', id],
    queryFn: fetchCourseById,
    enabled: !!id,
  });
};

export default useGetBlogById;
