// schemas/loginSchema.ts
import * as yup from 'yup';

export const LoginSchema = yup.object({
  email: yup.string().required('الإيميل مطلوب').email('الإيميل غير صالح'),

  password: yup
    .string()
    .required('كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور غير صحيحة'),
});

export const SignUpSchema = yup.object({
  full_name: yup
    .string()
    .min(3, 'الاسم يجب أن يكون 3 حروف على الأقل')
    .required('اسم المستخدم مطلوب'),

  email: yup
    .string()
    .email('البريد الإلكتروني غير صحيح')
    .required('البريد الإلكتروني مطلوب'),

  password: yup
    .string()
    .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
    .matches(/[0-9]/, 'كلمة المرور يجب أن تحتوي على رقم واحد على الأقل')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'كلمة المرور يجب أن تحتوي على رمز واحد على الأقل'
    )
    .required('كلمة المرور مطلوبة'),

  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'كلمتا المرور غير متطابقتين')
    .required('تأكيد كلمة المرور مطلوب'),

  date_of_birth: yup
    .date()
    .max(new Date(), 'تاريخ الميلاد غير صالح')
    .required('تاريخ الميلاد مطلوب'),
});

export const UpdateProfile = yup.object({
  full_name: yup
    .string()
    .min(3, 'الاسم يجب أن يكون 3 حروف على الأقل')
    .required('اسم المستخدم مطلوب'),

  email: yup
    .string()
    .email('البريد الإلكتروني غير صحيح')
    .required('البريد الإلكتروني مطلوب'),

  date_of_birth: yup
    .date()
    .max(new Date(), 'تاريخ الميلاد غير صالح')
    .required('تاريخ الميلاد مطلوب'),
});

export const UpdatePasswordSchema = yup.object({
  email: yup
    .string()
    .email('البريد الإلكتروني غير صحيح')
    .required('البريد الإلكتروني مطلوب'),
  currentPassword: yup.string().required('كلمة المرور الحالية مطلوبة'),
  newPassword: yup
    .string()
    .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
    .matches(/[0-9]/, 'كلمة المرور يجب أن تحتوي على رقم واحد على الأقل')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'كلمة المرور يجب أن تحتوي على رمز واحد على الأقل'
    )
    .required('كلمة المرور مطلوبة'),
  Repassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'كلمتا المرور غير متطابقتين')
    .required('تأكيد كلمة المرور مطلوب'),
});

export const ContactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, 'الاسم قصير جدًا')
    .max(50, 'الاسم طويل جدًا')
    .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'الاسم غير صالح')
    .required('الاسم مطلوب'),

  phone: yup
    .string()
    .required('رقم الهاتف مطلوب')
    .matches(/^[0-9]+$/, 'مسموح بالأرقام فقط')
    .min(8, 'الرقم قصير')
    .max(15, 'الرقم طويل'),

  email: yup
    .string()
    .trim()
    .email('بريد إلكتروني غير صالح')
    .max(100)
    .required('الإيميل مطلوب'),

  subject: yup
    .string()
    .trim()
    .min(3, 'العنوان قصير جدًا')
    .max(100, 'العنوان طويل جدًا')
    .matches(/^[^<>$%{}]*$/, 'محتوى غير مسموح')
    .required('العنوان مطلوب'),

  message: yup
    .string()
    .trim()
    .min(10, 'الرسالة قصيرة جدًا')
    .max(500, 'الرسالة طويلة جدًا')
    .matches(/^[^<>$%{}]*$/, 'محتوى غير مسموح')
    .required('الرسالة مطلوبة'),
});
