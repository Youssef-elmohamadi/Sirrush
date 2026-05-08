"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, 
  SiReact, SiFramer, SiFlutter, SiFirebase, SiDart,
  SiFigma, SiWordpress, SiElementor, SiPhp, SiTypescript, SiPostgresql, SiStrapi
} from "react-icons/si";
import { FiImage, FiPenTool, FiLayers } from "react-icons/fi";
import projectsData from "@/data/projects.json";

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

const ProjectsContainer = () => {
  const t = useTranslations("projects_page");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = Object.keys(t.raw("filters.categories"));

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter((p: any) => p.category === activeCategory);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container-lg">
        {/* Header & Filter */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
            <span className="text-soft-gray uppercase tracking-wider text-sm font-bold">
              {t("filters.label")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight mb-12">
            {t("filters.title")}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-dark-navy text-ant-gold shadow-xl shadow-dark-navy/20" 
                    : "bg-gray-100 text-soft-gray hover:bg-gray-200"
                }`}
              >
                {t(`filters.categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right gap-8"
              >
                {/* Project Image Mockup */}
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Details */}
                <div className="space-y-4 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <h3 className="text-2xl font-black text-dark-navy tracking-tight group-hover:text-ant-gold transition-colors">
                      {project.title[locale]}
                    </h3>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      {project.technologies.map((tech: string) => (
                        <div key={tech} className="text-2xl text-soft-gray/60 hover:text-ant-gold transition-colors" title={tech}>
                          {techIcons[tech] || null}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-soft-gray leading-relaxed font-medium max-w-2xl">
                    {project.description[locale]}
                  </p>

                  <button className="px-10 py-4 border-2 border-dark-navy text-dark-navy font-bold rounded-2xl hover:bg-dark-navy hover:text-ant-gold transition-all duration-300 uppercase tracking-wide text-sm mt-4">
                    {t("project_card.view_btn")}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
