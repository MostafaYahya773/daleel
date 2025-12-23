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
  id?: number;
  course_name: string;
  image_url: string;
  category: string;
  level?: string;
  description: string;
  skills: string;
  what_you_will_learn: string;
  price: number;
  reviews_count?: number;
  students_count?: number;
}

export interface Lessonprops {
  id?: number;
  course_id: number;
  title: string;
  description: string;
  youtube_url: string;
  is_free: boolean;
  lesson_img: string;
}
