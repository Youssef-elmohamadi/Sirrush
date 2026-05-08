"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("home.contact");

  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="container-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
              {/* Brush stroke effect */}
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                {t("title")}
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FiPhone />,
              title: t("info.phone"),
              value: "015 078 39478",
              link: "tel:01507839478",
            },
            {
              icon: <FiMapPin />,
              title: t("info.address"),
              value: t("info.address_value"),
              link: "#",
            },
            {
              icon: <FiMail />,
              title: t("info.email"),
              value: "sirrushsolutions@gmail.com",
              link: "mailto:sirrushsolutions@gmail.com",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start ltr:sm:text-left rtl:sm:text-right gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >

              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-ant-gold/10 text-ant-gold text-xl group-hover:bg-ant-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold uppercase tracking-wide text-soft-gray mb-1">
                  {item.title}
                </span>
                <span className="text-dark-navy font-bold truncate sm:whitespace-normal">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
              />
              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
              />
            </div>
            <input
              type="tel"
              placeholder="015 078 39478"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
            />
            <textarea
              placeholder={t("form.message")}
              rows={5}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all resize-none"
            ></textarea>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-bold rounded-2xl shadow-xl shadow-ant-gold/20 hover:shadow-ant-gold/40 transition-all duration-300"
              >
                <span>{t("form.send")}</span>
                <FiSend className="text-xl" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

