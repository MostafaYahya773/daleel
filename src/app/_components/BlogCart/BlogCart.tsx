'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { formatMessageDate } from '../../../../lib/formatMessageDate';
import { BookAlert } from 'lucide-react';
interface Article {
  author_id: string;
  content: string;
  id: string;
  image_url: string;
  reading_minutes: number;
  title: string;
  created_at: string;
  updated_at: string;
}

const BlogCart = React.memo(({ articles }: { articles: Article[] }) => {
  const isPriority = (index: number) => index < 3;
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="min-h-screen">
      {inView && (
        <div
          id="blog"
          className="max-w-[1200px] mx-auto py-5 flex flex-col gap-10"
        >
          <h2 className="lg:text-[30px] md:text-[25px] text-[20px] text-center mb-5 pb-3 border-b-2 border-therd w-fit mx-auto">
            احدث مقالات <span className="text-therd">دليل</span>
          </h2>

          <Link
            href="/blog/id"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {articles.length === 0 ?
              <div className="flex flex-col justify-center items-center gap-5 w-full col-span-3 h-[50vh] md:h-[70vh]">
                <BookAlert className="w-32 h-32 text-gray-200" />
                <p className="text-therd text-[25px] md:text-[40px] opacity-50">
                  لا يوجد مقالات
                </p>
              </div>
            : articles.map((article, index) => (
                <div
                  key={article.id}
                  className="group bg-white rounded-2xl border-2 shadow-md border-gray-200 overflow-hidden duration-300 hover:scale-[103%]"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={article?.image_url || '/hero.png'}
                      alt={article?.title}
                      fill
                      priority={isPriority(index)}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="md:text-[15px] font-bold text-fourth mb-4 group-hover:text-therd transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-5">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">
                          {article.reading_minutes === 1 ?
                            'دقيقة واحدة'
                          : `${article.reading_minutes} دقائق`}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatMessageDate(article.created_at)}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed line-clamp-2 mb-6">
                      {article.content}
                    </p>
                  </div>
                </div>
              ))
            }
          </Link>
        </div>
      )}
    </div>
  );
});

export default BlogCart;
