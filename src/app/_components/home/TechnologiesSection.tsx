"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaravel, FaCss3Alt } from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiMysql,
  SiFigma,
  SiWoocommerce,
  SiDart,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
  { name: "Dart", icon: <SiDart />, color: "#0175C2" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
];

const TechnologiesSection = () => {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
             <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
             <div className="relative">
                {/* Brush stroke effect */}
                <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
                <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                  Technologies
                </h2>
             </div>
          </div>
          <p className="text-soft-gray text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            We work with the best technologies that keep pace with the rapid
            development of the labor market.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative flex overflow-hidden py-12 mask-fade">
          <motion.div
            className="flex flex-nowrap shrink-0 gap-12 md:gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 group cursor-default transition-all duration-300"
              >
                <div 
                   className="text-5xl md:text-6xl text-soft-gray/40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                   style={{ color: `var(--tech-color, ${tech.color})` }}
                >
                   <div className="grayscale group-hover:grayscale-0 transition-all duration-500">
                    {tech.icon}
                   </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-soft-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
