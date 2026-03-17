'use client';
import { useFormik } from 'formik';
import { CommentsProps } from '../../../../../interfaces/index';
import useAddComment from '@/app/hook/useAddComment';
import useGetComment from '@/app/hook/useGetComment';
import Image from 'next/image';
import { formatMessageDate } from '../../../../../../../lib/formatMessageDate';
import { Trash, Pen, Timer, Ellipsis, MessageSquareOff } from 'lucide-react';
import { useState } from 'react';
import useDeleteComment from '@/app/hook/useDeleteComments';
import LoadingAnimation from '@/app/_components/LoadingAnimation/LoadingAnimation';
import EditPopup from './EditPopup';

const Comments = ({
  lessonId,
  userId,
}: {
  lessonId: number;
  userId: string;
}) => {
  const { mutate: addComment } = useAddComment();
  const { data: Allcomments, isLoading } = useGetComment(lessonId);
  const { mutate: deleteComment } = useDeleteComment(lessonId);
  const [isEdit, setIsEdit] = useState<number | null>(null);
  const [editingtext, setEditingtext] = useState<string | null>(null);

  const formik = useFormik<CommentsProps>({
    initialValues: {
      lesson_id: lessonId,
      user_id: userId,
      comment: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      addComment(values, {
        onSuccess: () => {
          resetForm();
          setSubmitting(false);
        },
        onError: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleToggleEdit = (id: number) => {
    setIsEdit((prev) => (prev === id ? null : id));
  };

  if (isLoading) return <LoadingAnimation />;

  return (
    <div className="flex flex-col gap-10 min-h-screen">
      {/* Add Comment */}
      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className="text-gray-500 px-2">
          إضافة تعليق
        </label>

        <form onSubmit={formik.handleSubmit}>
          <textarea
            id="comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="قم بإضافة تعليق ..."
            className="resize-none h-[130px] w-full border border-gray-300 focus:border-gray-600 outline-none rounded-lg p-3 text-[14px]"
          />

          <button
            type="submit"
            className="bg-therd text-white md:w-[150px] w-full py-2 rounded-lg"
          >
            {formik.isSubmitting ?
              <span className="loaderAnimation"></span>
            : 'اضافة التعليق'}
          </button>
        </form>
      </div>

      {/* Comments */}
      <div className="showComments flex flex-col gap-10">
        {Allcomments?.length! > 0 ?
          Allcomments?.map((comment: CommentsProps) => (
            <div
              key={comment?.id}
              className="flex gap-3 p-4 pb-3 border-b border-gray-200"
            >
              <Image
                src={comment?.profiles?.avatar_url ?? '/logo.png'}
                alt="commentimg"
                width={40}
                height={40}
                className="w-[50px] h-[50px] rounded-full"
              />

              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-3 items-center w-full">
                  <div className="flex gap-3 items-center">
                    <p className="text-therd font-bold text-[16px]">
                      {comment.profiles?.full_name}
                    </p>

                    <div className="flex items-center text-gray-600 gap-2">
                      <Timer className="w-4" />
                      <span className="text-[13px]">
                        {` تم النشر ${formatMessageDate(comment?.created_at)}`}
                      </span>
                    </div>
                  </div>

                  {/* 3 Dots Menu */}
                  {comment?.user_id === userId && (
                    <div className="ml-auto relative">
                      <Ellipsis
                        onClick={() => handleToggleEdit(comment.id!)}
                        className="w-5 h-5 text-gray-600 cursor-pointer"
                      />

                      <div
                        className={`${
                          isEdit === comment.id ? 'flex' : 'hidden'
                        } flex-col absolute top-6 right-0 bg-white drop-shadow-lg border border-gray-300 rounded-lg z-50`}
                      >
                        <button
                          onClick={() => {
                            setEditingtext(comment.comment!);
                            setIsEdit(null);
                          }}
                          className="flex w-20 hover:bg-gray-100 items-center justify-center border-b border-gray-300 py-2 text-blue-600 gap-1 text-[12px]"
                        >
                          <Pen className="w-3 h-3" />
                          تعديل
                        </button>

                        <button
                          onClick={() => {
                            deleteComment({
                              commentId: comment.id!,
                              userId: comment.user_id!,
                            });
                            setIsEdit(null);
                          }}
                          className="flex w-20 hover:bg-gray-100 items-center justify-center py-2 text-red-600 gap-1 text-[12px]"
                        >
                          <Trash className="w-3 h-3" />
                          حذف
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-[14px] leading-7 text-gray-800">
                  {comment?.comment}
                </p>

                {/* Edit Popup */}
                {editingtext === comment.comment && (
                  <EditPopup
                    comment_id={comment.id!}
                    comment_text={comment.comment!}
                    user_id={userId}
                    onClose={() => setEditingtext(null)}
                  />
                )}
              </div>
            </div>
          ))
        : <div className="flex flex-col justify-center gap-7 items-center min-h-[60vh] text-gray-500/50">
            <MessageSquareOff className="w-10 h-10 text-therd/50" />
            <span className="text-[24px]">لا يوجد تعليقات</span>
          </div>
        }
      </div>
    </div>
  );
};

export default Comments;
