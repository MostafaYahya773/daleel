'use client';
import { useFormik } from 'formik';
import useEditComment from '@/app/hook/useEditComment';
import { X } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

interface EditPopupProps {
  comment_id: number;
  user_id: string;
  comment_text: string;
  onClose: () => void;
}

const EditPopup = ({
  comment_id,
  user_id,
  comment_text,
  onClose,
}: EditPopupProps) => {
  const { mutate: editComment } = useEditComment();

  const formik = useFormik({
    initialValues: {
      comment: comment_text,
    },
    onSubmit: (values, { setSubmitting }) => {
      if (!values.comment.trim()) return;

      setSubmitting(true);
      editComment(
        {
          comment_id: comment_id,
          user_id: user_id,
          newComment: values.comment,
        },
        {
          onSuccess: () => {
            setSubmitting(false);
            toast.success('تم التعديل بنجاح');
            onClose();
          },
          onError: () => {
            toast.error('فشل التعديل');
            setSubmitting(false);
          },
        },
      );
    },
  });

  return (
    <div className="fixed z-[100] top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black/50">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col gap-3 p-4 rounded-lg shadow-md min-w-[90%] md:min-w-[700px] mx-auto text-center"
      >
        <X onClick={onClose} className="cursor-pointer ml-auto w-6 h-6" />

        <textarea
          id="comment"
          name="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="أدخل نص التعليق"
          className="min-h-[200px] p-3 rounded-md border border-gray-400 outline-none resize-none w-full"
        />

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-therd text-white py-2 rounded-md disabled:opacity-50"
        >
          {formik.isSubmitting ?
            <span className="loaderAnimation"></span>
          : 'تعديل'}
        </button>
      </form>
    </div>
  );
};

export default EditPopup;
