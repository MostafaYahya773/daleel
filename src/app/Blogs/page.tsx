'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import HeroBlog from '../_components/HeroBlog/HeroBlog';
const BlogsCart = dynamic(() => import('../_components/BlogCart/BlogCart'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function Blogs() {
  return (
    <div className="flex flex-col gap-7">
      <HeroBlog />
      <BlogsCart />
    </div>
  );
}
