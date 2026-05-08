"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutIntro = () => {
  const t = useTranslations("about.intro");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-lg">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-ant-gold rounded-full shadow-[0_0_10px_rgba(186,149,84,0.5)]"></span>
                <span className="text-soft-gray uppercase tracking-wider font-bold">
                  {t("label")}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-dark-navy leading-tight">
                {t.rich("title", {
                  span: (chunks) => <span className="text-ant-gold">{chunks}</span>
                })}
              </h2>

              <p className="text-soft-gray text-lg leading-relaxed text-justify">
                {t("description")}
              </p>

              <button className="px-10 py-4 bg-dark-navy text-ant-gold font-black rounded-2xl shadow-xl shadow-dark-navy/20 hover:bg-ant-gold hover:text-white transition-all duration-300 active:scale-95">
                {t("contact_us")}
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 border-2 border-ant-gold/20 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/expertise-team.png"
                  alt="Sirrush Office"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
