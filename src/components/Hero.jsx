import { Eye, MessageCircle } from "lucide-react";
import leafBg from "../assets/bg-hero.jpg";
import PhoneSlider from "./PhoneSlider";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${leafBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full">
        {/* Text Area */}
        <div className="text-white md:w-1/2 space-y-6 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Share your moments with us !
          </h1>
          <p className="text-lg text-gray-200">
            Sebarkan kabar bahagiamu dengan mudah. Kirim link undangan pada
            teman, keluarga dan sahabat dekat.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="flex items-center gap-2 px-6 py-2 border rounded-full font-semibold text-white border-white hover:bg-white hover:text-black transition">
              <MessageCircle className="w-5 h-5" />
              Tanya Harga
            </button>
            <button className="flex items-center gap-2 px-6 py-2 border rounded-full font-semibold text-white border-white hover:bg-white hover:text-black transition">
              <Eye className="w-5 h-5" />
              Lihat Demo
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 flex justify-center relative">
          <PhoneSlider />
        </div>
      </div>
    </section>
  );
}