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
}

export interface paramsServerProps {
  params: Promise<{ slug: string; courseId: string }>;
}
