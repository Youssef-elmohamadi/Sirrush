"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiMessageCircle } from "react-icons/fi";

const AboutPillars = () => {
  const t = useTranslations("about.pillars");

  const pillars = [
    {
      id: "vision",
      icon: <FiEye />,
      title: t("vision.title"),
      description: t("vision.description"),
      color: "from-dark-navy/20 to-dark-navy/10",
      iconColor: "text-dark-navy",
      borderColor: "border-ant-gold/10"
    },
    {
      id: "mission",
      icon: <FiTarget />,
      title: t("mission.title"),
      description: t("mission.description"),
      color: "from-dark-navy/20 to-dark-navy/10",
      iconColor: "text-dark-navy",
      borderColor: "border-ant-gold/10"
    },
    {
      id: "message",
      icon: <FiMessageCircle />,
      title: t("message.title"),
      description: t("message.description"),
      color: "from-dark-navy/20 to-dark-navy/10",
      iconColor: "text-dark-navy",
      borderColor: "border-ant-gold/10"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative p-8 md:p-12 bg-white border ${pillar.borderColor} rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden h-full flex flex-col items-center text-center`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-3xl bg-gradient-to-br ${pillar.color} ${pillar.iconColor} text-3xl md:text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {pillar.icon}
              </div>
              
              <h3 className="text-2xl font-black text-dark-navy mb-6 tracking-tight group-hover:text-ant-gold transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-soft-gray leading-relaxed font-medium">
                {pillar.description}
              </p>
              
              <div className="mt-8 w-12 h-1.5 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-ant-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;
