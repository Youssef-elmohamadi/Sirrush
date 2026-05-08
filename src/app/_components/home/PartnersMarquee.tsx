"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const partners = [
  { name: "Partner 1", logo: "/42.png" },
  { name: "Partner 2", logo: "/43.png" },
  { name: "Partner 3", logo: "/44.png" },
  { name: "Partner 4", logo: "/48.png" },
  { name: "Partner 5", logo: "/49.png" },
  { name: "Partner 6", logo: "/50.png" },
];

const PartnersMarquee = () => {
  const t = useTranslations("home.partners");
  const locale = useLocale();
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                {t("label")}
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            {t.rich("title", {
              span: (chunks) => <span className="text-ant-gold">{chunks}</span>,
            })}
          </p>
        </div>

        <div className="relative flex overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex flex-nowrap shrink-0 gap-16 md:gap-24 items-center"
            animate={{ x: locale === "ar" ? ["0%", "50%"] : ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-12 w-32 md:w-40 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
