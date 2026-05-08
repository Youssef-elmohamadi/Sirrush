"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ServicesHero = () => {
  const t = useTranslations("services_page.hero");

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('/sirrush-bg.png')" }}
      >
        <div className="absolute inset-0 bg-deep-navy/90 backdrop-blur-[1px]"></div>
      </div>


      <div className="container-lg relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase animate-fade-in-down">
          {t("title")}
        </h1>
        
        <div className="flex flex-col items-center gap-6">
          <p className="text-pure-white/80 max-w-2xl text-lg md:text-xl font-medium leading-relaxed italic animate-fade-in-up">
            {t("subtitle")}
          </p>
          
          <nav className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] mt-6 bg-white/10 px-8 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl">
            <Link href="/" className="hover:text-ant-gold transition-all duration-300">
              {t("breadcrumb_home")}
            </Link>
            <span className="text-ant-gold animate-pulse">/</span>
            <span className="text-pure-white/40">{t("breadcrumb_services")}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
