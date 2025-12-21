import * as Yup from 'yup';

export const courseSchema = Yup.object().shape({
  course_name: Yup.string()
    .max(100, 'اسم الكورس طويل جدًا')
    .nullable()
    .required('اسم الكورس مطلوب'),
  image_url: Yup.string().nullable(),
  category: Yup.string().required('الفئة مطلوبة').nullable(),
  level: Yup.string()
    .oneOf(
      ['متوسط', 'متقدم', 'مبتدئ', 'سنة ثالثة', 'سنة رابعة', 'سنة خامسة'],
      'Level غير صالح'
    )
    .required('المستوى مطلوب')
    .nullable(),
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
