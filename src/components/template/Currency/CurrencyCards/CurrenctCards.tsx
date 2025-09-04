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
import { EthereumClassic, Bitcoin, Tether, BinanceCoin } from "iconsax-reactjs";


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
            <CurrencyStatusCard
              name="اتریوم"
              symbol="ETH"
              price={1350000}
              change={-20}
              seriesData={[30, 35, 60, 10, 35, 0, 38, 20, 100]}
              bgColor="#627eea"
              iconColor="#fff"
              IconComponent={EthereumClassic}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard
              name="بیت‌کوین"
              symbol="BTC"
              price={9000000}
              change={+5.2}
              seriesData={[50, 60, 70, 80, 90, 100, 95, 85, 90]}
              bgColor="#f7931a"
              iconColor="#fff"
              IconComponent={Bitcoin}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard
              name="تتر"
              symbol="USDT"
              price={30000}
              change={+1.1}
              seriesData={[20, 25, 30, 25, 28, 32, 30, 35, 40]}
              bgColor="#26a17b"
              iconColor="#fff"
              IconComponent={Tether}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CurrencyStatusCard
              name="بایننس کوین"
              symbol="BNB"
              price={400000}
              change={-3.7}
              seriesData={[40, 45, 50, 48, 52, 55, 53, 50, 60]}
              bgColor="#f3ba2f"
              iconColor="#fff"
              IconComponent={BinanceCoin}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CurrenctCards;
