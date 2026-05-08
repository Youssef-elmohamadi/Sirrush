"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const t = useTranslations("services_page.process");

  const steps = t.raw("steps");

  return (
    <section className="py-32 bg-gray-50/50 overflow-hidden">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
            <span className="text-soft-gray uppercase tracking-wider font-bold">
              {t("label")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex items-center gap-8 p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:border-ant-gold/20"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-dark-navy text-ant-gold text-2xl font-black shadow-lg group-hover:bg-ant-gold group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                {index + 1}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black text-dark-navy tracking-tight group-hover:text-ant-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Button */}
        <div className="mt-24 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-black rounded-full shadow-2xl shadow-ant-gold/30 hover:shadow-ant-gold/50 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            {useTranslations("services_page")("order_now")}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
