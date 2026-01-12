'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { Courseprops } from '../interfaces';
const useEditCourse = (id: string) => {
  const editCourse = async (values: Courseprops) => {
    const { data, error } = await createClient()
      .from('courses')
      .update(values)
      .eq('id', id);

    if (error) throw new Error(error.message);
    console.log(data);

    return data;
  };

  return useMutation({
    mutationKey: ['editCourse', id],
    mutationFn: editCourse,
  });
};

export default useEditCourse;
