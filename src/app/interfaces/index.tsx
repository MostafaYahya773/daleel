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
