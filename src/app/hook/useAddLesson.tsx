'use client';
import { useMutation } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { supabase } from '../../../lib/supabaseClient';

const useAddLesson = (LessonId: number) => {
  const addLesson = async (lesson: Lessonprops) => {
    const { data, error } = await supabase.from('lessons').insert(lesson);
    if (error) throw new Error(error.message);
    return data;
  };

  return useMutation({
    mutationKey: ['addLesson', LessonId],
    mutationFn: addLesson,
  });
};

export default useAddLesson;
