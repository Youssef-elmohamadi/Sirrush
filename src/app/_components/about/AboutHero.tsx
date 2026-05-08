"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const AboutHero = () => {
  const t = useTranslations("about.hero");

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('/sirrush-bg.png')" }}
      >
        <div className="absolute inset-0 bg-deep-navy/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="container-lg relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase animate-fade-in">
          {t("title")}
        </h1>

        <div className="flex flex-col items-center gap-4">
          <p className="text-pure-white/80 max-w-2xl text-lg md:text-xl font-medium">
            {t("subtitle")}
          </p>

          <nav className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest mt-6 bg-white/5 px-8 py-3 rounded-full backdrop-blur-xl border border-white/10">
            <Link href="/" className="hover:text-ant-gold transition-colors">
              {t("breadcrumb_home")}
            </Link>
            <span className="text-ant-gold opacity-80">/</span>
            <span className="text-pure-white/60">{t("breadcrumb_about")}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
