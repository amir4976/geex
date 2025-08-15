"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import CurrencyStatusCard from "../../../module/Currency/CurrencyStatusCard";

const CurrenctCards = () => {
  return (
    <>
      <div className="w-full   overflow-hidden ">
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
            <CurrencyStatusCard />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CurrenctCards;
