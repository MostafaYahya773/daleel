'use client';

import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { FormSignUpFields, UserProps } from '../../../interfaces';
import { useRouter } from 'next/navigation';
import useUpdateProfile from '@/app/hook/useUpdateProfile';
import { UpdateProfile } from '@/app/auth/Schema';

interface FormField {
  name: keyof FormSignUpFields;
  type: string;
  label?: string;
  placeholder: string;
}

const PersonalInfomForm = ({ userInfo }: { userInfo: UserProps }) => {
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const router = useRouter();
  const form: FormField[] = [
    {
      name: 'full_name',
      type: 'text',
      label: 'اسم المستخدم',
      placeholder: 'ادخل اسم المستخدم',
    },
    {
      name: 'email',
      type: 'email',
      label: 'البريد الالكتروني',
      placeholder: 'ادخل البريد الالكتروني',
    },
    {
      name: 'date_of_birth',
      type: 'date',
      label: 'تاريخ الميلاد',
      placeholder: '',
    },
    { name: 'gender', type: 'radio', label: 'male', placeholder: 'ادخل الجنس' },
    {
      name: 'gender',
      type: 'radio',
      label: 'female',
      placeholder: 'ادخل الجنس',
    },
  ];

  const formik = useFormik<FormSignUpFields>({
    initialValues: {
      id: userInfo.sub || '',
      full_name: userInfo.full_name || '',
      email: userInfo.email || '',
      gender: userInfo?.gender || '',
      date_of_birth: userInfo.date_of_birth || '',
    },
    validationSchema: UpdateProfile,

    onSubmit: (values, { setSubmitting }) => {
      updateProfile(values, {
        onSuccess: () => {
          setSubmitting(false);
          toast.success('تم تحديث الملف الشخصي بنجاح', {
            position: 'top-center',
          });
          router.refresh();
        },
        onError: (e) => {
          setSubmitting(false);
          toast.error(e.message || 'فشل تحديث الحساب', {
            position: 'top-center',
          });
        },
      });
    },
  });
  return (
    <div className="flex flex-col gap-10 py-3">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        {form.slice(0, 3).map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 px-2">
              {field.label}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <div className="relative">
              <input
                type={field.type}
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-therd duration-300"
              />
            </div>
            {formik.touched[field.name] && formik.errors[field.name] && (
              <span className="text-red-500 text-sm">
                {formik.errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <span className="ms-1 text-[15px]">
            الجنس<span className="text-red-500">*</span>
          </span>
          <div className="flex gap-5">
            {form.slice(3).map((field) => (
              <div key={field.label} className="flex">
                <input
                  id={field.label}
                  type={field.type}
                  name="gender"
                  value={field.label}
                  checked={formik.values.gender === field.label}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full flex"
                />
                <label
                  htmlFor={field.label}
                  className="flex items-center font-medium text-gray-700 px-1 cursor-pointer"
                >
                  {field.label}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <span className="text-red-500 text-sm">{formik.errors.gender}</span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-xl bg-therd px-6 py-3 text-sm font-medium text-white hover:opacity-80 duration-300 disabled:opacity-50"
        >
          {isPending ? (
            <span className="loaderAnimation"></span>
          ) : (
            'تحديث الملف الشخصي'
          )}
        </button>
      </form>
    </div>
  );
};

export default PersonalInfomForm;
