import React from 'react';
import { FaMapMarkerAlt, FaGift, FaMusic, FaImage, FaHeart, FaUser, FaRegComments, FaTv } from 'react-icons/fa';
import bg from '../assets/bg-hero.jpg';

const features = [
  { id: 'receiver', label: 'NAMA PENERIMA UNDANGAN', icon: <FaUser size={28} /> },
  { id: 'rsvp', label: 'RSVP/ KONFIRMASI KEHADIRAN', icon: <FaRegComments size={28} /> },
  { id: 'music', label: 'MUSIC BACKSOUND', icon: <FaMusic size={28} /> },
  { id: 'location', label: 'PETA LOKASI', icon: <FaMapMarkerAlt size={28} /> },
  { id: 'gift', label: 'SEND GIFT', icon: <FaGift size={28} /> },
  { id: 'gallery', label: 'GALLERY PHOTO & VIDEO', icon: <FaImage size={28} /> },
  { id: 'lovestory', label: 'LOVE STORY', icon: <FaHeart size={28} /> },
];

const FeaturesSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-4"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h2 className="text-center text-3xl font-bold mb-12">OUR FEATURES</h2>

      <div className="relative max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
       
        {/* Fitur sekitar HP */}
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 px-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center w-28 md:w-32"
            >
              <div className="mb-2">{feature.icon}</div>
              <p className="text-sm font-medium leading-tight">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;