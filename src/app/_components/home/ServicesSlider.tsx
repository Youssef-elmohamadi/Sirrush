"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FiCode, FiLayout, FiMonitor, FiSmartphone,
  FiChevronLeft, FiChevronRight, FiArrowRight
} from "react-icons/fi";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: <FiCode />,
    title: "Software Development",
    desc: "Our software development ensures you have smart and secure solutions that meet your company’s needs, while improving performance.",
  },
  {
    icon: <FiLayout />,
    title: "UI & UX Development",
    desc: "We develop user experiences and interfaces that make it easy for your customers to interact with your products in the most convenient way.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Development",
    desc: "We provide professional and fast website development solutions that help improve user experience and enhance your online presence.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Development",
    desc: "We develop mobile applications that provide high performance and a seamless user experience, meeting the needs of customers.",
  },
  {
    icon: <FiCode />,
    title: "Custom Solutions",
    desc: "Tailored digital products designed specifically to solve your unique business challenges with cutting-edge technology.",
  },
];

const ServicesSlider = () => {
  const displayServices = [...services, ...services];

  return (
    <section className="py-24 container-lg bg-white relative overflow-hidden">
      <div className=" relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-ant-gold shadow-[0_0_10px_rgba(186,149,84,0.5)]"></span>
            <span className="text-soft-gray uppercase tracking-[0.3em] text-xs font-bold">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-deep-navy tracking-tight">
            The most important services in <span className="text-ant-gold uppercase">Sirrush</span>
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={false}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16 !overflow-visible"
          >
            {displayServices.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group relative mt-10 h-full min-h-[350px] bg-pure-white border border-soft-gray/20 rounded-[30px] p-8 pt-16 text-center flex flex-col transition-all duration-500 hover:border-ant-gold hover:shadow-2xl hover:shadow-ant-gold/10">

                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-deep-navy rounded-full flex items-center justify-center text-3xl text-ant-gold border-4 border-pure-white transition-all duration-500 group-hover:bg-ant-gold group-hover:text-deep-navy group-hover:scale-110 shadow-lg">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-deep-navy mb-4 group-hover:text-ant-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-soft-gray text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                      {service.desc}
                    </p>
                  </div>

                  {/* Button Area */}
                  <button className="mt-auto flex items-center justify-center gap-2 mx-auto text-deep-navy font-bold text-sm hover:text-ant-gold transition-colors duration-300">
                    Show More <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-deep-navy text-pure-white flex items-center justify-center text-2xl transition-all hover:bg-ant-gold hover:text-deep-navy shadow-xl cursor-pointer">
            <FiChevronLeft />
          </button>
          <button className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-deep-navy text-pure-white flex items-center justify-center text-2xl transition-all hover:bg-ant-gold hover:text-deep-navy shadow-xl cursor-pointer">
            <FiChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSlider;