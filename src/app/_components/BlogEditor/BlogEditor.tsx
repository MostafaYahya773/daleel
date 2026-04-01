'use client';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function BlogEditor({ value, onChange }: BlogEditorProps) {
  return (
    <div className="border p-2 rounded h-[250px] bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
}
