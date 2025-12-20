'use client';
import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { courseSchema } from '../Schema';
import { Courseprops } from '@/app/interfaces';
import useAddCourse from '@/app/hook/useAddCourse';
import toast from 'react-hot-toast';
import Select from '@/app/_components/Select/Select';
import { SelectOptionProps } from '@/app/interfaces';
export default function NewCourse() {
  const { mutate: addCourse } = useAddCourse();
  const categories: SelectOptionProps[] = useMemo(
    () => [
      { label: 'مواد جامعية', value: 'مواد جامعية' },
      { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
    ],
    []
  );
  const levels: SelectOptionProps[] = useMemo(
    () => [
      { label: 'مبتدئ', value: 'مبتدئ' },
      { label: 'متوسط', value: 'متوسط' },
      { label: 'متقدم', value: 'متقدم' },
      { label: 'سنة ثالثة', value: 'سنة ثالثة' },
      { label: 'سنة رابعة', value: 'سنة رابعة' },
      { label: 'سنة خامسة', value: 'سنة خامسة' },
    ],
    []
  );
  interface FormField {
    label: string;
    name: keyof Courseprops;
    type?: string;
    placeholder?: string;
  }
  const fields: FormField[] = [
    {
      label: 'اسم الكورس',
      name: 'course_name',
      type: 'text',
      placeholder: 'اكتب اسم الكورس جديد',
    },
    {
      label: 'السعر',
      name: 'price',
      type: 'text',
      placeholder: 'اكتب سعر الكورس',
    },

    {
      label: 'رابط الصورة',
      name: 'image_url',
      type: 'text',
      placeholder: 'ضع رابط الصورة',
    },
    { label: 'الفئة', name: 'category', type: 'text' },
    { label: 'المستوى', name: 'level', type: 'text' },
    { label: 'الوصف', name: 'description', placeholder: 'اكتب وصف الكورس' },
    {
      label: 'المهارات',
      name: 'skills',
      placeholder: 'اكتب المهارات المكتسبة بين كل مهارة والاخري ( , )',
    },
    {
      label: 'ما ستتعلمه',
      name: 'what_you_will_learn',
      placeholder: 'اكتب ما ستتعلمه بين كل مهارة والاخري ( , )',
    },
  ];

  const formik = useFormik<Courseprops>({
    initialValues: {
      course_name: '',
      image_url: '',
      category: '',
      level: '',
      description: '',
      skills: '',
      what_you_will_learn: '',
      price: 0,
    },
    validationSchema: courseSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      addCourse(values, {
        onSuccess: () => {
          toast.success('تم اضافة الكورس بنجاح', {
            position: 'top-center',
          });
          resetForm();
          setSubmitting(false);
        },
        onError: () => {
          toast.error('اسم الكورس مستخدم من قبل');
          setSubmitting(false);
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* inputs */}
        {fields?.slice(0, 3)?.map((feld, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="font-semibold px-2">{feld.label}</label>
            <input
              type={feld.type}
              name={feld.name}
              value={formik.values[feld.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={feld.placeholder}
              className="border border-gray-400 p-2 rounded outline-none focus:border-therd duration-100"
            />
            {formik.touched[feld.name] && formik.errors[feld.name] && (
              <span className="text-red-500 text-sm">
                {formik.errors[feld.name]}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="select grid grid-cols-2 gap-5 mb-5 *:flex *:flex-col *:px-2 *:gap-2">
        <div>
          <span>{fields[3].label}</span>
          <Select
            selectOptions={categories}
            onselect={(value) => formik.setFieldValue('category', value)}
          />
        </div>
        <div>
          <span>{fields[4].label}</span>
          <Select
            selectOptions={levels}
            onselect={(value) => formik.setFieldValue('level', value)}
          />
        </div>
      </div>
      <div className="textArea grid grid-cols-3 gap-5 mb-5">
        {/* text area */}
        {fields.slice(5, 8)?.map((feld, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="font-semibold px-2">{feld.label}</label>
            <textarea
              placeholder={feld.placeholder}
              name={feld.name}
              value={formik.values[feld.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-400 p-5 rounded outline-none focus:border-therd duration-100 h-[250px] resize-none"
            />
            {formik.touched[feld.name] && formik.errors[feld.name] && (
              <span className="text-red-500 text-sm">
                {formik.errors[feld.name]}
              </span>
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="bg-therd text-white p-2 rounded hover:opacity-80 mb-5 w-full mx-auto"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'جارٍ الإرسال...' : 'إرسال'}
      </button>
    </form>
  );
}
