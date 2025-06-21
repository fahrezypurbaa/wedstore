import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import af1 from "../assets/screen3.jpg";
import wed1 from "../assets/screen3.jpg";
import kh1 from "../assets/screen3.jpg";
import aq1 from "../assets/screen3.jpg";

const data = [
  { label: "Animasi Foto", image: af1 },
  { label: "Wedding", image: wed1 },
  { label: "Khitan", image: kh1 },
  { label: "Aqiqah & Birthday", image: aq1 },
];

export default function UndanganPreview() {
  return (
    <section className="w-full py-16 px-4 bg-white text-center">
      <h2 className="text-lg md:text-xl font-medium text-green-800 mb-10 leading-relaxed">
        Untuk melihat tampilan terbaik dan warna desain asli,<br />
        buka link undangan di browser atau chrome, dan atur dengan mode terang / mode asli
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="!w-[200px] sm:!w-[230px] flex-shrink-0">
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-[2.5rem] p-1 shadow-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="rounded-[2rem] w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-medium text-gray-800">
                {item.label}
              </h3>
              <button className="mt-2 bg-green-800 text-white text-sm px-5 py-1 rounded-full hover:bg-green-900 transition">
                👁 See Design
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
