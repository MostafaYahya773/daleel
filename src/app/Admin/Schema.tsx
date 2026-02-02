import * as Yup from 'yup';

export const courseSchema = Yup.object().shape({
  course_name: Yup.string()
    .max(100, 'اسم الكورس طويل جدًا')
    .nullable()
    .required('اسم الكورس مطلوب'),
  image_url: Yup.string().required('الصورة مطلوبة').nullable(),
  category: Yup.string().required('الفئة مطلوبة').nullable(),
  level: Yup.string().required('المستوى مطلوب').nullable(),
  description: Yup.string()
    .max(1500, 'الوصف طويل جدًا')
    .required('الوصف مطلوب')
    .nullable(),
  skills: Yup.string()
    .max(1500, 'المهارات طويل جدًا')
    .required('المهارات مطلوبة')
    .nullable(),
  what_you_will_learn: Yup.string()
    .max(1500, 'الشرح طويل جدًا')
    .required('الشرح مطلوب')
    .nullable(),
  price: Yup.number()
    .min(0, 'السعر يجب أن يكون >= 0')
    .required('السعر مطلوب')
    .nullable(),
});

export const lessonSchema = Yup.object({
  title: Yup.string()
    .required('اسم الدرس مطلوب')
    .min(3, 'اسم الدرس قصير جدًا')
    .max(100, 'اسم الدرس طويل جدًا')
    .matches(/^[^<>]*$/, 'ممنوع إدخال أكواد أو علامات غير مسموح بها'),

  description: Yup.string()
    .required('وصف الدرس مطلوب')
    .min(10, 'الوصف قصير جدًا')
    .max(1500, 'الوصف طويل جدًا')
    .matches(/^[^<>]*$/, 'ممنوع إدخال أكواد HTML أو Scripts'),

  youtube_url: Yup.string()
    .required('رابط الفيديو مطلوب')
    .url('رابط غير صالح')
    .matches(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
      'الرابط يجب أن يكون من YouTube فقط',
    ),

  lesson_img: Yup.string().required('الصورة مطلوبة').nullable(),

  is_free: Yup.boolean().required(),
});
