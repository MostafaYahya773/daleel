'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { Courseprops } from '../interfaces';
const useEditCourse = (id: string) => {
  const editCourse = async (values: Courseprops) => {
    const { error } = await createClient()
      .from('courses')
      .update(values)
      .eq('id', id);
    return error;
  };

  return useMutation({
    mutationKey: ['editCourse'],
    mutationFn: editCourse,
  });
};

export default useEditCourse;
