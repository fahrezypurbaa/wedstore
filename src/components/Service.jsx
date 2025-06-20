import React from 'react';

const services = [
  {
    id: 'web',
    title: 'UNDANGAN WEBSITE',
    description: 'Semua informasi pernikahanmu akan tersampaikan hanya dengan satu link.',
    bgColor: 'bg-[#e9f0e3]',
    textColor: 'text-[#2d3c2d]',
  },
  {
    id: 'ig',
    title: 'FILTER INSTAGRAM',
    description: 'Semua informasi pernikahanmu akan tersampaikan hanya dengan satu link.',
    bgColor: 'bg-[#2d3c2d]',
    textColor: 'text-white',
  },
  {
    id: 'couple',
    title: 'ANIMASI COUPLES',
    description: 'Kalo tidak ada foto Prewedding kita bisa kasih foto Animasi',
    bgColor: 'bg-[#e9f0e3]',
    textColor: 'text-[#2d3c2d]',
  },
];

const Service = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#2d3c2d] mb-12">
        OUR SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
  <div key={service.id} className={`${service.bgColor} ${service.textColor} p-8 rounded-md shadow-md`}>
    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
    <p className="text-sm leading-relaxed">{service.description}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default Service;