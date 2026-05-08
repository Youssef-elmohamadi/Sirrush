"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import {
  FiSmile,
  FiUserCheck,
  FiHeadphones,
  FiBookOpen,
  FiClock,
  FiFileText,
  FiCode,
} from "react-icons/fi";
import { useTranslations } from "next-intl";

const FeaturesSection = () => {
  const t = useTranslations("home.features");

  const features = [
    {
      icon: <FiSmile />,
      title: t("items.client_centric.title"),
      description: t("items.client_centric.description"),
    },
    {
      icon: <FiUserCheck />,
      title: t("items.transparent.title"),
      description: t("items.transparent.description"),
    },
    {
      icon: <FiHeadphones />,
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
    {
      icon: <FiBookOpen />,
      title: t("items.training.title"),
      description: t("items.training.description"),
    },
    {
      icon: <FaRegLightbulb />,
      title: t("items.consulting.title"),
      description: t("items.consulting.description"),
    },
    {
      icon: <FiClock />,
      title: t("items.commitment.title"),
      description: t("items.commitment.description"),
    },
    {
      icon: <FiFileText />,
      title: t("items.reliability.title"),
      description: t("items.reliability.description"),
    },
    {
      icon: <FiCode />,
      title: t("items.technology.title"),
      description: t("items.technology.description"),
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-ant-gold/30 hover:shadow-[0_20px_50px_rgba(186,149,84,0.1)] transition-all duration-500 group cursor-default"
            >
              <div className="text-4xl text-dark-navy mb-6 group-hover:text-ant-gold group-hover:scale-110 transition-all duration-500 ease-out">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-dark-navy mb-4 leading-tight group-hover:text-ant-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                {item.description}
              </p>
              
              <div className="mt-8 w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-ant-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

