// hook/useAddCourse.ts
import { useMutation } from '@tanstack/react-query';
import { Courseprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';

const useAddCourse = () => {
  const addCourse = async (course: Courseprops) => {
    const { data, error } = await createClient().from('courses').insert(course);
    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['addCourse'],
    mutationFn: addCourse,
  });
};

export default useAddCourse;
