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

export interface CourseProps {
  id?: number;
  course_name: string;
  image_url?: string;
  category?: string;
  level?: string;
  description?: string;
  skills?: string;
  what_you_will_learn?: string;
  instructor_name?: string;
  instructor_photo_url?: string;
  instructor_bio?: string;
  price?: string;
  students_count?: number;
  reviews_count?: number;
}
