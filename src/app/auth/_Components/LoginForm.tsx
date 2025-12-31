'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { FormLoginFields } from '../../interfaces/index';
import { LoginSchema } from '../Schema';
import useLogin from '@/app/hook/useLogin';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface FormField {
  type: string;
  label: string;
  placeholder: string;
}

const LoginForm = () => {
  const { mutate: login } = useLogin();
  const router = useRouter();
  const form: FormField[] = [
    {
      type: 'email',
      label: 'البريد الالكتروني',
      placeholder: 'ادخل البريد الالكتروني',
    },
    {
      type: 'password',
      label: 'كلمة المرور',
      placeholder: 'ادخل كلمة المرور',
    },
  ];

  const formik = useFormik<FormLoginFields>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      login(values, {
        onSuccess: () => {
          setSubmitting(false);
          router.replace('/');
          toast.success('تم تسجيل الدخول بنجاح', {
            position: 'top-center',
          });
        },
        onError: () => {
          setSubmitting(false);
          toast.error('البريد الالكتروني او كلمة المرور غير صحيح', {
            position: 'top-center',
          });
        },
      });
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className="flex flex-col gap-3 p-6 ">
      <div className="text flex flex-col gap-2 items-center">
        <h2 className="text-therd font-bold md:text-[25px] text-[18px] ">
          سجل دخول بحسابك
        </h2>
        <p className="text-[15px] text-gray-400">مرحبا بعودتك مرة اخري</p>
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          {form.map((field) => (
            <div key={field.type} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 px-2">
                {field.label}
                <span className="text-red-500 text-[18px] ms-1">*</span>
              </label>
              <input
                type={field.type}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-therd duration-300"
                placeholder={field.placeholder}
                value={formik.values[field.type as keyof FormLoginFields]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={field.type as keyof FormLoginFields}
              />
              {formik.touched[field.type as keyof FormLoginFields] &&
                formik.errors[field.type as keyof FormLoginFields] && (
                  <span className="text-red-500 text-sm">
                    {formik.errors[field.type as keyof FormLoginFields]}
                  </span>
                )}
            </div>
          ))}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-therd px-6 py-3 hover:opacity-80 duration-300 text-sm font-medium text-white"
          >
            {formik.isSubmitting ? (
              <span className="loaderAnimation"></span>
            ) : (
              'تسجيل الدخول'
            )}
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[18px] text-gray-400">ليس لديك حساب؟</p>
        <Link href="/auth/SignUp" className="text-therd font-bold">
          انشاء حساب
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
