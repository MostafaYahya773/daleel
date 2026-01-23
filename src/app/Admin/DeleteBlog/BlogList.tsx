'use client';
import React, { useState } from 'react';
import { BlogForms } from '../../interfaces';
import BlogDropList from '../_Components/BlogDrobList/BlogDropList';
import ConfirmAlert from '../_Components/ConfirmAlert/ConfirmAlert';

const BlogsList = React.memo(({ blogs }: { blogs: BlogForms[] }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [blogName, setBlogName] = useState<string>('');
  const [blogId, setBlogId] = useState<string>('');
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="text-[20px] mx-2 text-therd">اختر المقالة المراد حذفها</h1>
      <BlogDropList
        selectOptions={blogs}
        onselect={(BlogID, name) => {
          setBlogId(BlogID);
          setBlogName(name);
          setConfirmation(true);
        }}
      />
      <div className={`${confirmation ? 'block' : 'hidden'}`}>
        <ConfirmAlert
          setConfirmation={setConfirmation}
          blogId={blogId}
          blogName={blogName}
        />
      </div>
    </div>
  );
});
export default BlogsList;
