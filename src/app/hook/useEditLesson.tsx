'use client';
import { useMutation } from '@tanstack/react-query';
import { supabaseServer } from '../../../lib/supabaseServer';
import { Courseprops, Lessonprops } from '../interfaces';
const useEditLesson = (id: number) => {
  const editCourse = async (values: Lessonprops) => {
    const { error } = await supabaseServer
      .from('lessons')
      .update(values)
      .eq('id', id);
    return error;
  };

  return useMutation({
    mutationKey: ['editLesson', id],
    mutationFn: editCourse,
  });
};

export default useEditLesson;
