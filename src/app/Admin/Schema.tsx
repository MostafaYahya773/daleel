import * as Yup from 'yup';

export const courseSchema = Yup.object().shape({
  course_name: Yup.string()
    .max(100, 'اسم الكورس طويل جدًا')
    .required('اسم الكورس مطلوب'),
  image_url: Yup.string().nullable(),
  category: Yup.string().max(50, 'Category طويل جدًا').nullable(),
  level: Yup.string()
    .oneOf(
      ['متوسط', 'محترف', 'مبتدئ', 'سنة ثالثة', 'سنة رابعة', 'سنة خامسة'],
      'Level غير صالح'
    )
    .nullable(),
  description: Yup.string().max(1500, 'الوصف طويل جدًا').nullable(),
  skills: Yup.string().max(200, 'Skills طويل جدًا').nullable(),
  what_you_will_learn: Yup.string().max(1500, 'الشرح طويل جدًا').nullable(),
  price: Yup.number().min(0, 'السعر يجب أن يكون >= 0').nullable(),
});
