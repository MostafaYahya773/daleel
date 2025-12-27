'use client';
import React from 'react';
import { Lessonprops } from '@/app/interfaces';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { lessonSchema } from '../Schema';
import AddAndEditindCourseAndLesson from '@/app/_components/Loader/AddAndEditindCourseAndLesson';
import useAddLesson from '@/app/hook/useAddLesson';
import useGetCourseById from '@/app/hook/useGetCourseById';
const NewLessonForm = React.memo(({ CourseId }: { CourseId: string }) => {
  const { data: courseDetails, isLoading } = useGetCourseById(CourseId);
  const { mutate: addLesson } = useAddLesson();
  interface FormField {
    label: string;
    name: keyof Lessonprops;
    type?: string;
    placeholder?: string;
  }
  const formFelds: FormField[] = [
    {
      label: 'اسم الدرس',
      name: 'title',
      type: 'text',
      placeholder: 'من فضلك اكتب اسم الدرس',
    },
    {
      label: 'رابط الفيديو',
      name: 'youtube_url',
      type: 'text',
      placeholder: 'من فضلك ادخل رابط الفيديو',
    },
    {
      label: 'رابط الصورة',
      name: 'lesson_img',
      type: 'text',
      placeholder: 'من فضلك ادخل رابط الصورة',
    },
    {
      label: 'وصف الدرس',
      name: 'description',
      type: 'text',
      placeholder: 'من فضلك ادخل وصف الدرس',
    },
  ];
  const formik = useFormik<Lessonprops>({
    initialValues: {
      course_id: courseDetails?.id || '',
      title: '',
      description: '',
      youtube_url: '',
      is_free: false,
      lesson_img: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      addLesson(values, {
        onSuccess: () => {
          toast.success('تم اضافة الدرس بنجاح', { position: 'top-center' });
          resetForm();
          setSubmitting(false);
        },
        onError: () => {
          toast.error('فشل اضافة الدرس', { position: 'top-center' });
          setSubmitting(false);
        },
      });
    },
    validationSchema: lessonSchema,
    enableReinitialize: true,
  });
  if (isLoading) {
    return <AddAndEditindCourseAndLesson />;
  }
  return (
    <div className={`${!CourseId ? 'hidden' : ''}`}>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {formFelds.slice(0, 3).map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-semibold px-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formik.values[field.name] as string}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-gray-400 p-2 rounded outline-none focus:border-therd duration-100"
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <span className="text-red-500 text-sm">
                  {formik.errors[field.name]}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="font-semibold px-2">{formFelds[3].label}</label>
          <textarea
            name={formFelds[3].name}
            value={formik.values[formFelds[3].name] as string}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={formFelds[3].placeholder}
            className="border border-gray-400 p-2 rounded outline-none resize-none h-[200px] focus:border-therd duration-100"
          />
          {formik.touched[formFelds[3].name] &&
            formik.errors[formFelds[3].name] && (
              <span className="text-red-500 text-sm">
                {formik.errors[formFelds[3].name]}
              </span>
            )}
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="bg-therd text-white p-2 rounded hover:opacity-80 mb-5 w-full mx-auto"
        >
          {formik.isSubmitting ? (
            <span className="loaderAnimation"></span>
          ) : (
            'اضافة درس جديد'
          )}
        </button>
      </form>
    </div>
  );
});

export default NewLessonForm;
