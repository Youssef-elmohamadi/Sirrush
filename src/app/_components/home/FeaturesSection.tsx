"use client";
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
    title: "Listens carefully to your needs:",
    description:
      "Your needs are our priority. We understand that every project is unique, and we make sure to understand your needs and expectations carefully.",
  },
  {
    icon: <FiUserCheck />,
    title: "It shares step-by-step implementation with you:",
    description:
      "We make sure to involve you in all stages of the work, keeping you constantly informed of the progress of the work.",
  },
  {
    icon: <FiHeadphones />,
    title: "Provides technical support:",
    description:
      "We provide you with the necessary technical support after the project is completed, while ensuring the ease of use of the control panels and the security of your data.",
  },
  {
    icon: <FiBookOpen />,
    title: "It provides a training service on control panels:",
    description:
      "We offer you free training on how to use our control panels, to ensure you get the most out of our services.",
  },
  /* المميزات الجديدة */
  {
    icon: <FaRegLightbulb />,
    title: "Provides marketing consultations and electronic solutions:",
    description:
      "We provide you with marketing consultations and innovative electronic solutions that help you achieve your goals efficiently.",
  },
  {
    icon: <FiClock />,
    title: "Our commitment does not stop when the project is delivered:",
    description:
      "We keep communication channels open, so you can reach out to us at any time after work is done. We are always ready to provide assistance and support.",
  },
  {
    icon: <FiFileText />,
    title: "We respect contract terms, privacy, and delivery time:",
    description:
      "We abide by all contract terms, respect your privacy, and deliver the project on time.",
  },
  {
    icon: <FiCode />,
    title: "We use languages and methods that can be continuously developed:",
    description:
      "We use the latest technologies and programming languages, ensuring that your project remains compliant with the highest technical standards. We also ensure that it will withstand any future technological changes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-lg">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ant-gold opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-ant-gold shadow-[0_0_10px_rgba(225,213,184,0.8)]"></span>
            </span>
            <span className="text-soft-gray uppercase tracking-[0.2em] text-xs font-bold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-black text-night-navy tracking-tight">
            We excel in<span className="text-ant-gold">.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container - Navy to Gold on Hover */}
              <div className="mb-6 relative">
                <div className="text-5xl text-night-navy transition-all duration-500 group-hover:text-ant-gold group-hover:scale-110 group-hover:rotate-[8deg] relative z-10">
                  {item.icon}
                </div>
                {/* ظل خفي يظهر عند الهوفر */}
                <div className="absolute inset-0 bg-ant-gold/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 z-0"></div>
              </div>

              {/* Title - Navy with Gold underline on hover */}
              <h3 className="text-lg font-bold text-night-navy mb-4 leading-snug px-4 transition-colors duration-300 group-hover:text-ant-gold relative">
                {item.title}
              </h3>

              {/* Description - Soft Gray */}
              <p className="text-soft-gray text-sm leading-relaxed px-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>

              {/* خط ديكوري صغير يظهر تحت الكارد */}
              <div className="mt-6 w-0 h-[2px] bg-ant-gold transition-all duration-500 group-hover:w-12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
