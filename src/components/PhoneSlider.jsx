import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import screen1 from "../assets/screen1.jpg";
import screen2 from "../assets/screen2.jpg";
import screen3 from "../assets/screen3.jpg";

const images = [screen1, screen2, screen3];

export default function PhoneSlider() {
  return (
    <div className="relative w-[260px] h-[540px] sm:w-[300px] sm:h-[600px] bg-[#0f0f0f] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-black">
      {/* Kamera & Notch */}
      <div className="absolute top-0 left-0 w-full h-[30px] bg-[#e6e6e6] z-20 rounded-t-[2.5rem] flex justify-center items-start pt-1">
        <div className="w-[60px] h-[6px] bg-gray-600 rounded-full" />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full z-10"
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`slide`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Panah Navigasi */}
      <div className="swiper-button-prev absolute top-1/2 left-1 -translate-y-1/2 z-30 w-6 h-6 bg-white/70 hover:bg-white text-black rounded-full flex items-center justify-center cursor-pointer"></div>
      <div className="swiper-button-next absolute top-1/2 right-1 -translate-y-1/2 z-30 w-6 h-6 bg-white/70 hover:bg-white text-black rounded-full flex items-center justify-center cursor-pointer"></div>

      {/* Bagian bawah HP */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[#e6e6e6] z-20 rounded-b-[2.5rem] shadow-inner" />
    </div>
  );
}
