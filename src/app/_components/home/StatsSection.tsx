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
    label: "Complete Projects.",
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
    label: "Team",
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container-lg">
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-ant-gold flex items-center justify-center text-3xl text-dark-navy mb-6 transition-all duration-300 group-hover:bg-ant-gold group-hover:text-white group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-dark-navy mb-2">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} />
                ) : (
                  "0"
                )}
                <span className="text-ant-gold ml-1">+</span>
              </h3>
              <p className="text-dark-navy max-w-[180px]  leading-snug uppercase text-sm font-bold tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;