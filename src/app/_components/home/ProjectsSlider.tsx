"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, 
  SiReact, SiFramer, SiFlutter, SiFirebase, SiDart,
  SiFigma, SiWordpress, SiElementor, SiPhp, SiTypescript, SiPostgresql, SiStrapi
} from "react-icons/si";
import { FiImage, FiPenTool, FiLayers } from "react-icons/fi";

const techIcons: any = {
  nextjs: <SiNextdotjs />,
  tailwind: <SiTailwindcss />,
  nodejs: <SiNodedotjs />,
  mongodb: <SiMongodb />,
  react: <SiReact />,
  framer: <SiFramer />,
  flutter: <SiFlutter />,
  firebase: <SiFirebase />,
  dart: <SiDart />,
  figma: <SiFigma />,
  photoshop: <FiImage />,
  illustrator: <FiPenTool />,
  aftereffects: <FiLayers />,
  wordpress: <SiWordpress />,
  elementor: <SiElementor />,
  php: <SiPhp />,
  typescript: <SiTypescript />,
  postgres: <SiPostgresql />,
  strapi: <SiStrapi />
};

import "swiper/css";
import "swiper/css/navigation";

import projectsData from "@/data/projects.json";

const ProjectsSlider = () => {
  const t = useTranslations("home.projects");
  const p = useTranslations("projects_page");
  const locale = useLocale() as "en" | "ar";

  // Use the first 4 projects for the slider
  const projects = projectsData.slice(0, 4);


  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ant-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-0"></div>

      <div className="container-lg relative z-10">
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

        <div className="relative px-4 md:px-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            dir={locale === "ar" ? "rtl" : "ltr"}
            key={locale}

            navigation={{
              nextEl: ".project-next",
              prevEl: ".project-prev",
            }}
            autoplay={{ delay: 7000 }}
            className="pb-10"
          >
            {projects.map((project: any) => (
              <SwiperSlide key={project.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-10 px-4">
                  
                  {/* Project Image */}
                  <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video rounded-[2rem] overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={project.image || "/proj.png"}
                      alt={project.title[locale]}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Right Side: Project Details */}
                  <div className="flex flex-col items-center lg:items-start ltr:lg:text-left rtl:lg:text-right">

                    <motion.h3 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-xl md:text-3xl font-black text-dark-navy mb-4 tracking-tighter"
                    >
                      {project.title[locale]}
                    </motion.h3>
                    <div className="flex items-center gap-2 mb-8">
                      <span className="w-8 h-px bg-ant-gold"></span>
                      <p className="text-ant-gold font-bold tracking-wide uppercase text-sm italic">
                        {p(`filters.categories.${project.category}`) || t("label")}
                      </p>
                    </div>

                    <p className="text-soft-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                      {project.description[locale]}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
                      {project.technologies?.map((tech: string, idx: number) => (
                        <div key={idx} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center p-3 border border-gray-100 hover:border-ant-gold/30 hover:scale-110 transition-all duration-300 text-2xl text-soft-gray hover:text-ant-gold">
                          {techIcons[tech] || null}
                        </div>
                      ))}
                    </div>

                    <button className="group relative px-10 py-4 bg-dark-navy text-white font-black rounded-2xl shadow-xl shadow-dark-navy/20 flex items-center gap-3 transition-all hover:bg-ant-gold hover:text-white active:scale-95">
                      {t("view_full")}
                      <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <button className="project-prev absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-2xl shadow-xl transition-all hover:bg-dark-navy hover:text-white cursor-pointer">
            {locale === "ar" ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
          <button className="project-next absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-2xl shadow-xl transition-all hover:bg-dark-navy hover:text-white cursor-pointer">
            {locale === "ar" ? <FiChevronLeft /> : <FiChevronRight />}
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;