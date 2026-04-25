"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const projects = [
  {
    id: 1,
    name: "Aljoodmed",
    tagline: "Medical Management System",
    description: "Aljoodmed is a healthcare-focused digital project created to present medical services in a clear, professional, and user-friendly way. The project helps strengthen online presence and build greater trust with patients and visitors.",
    technologies: ["/react.png", "/dotnet.png", "/tailwind.png"],
    mainImage: "/proj.png",
    secondaryImage: "/proj.png",
    thirdImage: "/proj.png",
  },
  {
    id: 2,
    name: "Aljoodmed",
    tagline: "Medical Management System",
    description: "Aljoodmed is a healthcare-focused digital project created to present medical services in a clear, professional, and user-friendly way. The project helps strengthen online presence and build greater trust with patients and visitors.",
    technologies: ["/react.png", "/dotnet.png", "/tailwind.png"],
    mainImage: "/proj.png",
    secondaryImage: "/proj.png",
    thirdImage: "/proj.png",
  },
];

const ProjectsSlider = () => {
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
              <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight">
                Featured Projects
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg max-w-2xl font-medium">
             Discover how we help our clients achieve digital success through innovative design and robust technology.
          </p>
        </div>

        <div className="relative px-4 md:px-16">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".project-next",
              prevEl: ".project-prev",
            }}
            autoplay={{ delay: 7000 }}
            className="pb-10"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-10 px-4">
                  
                  {/* Left Side: Mockups */}
                  <div className="relative h-[450px] md:h-[600px] flex items-center justify-center group/mockup">
                    {/* Main Phone (Center) */}
                    <div className="relative z-20 w-48 md:w-64 aspect-[9/19] bg-dark-navy rounded-[3rem] border-[8px] border-dark-navy shadow-2xl overflow-hidden transform translate-y-4 transition-transform duration-700 group-hover/mockup:scale-105">
                      <div className="w-full h-full bg-gray-100">
                         <Image src={project.mainImage} alt={project.name} fill className="object-cover" />
                      </div>
                    </div>

                    {/* Left Phone */}
                    <div className="absolute z-10 left-4 md:left-12 w-40 md:w-56 aspect-[9/19] bg-dark-navy rounded-[2.5rem] border-[6px] border-dark-navy shadow-xl overflow-hidden opacity-40 -rotate-12 translate-x-8 transition-all duration-700 group-hover/mockup:opacity-100 group-hover/mockup:rotate-[-6deg] group-hover/mockup:translate-x-0">
                       <div className="w-full h-full bg-gray-100">
                         <Image src={project.secondaryImage} alt={project.name} fill className="object-cover" />
                      </div>
                    </div>

                    {/* Right Phone */}
                    <div className="absolute z-10 right-4 md:right-12 w-40 md:w-56 aspect-[9/19] bg-dark-navy rounded-[2.5rem] border-[6px] border-dark-navy shadow-xl overflow-hidden opacity-40 rotate-12 -translate-x-8 transition-all duration-700 group-hover/mockup:opacity-100 group-hover/mockup:rotate-[6deg] group-hover/mockup:translate-x-0">
                       <div className="w-full h-full bg-gray-100">
                         <Image src={project.thirdImage} alt={project.name} fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Project Details */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h3 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-4xl md:text-6xl font-black text-dark-navy mb-4 tracking-tighter"
                    >
                      {project.name}
                    </motion.h3>
                    <div className="flex items-center gap-2 mb-8">
                      <span className="w-8 h-px bg-ant-gold"></span>
                      <p className="text-ant-gold font-bold tracking-widest uppercase text-xs italic">
                        Built with Excellence
                      </p>
                    </div>

                    <p className="text-soft-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center p-3 border border-gray-100 hover:border-ant-gold/30 hover:scale-110 transition-all duration-300">
                          <Image src={tech} alt="tech icon" width={30} height={30} className="object-contain" />
                        </div>
                      ))}
                    </div>

                    <button className="group relative px-10 py-4 bg-dark-navy text-white font-black rounded-2xl shadow-xl shadow-dark-navy/20 flex items-center gap-3 transition-all hover:bg-ant-gold hover:text-white active:scale-95">
                      View Full Project 
                      <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <button className="project-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-2xl shadow-xl transition-all hover:bg-dark-navy hover:text-white cursor-pointer">
            <FiChevronLeft />
          </button>
          <button className="project-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white border border-gray-100 text-dark-navy flex items-center justify-center text-2xl shadow-xl transition-all hover:bg-dark-navy hover:text-white cursor-pointer">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;