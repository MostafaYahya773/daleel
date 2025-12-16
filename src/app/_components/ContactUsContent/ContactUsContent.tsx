import { Send, PhoneCall, Mail, Phone } from 'lucide-react';

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
}
const formFields: FormField[] = [
  { name: 'name', label: 'الاسم', type: 'text', placeholder: 'اكتب اسمك' },
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
    name: 'details',
    label: 'تفاصيل الموضوع',
    type: 'textarea',
    placeholder: 'اكتب تفاصيل الموضوع هنا',
  },
];
const ContactType: Contact[] = [
  {
    value: '00112233445',
    label: ' الهاتف',
    icon: PhoneCall,
  },
  {
    value: '1122334455',
    label: 'الواتس اب',
    icon: Phone,
  },
  {
    value: '00112233445',
    label: 'التليجرام',
    icon: Send,
  },
  {
    value: 'daleel@gmail.com',
    label: 'البريد الالكتروني',
    icon: Mail,
  },
];

const ContactUsContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 px-5">
      <form className="w-full flex flex-col gap-4 order-2 lg:order-1 bg-secondary p-2 rounded-lg shadow-lg">
        {' '}
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 px-2">
              {field.label}
              <span className="text-red-500 text-[18px] ms-1">*</span>
            </label>

            {field.type === 'textarea' ? (
              <textarea
                className="resize-none py-3 rounded-xl border border-gray-300 px-4 text-sm outline-none focus:border-therd duration-300"
                placeholder={field.placeholder}
              />
            ) : (
              <input
                type={field.type}
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-therd duration-300"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-therd px-6 py-3 hover:opacity-80 duration-300 text-sm font-medium text-white"
        >
          إرسال
          <Send size={16} />
        </button>
      </form>
      <div className="grid grid-cols-1 gap-3 order-1 lg:order-2">
        {ContactType?.map((contact, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-3 w-full h-full rounded-xl bg-secondary p-4 shadow-md"
          >
            <span className="flex items-center justify-center bg-therd rounded-full w-12 h-12">
              <contact.icon size={25} className="text-white" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="lg:text-xl text-lg  font-medium">{contact.label}</p>
              <p className="lg:text-xl text-lg font-medium text-gray-400">
                {contact.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactUsContent;
