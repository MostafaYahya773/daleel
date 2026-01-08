export interface CommentProps {
  name: string;
  rate: number;
  comment: string;
}

export interface Features {
  text: string;
  icon: any;
  description: string;
}

export interface SelectOptionProps {
  value: string;
  label: string;
  id?: number;
}

export interface Courseprops {
  id?: string;
  course_name: string;
  image_url: string;
  category: string;
  level?: string;
  description: string;
  skills: string;
  what_you_will_learn: string;
  price: number;
  slug?: string;
  reviews_count?: number;
  students_count?: number;
}

export interface Lessonprops {
  id?: number;
  course_id: string;
  title: string;
  description: string;
  youtube_url: string;
  is_free: boolean;
  lesson_img: string;
  updated_at: string;
}
export interface FormLoginFields {
  email: string;
  password: string;
}

export interface FormSignUpFields {
  full_name: string;
  email: string;
  role?: 'user' | 'admin';
  sub?: string;
  password?: string;
  gender: string;
  confirm_password?: string;
  date_of_birth: string;
}

export interface UserProps {
  id?: string;
  email: string;
  full_name: string;
  gender: string;
  role?: 'user' | 'admin';
  avatar_url?: string | null;
  date_of_birth: string;
  phone_verified?: boolean;
  sub?: string;
  verified?: boolean;
  verified_at?: string | null;
  created_at?: string;
  email_verified?: string | null;
  updated_at?: string;
}

export interface User {
  date_of_birth: string; // "2001-01-02"
  email: string;
  email_verified: boolean;
  full_name: string;
  gender: 'male' | 'female';
  phone_verified: boolean;
  role: 'user' | 'admin';
  sub: string; // user id
}

export interface ContactUsProps {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface StudentProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface UserInfoProps {
  name: string;
  email: string;
}
