'use client';
import { useMutation } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { createClient } from '../../../lib/supabase/client';

const useAddLesson = () => {
  const addLesson = async (lesson: Lessonprops) => {
    const { data, error, statusText } = await createClient()
      .from('lessons')
      .insert(lesson);
    if (error) throw new Error(error.message);

    return data;
  };

  return useMutation({
    mutationKey: ['addLesson'],
    mutationFn: addLesson,
  });
};

export default useAddLesson;
