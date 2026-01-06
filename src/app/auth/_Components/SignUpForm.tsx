'use client';

import { useFormik } from 'formik';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import useSignUp from '@/app/hook/useSignUp';
import { SignUpSchema } from '../Schema';
import { FormSignUpFields } from '../../interfaces';
import { useRouter } from 'next/navigation';

interface FormField {
  name: keyof FormSignUpFields;
  type: string;
  label?: string;
  placeholder: string;
}

const SignUpForm = () => {
  const { mutate: signUp, isPending } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
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
      name: 'password',
      type: 'password',
      label: 'كلمة المرور',
      placeholder: 'ادخل كلمة المرور',
    },
    {
      name: 'confirm_password',
      type: 'password',
      label: 'تأكيد كلمة المرور',
      placeholder: 'اعد إدخال كلمة المرور',
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
      full_name: '',
      email: '',
      gender: 'male',
      password: '',
      confirm_password: '',
      date_of_birth: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      const { confirm_password, ...payload } = values;
      signUp(payload, {
        onSuccess: () => {
          setSubmitting(false);
          toast.success('تم إنشاء الحساب بنجاح', { position: 'top-center' });
          router.replace('/auth/ValidateAccount');
        },
        onError: (e: any) => {
          setSubmitting(false);
          toast.error(e.message || 'فشل إنشاء الحساب', {
            position: 'top-center',
          });
        },
      });
    },
  });

  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-therd font-bold md:text-[25px] text-[18px]">
          إنشاء حساب جديد
        </h2>
        <p className="text-[16px] text-gray-400">
          خطوة بسيطة تفصلك عن تجربة تعليمية مميزة
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        {form.slice(0, 5).map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 px-2">
              {field.label}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <div className="relative">
              <input
                type={
                  field.type === 'password' && showPassword
                    ? 'text'
                    : field.type
                }
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-therd duration-300"
              />
              {field.type === 'password' && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 end-3 flex items-center text-gray-500 hover:text-therd"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
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
            {form.slice(5).map((field) => (
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
          {isPending ? <span className="loaderAnimation"></span> : 'إنشاء حساب'}
        </button>
      </form>

      <div className="flex flex-col items-center gap-2">
        <p className="text-[16px] text-gray-400">لديك حساب بالفعل؟</p>
        <Link href="/auth/LogIn" className="text-therd font-bold">
          سجل دخول
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
