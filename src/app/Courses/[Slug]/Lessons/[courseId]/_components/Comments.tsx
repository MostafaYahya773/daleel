'use client';
import { useFormik } from 'formik';
import { CommentsProps } from '../../../../../interfaces/index';
import useAddComment from '@/app/hook/useAddComment';
import useGetComment from '@/app/hook/useGetComment';
import Image from 'next/image';
import { formatMessageDate } from '../../../../../../../lib/formatMessageDate';
import { Timer } from 'lucide-react';

const Comments = ({
  lessonId,
  userId,
  avatar,
  userName,
}: {
  lessonId: number;
  userId: string;
  avatar: string;
  userName: string;
}) => {
  const { mutate: addComment } = useAddComment();

  const { data: Allcomments, isLoading } = useGetComment(lessonId);
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
  if (isLoading) return;

  return (
    <div className="flex flex-col gap-10 min-h-screen">
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
      <div className="showComments flex flex-col gap-10">
        {Allcomments?.map((comment: CommentsProps) => (
          <div
            key={comment?.id}
            className="flex gap-3 p-4 rounded-md border-b border-gray-300"
          >
            <Image
              src={avatar ?? '/logo.png'}
              alt={avatar ?? 'commentimg'}
              width={40}
              height={40}
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="text-therd font-bold text-[16px]">{userName}</p>
                <div className="flex items-center gap-2">
                  <Timer className="text-gray-500 w-4 h-4" />
                  <span className="text-gray-500 text-[13px]">
                    {` تم النشر ${formatMessageDate(comment?.created_at)}`}
                  </span>
                </div>
              </div>
              <p className="text-[12px] lg:text-[15px] md:text-[14px] text-gray-600 leading-7">
                {comment?.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
