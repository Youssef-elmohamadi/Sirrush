"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutCulture = () => {
  const t = useTranslations("about.culture");

  return (
    <section className="py-24 bg-gray-50/30 overflow-hidden">
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

              <p className="text-soft-gray text-lg md:text-xl leading-relaxed text-justify font-medium">
                {t("description")}
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <span className="block text-4xl font-black text-ant-gold mb-2">100+</span>
                  <span className="text-sm font-bold uppercase tracking-wide text-soft-gray">Projects Completed</span>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <span className="block text-4xl font-black text-dark-navy mb-2">50+</span>
                  <span className="text-sm font-bold uppercase tracking-wide text-soft-gray">Happy Clients</span>
                </div>
              </div>
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
              <div className="absolute -inset-4 border-2 border-ant-gold/10 rounded-[2.5rem] -z-10 translate-x-4 -translate-y-4"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/about2.jpg"
                  alt="Sirrush Culture"
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

export default AboutCulture;
