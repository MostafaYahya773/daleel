// hook/useAddCourse.ts
import { useMutation } from '@tanstack/react-query';
import { CourseProps } from '../interfaces';
import { supabase } from '../../../lib/supabaseClient';

const useAddCourse = () => {
  const addCourse = async (course: CourseProps) => {
    const { data, error } = await supabase.from('courses').insert(course);
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
  };

  return useMutation({
    mutationKey: ['addCourse'],
    mutationFn: addCourse,
  });
};

export default useAddCourse;
