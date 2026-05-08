"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { 
  FiCode, FiLayout, FiMonitor, FiSmartphone, 
  FiShoppingCart, FiTrendingUp, FiFeather, FiBox, 
  FiUsers, FiSearch, FiEdit3, FiVideo, FiArrowRight, FiBarChart2
} from "react-icons/fi";

const ServicesList = () => {
  const t = useTranslations("services_page.list");

  const services = [
    { id: "software", icon: <FiCode /> },
    { id: "ui_ux", icon: <FiLayout /> },
    { id: "web", icon: <FiMonitor /> },
    { id: "mobile", icon: <FiSmartphone /> },
    { id: "ecommerce", icon: <FiShoppingCart /> },
    { id: "marketing", icon: <FiBarChart2 /> },
    { id: "design", icon: <FiFeather /> },
    { id: "branding", icon: <FiBox /> },
    { id: "media_buying", icon: <FiMonitor /> },
    { id: "social_media", icon: <FiUsers /> },
    { id: "seo", icon: <FiSearch /> },
    { id: "content", icon: <FiEdit3 /> }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <span className="text-soft-gray uppercase tracking-wider text-sm font-bold">
                {t("label")}
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight max-w-3xl leading-tight">
            {t.rich("title", {
              span: (chunks) => <span className="text-ant-gold">{chunks}</span>
            })}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-full min-h-[400px] bg-white border border-gray-100 rounded-[2.5rem] p-10 pt-20 text-center flex flex-col transition-all duration-500 hover:border-ant-gold/40 hover:shadow-[0_30px_70px_rgba(186,149,84,0.15)]"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-dark-navy rounded-[1.5rem] flex items-center justify-center text-4xl text-ant-gold border-[6px] border-white shadow-2xl transition-all duration-500 group-hover:bg-ant-gold group-hover:text-white group-hover:scale-110 group-hover:-rotate-12">
                {service.icon}
              </div>

              <div className="flex-grow space-y-6">
                <h3 className="text-xl font-black text-dark-navy tracking-tight leading-tight group-hover:text-ant-gold transition-colors duration-300">
                  {t(`items.${service.id}.title`)}
                </h3>

                <p className="text-soft-gray leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity line-clamp-4">
                  {t(`items.${service.id}.description`)}
                </p>
              </div>

              <button className="mt-10 flex items-center justify-center gap-3 mx-auto text-dark-navy font-black text-sm uppercase tracking-widest hover:text-ant-gold transition-all duration-300 group/btn">
                {t("show_more")} 
                <FiArrowRight className="text-lg transition-transform duration-300 group-hover/btn:translate-x-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
