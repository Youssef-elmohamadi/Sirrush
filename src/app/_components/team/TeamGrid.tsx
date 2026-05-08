"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import teamData from "@/data/team.json";

const TeamGrid = () => {
  const t = useTranslations("team_page");
  const locale = useLocale() as "en" | "ar";
  const members = teamData;

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
            <span className="text-soft-gray uppercase tracking-wider font-bold">
              {t("grid.label")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight leading-tight">
            {t("grid.title")}
          </h2>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16">
          {members.map((member: any, index: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group flex flex-col items-center text-center gap-4"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 border-2 border-gray-100 group-hover:border-ant-gold transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-50">
                  <Image
                    src={member.image.includes("team") ? "/expertise-team.png" : member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Purple Overlay like geexar screenshot */}
                  <div className="absolute inset-0 bg-deep-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-black text-dark-navy tracking-tight group-hover:text-ant-gold transition-colors duration-300">
                  {member.name[locale]}
                </h3>
                <p className="text-xs md:text-sm font-bold text-soft-gray uppercase tracking-wide leading-relaxed">
                  {member.role[locale]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
