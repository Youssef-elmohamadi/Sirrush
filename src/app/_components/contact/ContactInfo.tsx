"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";

const ContactInfo = () => {
  const t = useTranslations("contact_page.info");

  return (
    <section className="py-24 bg-white">
      <div className="container-lg">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 relative">
                <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
                <span className="text-soft-gray uppercase tracking-wider font-bold">
                  {t("label")}
                </span>
              </div>
              <h2 className="text-xl md:text-x3l font-black text-dark-navy tracking-tight leading-tight max-w-xl">
                {t("title")}
              </h2>
            </div>

            <div className="space-y-8">
              <a href={`mailto:sirrushsolutions@gmail.com`} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-dark-navy group-hover:border-ant-gold group-hover:bg-ant-gold/5 group-hover:text-ant-gold transition-all duration-300 shrink-0">
                  <FiMail className="text-2xl" />
                </div>
                <div className="pt-3">
                  <p className="text-lg font-bold text-dark-navy group-hover:text-ant-gold transition-colors">{t("email")}</p>
                </div>
              </a>

              <a href={`tel:015 078 39478.replace(/\s/g, "")}`} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-dark-navy group-hover:border-ant-gold group-hover:bg-ant-gold/5 group-hover:text-ant-gold transition-all duration-300 shrink-0">
                  <FiPhone className="text-2xl" />
                </div>
                <div className="pt-3">
                  <p className="text-lg font-bold text-dark-navy group-hover:text-ant-gold transition-colors" dir="ltr">015 078 39478</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-dark-navy group-hover:border-ant-gold group-hover:bg-ant-gold/5 group-hover:text-ant-gold transition-all duration-300 shrink-0">
                  <FiMapPin className="text-2xl" />
                </div>
                <div className="pt-3 max-w-xs">
                  <p className="font-bold text-soft-gray leading-relaxed group-hover:text-dark-navy transition-colors">{t("address")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Google Map */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60385018654!2d31.428522332617188!3d30.016629910325493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822de21532f4b%3A0x6a7844033f677841!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715177000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
