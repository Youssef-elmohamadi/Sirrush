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

const features = [
  {
    icon: <FiSmile />,
    title: "Client-Centric Approach",
    description: "Your needs are our priority. We understand that every project is unique and tailor our solutions accordingly.",
  },
  {
    icon: <FiUserCheck />,
    title: "Transparent Process",
    description: "We involve you in every stage, keeping you constantly informed of the progress through transparent communication.",
  },
  {
    icon: <FiHeadphones />,
    title: "Continuous Support",
    description: "We provide comprehensive technical support after delivery, ensuring ease of use and maximum security.",
  },
  {
    icon: <FiBookOpen />,
    title: "Empowerment & Training",
    description: "We offer free training on our platforms to ensure you get the most out of our digital services.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Strategic Consulting",
    description: "Our marketing and electronic consultations help you achieve your business goals efficiently and effectively.",
  },
  {
    icon: <FiClock />,
    title: "Long-term Commitment",
    description: "Our relationship doesn't end at delivery. We're always ready to assist and support your future growth.",
  },
  {
    icon: <FiFileText />,
    title: "Reliability & Trust",
    description: "We respect contract terms, prioritize your privacy, and guarantee on-time delivery for every project.",
  },
  {
    icon: <FiCode />,
    title: "Modern Technologies",
    description: "We use the latest scalable languages and methods, ensuring your project stays future-proof and robust.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)] animate-pulse"></span>
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                Why Choose Us
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg max-w-2xl font-medium">
             We excel in providing high-quality digital solutions that set your business apart from the competition.
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
              <p className="text-soft-gray text-sm leading-relaxed opacity-80">
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
