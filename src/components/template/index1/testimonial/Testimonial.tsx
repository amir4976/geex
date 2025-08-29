"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import TestimonialCard from "@/components/module/index1/TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <div className="w-full  p-6 overflow-hidden ">
        <div className="mb-10">
          <p className="text-2xl">نظرات کاربران</p>
          <p className="text-gray-500">آنها در پرواز او موفق می شوند</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard/>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
