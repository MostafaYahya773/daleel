'use client';
import { useMutation } from '@tanstack/react-query';
import { supabaseServer } from '../../../lib/supabaseServer';
import { Courseprops } from '../interfaces';
const useEditCourse = (id: number) => {
  const editCourse = async (values: Courseprops) => {
    const { error } = await supabaseServer
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
