'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import StarRating from '../StarRating/StarRating';
import { CommentProps } from '../../interfaces/index';
import { useInView } from 'react-intersection-observer';

const CommentsSwiper = ({
  allComments: allComments,
}: {
  allComments: CommentProps[];
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="w-full">
      {inView && (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          observer={true}
          observeParents={true}
          watchOverflow={true}
          speed={1000}
          pagination={{
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {allComments.map((comment, index) => (
            <SwiperSlide key={index}>
              <div className="p-3 shadow-lg h-[160px] min-w-0 bg-primary border rounded-lg flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 mt-1 rounded-full flex justify-center items-center bg-therd text-white">
                    {comment.name.slice(0, 1)}
                  </span>
                  <h2 className="text-[20px] font-bold text-therd">
                    {comment.name}
                  </h2>
                </div>
                <div className="flex">
                  <StarRating rate={comment.rate} />
                </div>
                <p className="text-fourth">{comment.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CommentsSwiper;
