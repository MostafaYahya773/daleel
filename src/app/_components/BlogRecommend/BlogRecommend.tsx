import React from 'react';
import { getLimitBlogs } from '../../../../lib/getLimitBlog';
import BlogCart from '../BlogCart/BlogCart';
import { Article } from '../../interfaces/index';
const BlogRecommend = async () => {
  const blogs: Article[] = await getLimitBlogs();

  return (
    <div className="flex flex-col gap-7 justify-center items-center">
      <h3 className="text-therd sm:text-[30px] text-[25px]  font-bold">
        مقالات ذات صلة
      </h3>
      <BlogCart articles={blogs} />
    </div>
  );
};

export default BlogRecommend;
