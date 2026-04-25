"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiLayers, FiUsers, FiUserCheck, FiAward } from "react-icons/fi";

const stats = [
  {
    id: 1,
    icon: <FiLayers />,
    number: 500,
    label: "Complete Projects",
  },
  {
    id: 2,
    icon: <FiUserCheck />,
    number: 400,
    label: "Happy Clients",
  },
  {
    id: 3,
    icon: <FiUsers />,
    number: 100,
    label: "Team Members",
  },
  {
    id: 4,
    icon: <FiAward />,
    number: 8,
    label: "Years of Experience",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ant-gold/5 blur-[120px] rounded-full -z-0"></div>

      <div className="container-lg relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center text-4xl text-dark-navy mb-8 transition-all duration-500 group-hover:bg-ant-gold group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_20px_40px_rgba(186,149,84,0.3)]">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-black text-dark-navy mb-3 tracking-tight">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} />
                ) : (
                  "0"
                )}
                <span className="text-ant-gold ml-1">+</span>
              </h3>

              {/* Label */}
              <p className="text-soft-gray uppercase text-xs font-black tracking-[0.2em] max-w-[150px] leading-relaxed group-hover:text-dark-navy transition-colors">
                {stat.label}
              </p>
              
              {/* Animated underline */}
              <div className="mt-6 w-0 h-1 bg-ant-gold transition-all duration-500 group-hover:w-10 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;