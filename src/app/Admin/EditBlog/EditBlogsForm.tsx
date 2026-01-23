'use client';
import React from 'react';
import { BlogForms, BlogFormProps } from '../../interfaces';
import BlogDropList from '../_Components/BlogDrobList/BlogDropList';
import { useFormik } from 'formik';
import useGetBlogById from '@/app/hook/useGetBlogById';
import useUpdateBlog from '@/app/hook/useUpdateBlog';
import toast from 'react-hot-toast';
const EditBlogsForm = React.memo(
  ({ blogs, userId }: { blogs: BlogForms[]; userId: string }) => {
    const FormInputs: BlogFormProps[] = [
      {
        label: 'عنوان المقالة',
        name: 'title',
        type: 'text',
        placeholder: 'اسم المقالة الجديدة',
      },
      {
        label: 'وقت القراءة',
        name: 'reading_minutes',
        type: 'number',
        placeholder: 'وقت القراءة',
      },
      {
        label: 'رابط الصورة',
        name: 'image_url',
        type: 'file',
        placeholder: 'اختر صورة المقالة',
      },
      {
        label: 'محتوى المقالة',
        name: 'content',
        type: 'textArea',
        placeholder: 'محتوى المقالة',
      },
    ];
    const [BlogID, setBlogId] = React.useState<string | null>(null);
    const { data } = useGetBlogById(BlogID || '');
    const { mutate: updateBlog } = useUpdateBlog(userId);
    const formik = useFormik<BlogForms>({
      initialValues: {
        id: data?.id || '',
        title: data?.title || '',
        content: data?.content || '',
        file: data?.file || null,
        image_url: data?.image_url || null,
        reading_minutes: data?.reading_minutes?.toString() || '',
      },
      onSubmit: (values, { resetForm, setSubmitting }) => {
        updateBlog(values, {
          onSuccess: () => {
            resetForm();
            setSubmitting(false);
            toast.success('تم تحديث المقالة بنجاح', { position: 'top-center' });
          },
          onError: () => {
            setSubmitting(false);
            toast.error('فشل تحديث المقالة', { position: 'top-center' });
          },
        });
      },
      enableReinitialize: true,
    });
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
        formik.setFieldValue('file', file);
      }
    };
    return (
      <div className="grid grid-rows-[auto_1fr] gap-3">
        <BlogDropList
          selectOptions={blogs}
          onselect={(BlogID) => {
            setBlogId(BlogID);
          }}
        />
        <div className="form__felds">
          <form onSubmit={formik.handleSubmit}>
            <div className="form grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              {FormInputs.slice(0, 2).map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label className="font-semibold px-2 text-gray-500">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formik.values[field.name] as string}
                    onChange={formik.handleChange}
                    placeholder={field.placeholder}
                    className="border border-gray-400 p-2 rounded outline-none focus:border-therd duration-100"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="select_Img"
                  className="font-semibold px-2 text-gray-500"
                >
                  {FormInputs[2].label}
                </label>

                <div className="w-full h-full border border-gray-400 p-2 rounded">
                  <label
                    htmlFor="select_Img"
                    className="text-gray-400 cursor-pointer w-full block"
                  >
                    {formik.values.file ?
                      formik.values.file.name
                    : FormInputs[2].placeholder}
                  </label>

                  <input
                    id="select_Img"
                    type="file"
                    name="image_url"
                    onChange={(e) => {
                      handleFile(e);
                    }}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-3">
                <label className="font-semibold px-2 text-gray-500">
                  {FormInputs[3].label}
                </label>
                <textarea
                  name="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  placeholder={FormInputs[3].placeholder}
                  className="border border-gray-400 p-3 rounded outline-none focus:border-therd duration-100 h-[250px] resize-none"
                />
              </div>

              <div className="mb-5 w-full col-span-3">
                <button
                  type="submit"
                  className="bg-therd text-white w-full py-2 rounded hover:opacity-90 duration-150"
                >
                  {formik.isSubmitting ?
                    <span className="loaderAnimation"></span>
                  : 'تحديث المقالة'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  },
);

export default EditBlogsForm;
