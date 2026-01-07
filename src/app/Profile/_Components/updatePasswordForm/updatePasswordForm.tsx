'use client';
import { useFormik } from 'formik';
import useupdatePassword from '../../../hook/useUpdatePassword';
import toast from 'react-hot-toast';
import { UpdatePasswordSchema } from '../../../auth/Schema';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormField {
  name: keyof UpdatePasswordValues;
  type: string;
  label: string;
}

interface UpdatePasswordValues {
  email: string;
  currentPassword: string;
  newPassword: string;
  Repassword: string;
}

const UpdatePasswordForm = React.memo(({ email }: { email: string }) => {
  const { mutate: updatePassword } = useupdatePassword();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const forms: FormField[] = [
    {
      name: 'currentPassword',
      type: isPasswordVisible ? 'text' : 'password',
      label: 'كلمة المرور الحالية',
    },
    {
      name: 'newPassword',
      type: isPasswordVisible ? 'text' : 'password',
      label: 'كلمة المرور الجديدة',
    },
    {
      name: 'Repassword',
      type: isPasswordVisible ? 'text' : 'password',
      label: 'تأكيد كلمة المرور الجديدة',
    },
  ];

  const formik = useFormik<UpdatePasswordValues>({
    initialValues: {
      email: email || '',
      currentPassword: '',
      newPassword: '',
      Repassword: '',
    },
    enableReinitialize: true,
    validationSchema: UpdatePasswordSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const { Repassword, ...payload } = values;
      updatePassword(payload, {
        onSuccess: () => {
          toast.success('تم تحديث كلمة المرور بنجاح', {
            position: 'top-center',
          });
          resetForm();
          setSubmitting(false);
        },
        onError: (e) => {
          toast.error(e.message || 'فشل تحديث كلمة المرور', {
            position: 'top-center',
          });
          setSubmitting(false);
        },
      });
    },
  });

  if (!email) return null;

  return (
    <div className="flex flex-col">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4">
          {forms.map((field) => (
            <div key={field.name} className="flex flex-col gap-2 relative">
              <label className="font-semibold px-2 lg:text-[16px] md:text-[14px] text-[12px] text-gray-600">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formik.values[field.name] || ''}
                placeholder={field.label}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border border-gray-400 p-2 rounded outline-none focus:border-therd duration-100"
              />
              {isPasswordVisible ? (
                <EyeOff
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute left-2 top-[40px] w-4 hover:cursor-pointer hover:text-therd duration-200"
                />
              ) : (
                <Eye
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute left-2 top-[40px] w-4 hover:cursor-pointer hover:text-therd duration-200"
                />
              )}

              {field.name === 'Repassword' &&
                formik.touched.Repassword &&
                formik.errors.Repassword && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.Repassword}
                  </span>
                )}
            </div>
          ))}

          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-therd px-6 py-3 hover:opacity-80 duration-300 text-sm font-medium text-white"
          >
            {formik.isSubmitting ? (
              <span className="loaderAnimation"></span>
            ) : (
              'تحديث كلمة المرور'
            )}
          </button>
        </div>
      </form>
    </div>
  );
});

export default UpdatePasswordForm;
