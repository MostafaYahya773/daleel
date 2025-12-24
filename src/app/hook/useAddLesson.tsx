'use client';
import { useMutation } from '@tanstack/react-query';
import { Lessonprops } from '../interfaces';
import { supabase } from '../../../lib/supabaseClient';

const useAddLesson = () => {
  const addLesson = async (lesson: Lessonprops) => {
    const { data, error, statusText } = await supabase
      .from('lessons')
      .insert(lesson);
    if (error) throw new Error(error.message);
    console.log(statusText);

    return data;
  };

  return useMutation({
    mutationKey: ['addLesson'],
    mutationFn: addLesson,
  });
};

export default useAddLesson;
