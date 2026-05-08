"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const AboutBenefits = () => {
  const t = useTranslations("about.benefits");

  const benefits = [
    { title: t("partner.title"), desc: t("partner.description") },
    { title: t("solutions.title"), desc: t("solutions.description") },
    { title: t("results.title"), desc: t("results.description") }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-lg">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          {/* Right Content */}
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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

              <div className="space-y-12 mt-12">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-2xl bg-ant-gold/10 text-ant-gold text-2xl group-hover:bg-ant-gold group-hover:text-white transition-all duration-300">
                      <FiCheckCircle />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-dark-navy tracking-tight group-hover:text-ant-gold transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-soft-gray leading-relaxed font-medium text-sm md:text-base">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 border-2 border-ant-gold/20 rounded-[2.5rem] -z-10 -translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/about3.jpg"
                  alt="Sirrush Solutions"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBenefits;
