"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FiCode, FiLayout, FiMonitor, FiSmartphone,
  FiChevronLeft, FiChevronRight, FiArrowRight
} from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";

const ServicesSlider = () => {
  const t = useTranslations("home.services");
  const locale = useLocale();


  const services = [
    {
      icon: <FiCode />,
      title: t("items.software.title"),
      desc: t("items.software.description"),
    },
    {
      icon: <FiLayout />,
      title: t("items.ui_ux.title"),
      desc: t("items.ui_ux.description"),
    },
    {
      icon: <FiMonitor />,
      title: t("items.web.title"),
      desc: t("items.web.description"),
    },
    {
      icon: <FiSmartphone />,
      title: t("items.mobile.title"),
      desc: t("items.mobile.description"),
    },
    {
      icon: <FiCode />,
      title: t("items.custom.title"),
      desc: t("items.custom.description"),
    },
  ];

  const displayServices = [...services, ...services];

  return (
    <section className="py-24 container-lg bg-white relative overflow-hidden">
      <div className=" relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                {t.rich("title", {
                  span: (chunks) => <span className="text-ant-gold uppercase">{chunks}</span>
                })}
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
             {t("subtitle")}
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={false}
            dir={locale === "ar" ? "rtl" : "ltr"}
            key={locale} // Force re-render on locale change to update swiper internals

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
                <div className="group relative mt-12 h-full min-h-[350px] bg-white border border-gray-100 rounded-[2.5rem] p-8 pt-16 text-center flex flex-col transition-all duration-500 hover:border-ant-gold/30 hover:shadow-[0_20px_50px_rgba(186,149,84,0.1)]">

                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-dark-navy rounded-[1.25rem] flex items-center justify-center text-3xl text-ant-gold border-4 border-white transition-all duration-500 group-hover:bg-ant-gold group-hover:text-white group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-dark-navy mb-4 group-hover:text-ant-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-soft-gray text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                      {service.desc}
                    </p>
                  </div>

                  <button className="mt-auto flex items-center justify-center gap-2 mx-auto text-dark-navy font-bold text-sm hover:text-ant-gold transition-colors duration-300 group/btn">
                    {t("show_more")} <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="button-prev absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-xl transition-all hover:bg-dark-navy hover:text-white hover:shadow-xl hover:shadow-dark-navy/20 cursor-pointer">
            {locale === "ar" ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
          <button className="button-next absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-xl transition-all hover:bg-dark-navy hover:text-white hover:shadow-xl hover:shadow-dark-navy/20 cursor-pointer">
            {locale === "ar" ? <FiChevronLeft /> : <FiChevronRight />}
          </button>

        </div>

      </div>
    </section>
  );
};

export default ServicesSlider;