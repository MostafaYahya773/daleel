'use client';
import { useFormik } from 'formik';
import { Send, PhoneCall, Mail, Phone } from 'lucide-react';
import { ContactUsProps } from '../../interfaces';
import useAddContactUs from '@/app/hook/useAddContactUs';
import { ContactSchema } from '@/app/auth/Schema';
import React from 'react';
import { UserInfoProps } from '../../interfaces';
import Link from 'next/link';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
}

interface Contact {
  value: string;
  label: string;
  icon: any;
  href: string;
}

const formFields: FormField[] = [
  { name: 'name', label: 'الاسم', type: 'text', placeholder: 'اكتب اسمك' },
  {
    name: 'phone',
    label: 'رقم تواصل وتس اب',
    type: 'text',
    placeholder: 'اكتب رقم الهاتف',
  },
  {
    name: 'email',
    label: 'الإيميل',
    type: 'email',
    placeholder: 'example@email.com',
  },
  {
    name: 'subject',
    label: 'الموضوع',
    type: 'text',
    placeholder: 'عنوان الموضوع',
  },
  {
    name: 'message',
    label: 'تفاصيل الموضوع',
    type: 'textarea',
    placeholder: 'اكتب تفاصيل الموضوع هنا',
  },
];

const ContactType: Contact[] = [
  {
    value: '+963935746472',
    label: 'الهاتف',
    icon: PhoneCall,
    href: 'tel:+963935746472',
  },
  {
    value: '+963935746472',
    label: 'الواتس اب',
    icon: Phone,
    href: 'https://wa.me/963935746472',
  },
  {
    value: '+963935746472',
    label: 'التليجرام',
    icon: Send,
    href: 'https://t.me/+963935746472',
  },
  {
    value: 'daleel@gmail.com',
    label: 'البريد الالكتروني',
    icon: Mail,
    href: 'mailto:daleel@gmail.com',
  },
];

const ContactUsContent = React.memo(
  ({ userInfo }: { userInfo: UserInfoProps }) => {
    const { mutate: readMessage } = useAddContactUs();

    const formik = useFormik<ContactUsProps>({
      initialValues: {
        name: userInfo.name || '',
        phone: '',
        email: userInfo.email || '',
        subject: '',
        message: '',
      },
      onSubmit: (values, { resetForm, setSubmitting }) => {
        readMessage(values, {
          onSuccess: () => {
            resetForm();
            setSubmitting(false);
          },
          onError: () => {
            setSubmitting(false);
          },
        });
      },
      validationSchema: ContactSchema,
      enableReinitialize: true,
    });

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 px-5">
        {/* ===== FORM ===== */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-4 order-2 lg:order-1 bg-secondary p-2 rounded-lg shadow-lg"
        >
          {formFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 px-2">
                {field.label}
                <span className="text-red-500 text-[18px] ms-1">*</span>
              </label>

              {field.type === 'textarea' ?
                <textarea
                  className="rounded-xl border border-gray-300 px-4 py-3 h-[150px] text-sm outline-none focus:border-therd duration-300 resize-none"
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formik.values[field.name as keyof ContactUsProps]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              : <input
                  type={field.type}
                  className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-therd duration-300"
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formik.values[field.name as keyof ContactUsProps]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              }

              {formik.touched[field.name as keyof ContactUsProps] &&
                formik.errors[field.name as keyof ContactUsProps] && (
                  <span className="text-red-500 text-sm">
                    {formik.errors[field.name as keyof ContactUsProps]}
                  </span>
                )}
            </div>
          ))}

          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="rounded-xl bg-therd px-6 py-3 hover:opacity-80 duration-300 text-sm font-medium text-white"
          >
            {formik.isSubmitting ?
              <span className="loaderAnimation" />
            : <div className="flex items-center justify-center gap-2">
                إرسال
                <Send size={16} />
              </div>
            }
          </button>
        </form>

        {/* ===== CONTACT INFO ===== */}
        <div className="grid grid-cols-1 gap-3 order-1 lg:order-2">
          {ContactType.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-3 w-full h-full rounded-xl bg-secondary p-4 shadow-md hover:opacity-80 duration-300"
            >
              <span className="flex items-center justify-center bg-therd rounded-full w-12 h-12 shrink-0">
                <contact.icon size={25} className="text-white" />
              </span>
              <span className="lg:text-xl text-lg font-medium text-fourth underline">
                {contact.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  },
);

ContactUsContent.displayName = 'ContactUsContent';

export default ContactUsContent;
