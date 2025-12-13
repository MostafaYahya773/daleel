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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
      <form className="w-full flex flex-col gap-4">
        <h3 className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[18px] text-therd">
          من فضلك قم بتعبئة الحقول التالية
        </h3>
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
      <div className="grid  md:grid-cols-2 gap-3">
        {ContactType?.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col  items-center justify-center gap-3 w-full h-full rounded-xl  bg-primary p-4"
          >
            <contact.icon size={50} className="text-therd" />
            <p className="lg:text-xl text-lg  font-medium">{contact.label}</p>
            <p className="lg:text-xl text-lg font-medium text-gray-400">
              {contact.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactUsContent;
