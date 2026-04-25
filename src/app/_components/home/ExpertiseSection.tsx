"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExpertiseSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-lg">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
                <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                  Our Markets and Expertise
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-dark-navy leading-tight">
                We have worked with a wide range of sectors.
              </h3>

              <p className="text-soft-gray text-lg leading-relaxed max-w-xl">
                From healthcare, education, contracting and engineering offices
                to e-commerce and financial services, every project we undertake
                benefits from our extensive knowledge of various industries and
                our ability to provide solutions tailored to meet unique needs.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-black rounded-2xl shadow-xl shadow-ant-gold/20 hover:shadow-ant-gold/40 transition-all duration-300"
              >
                Start Now
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image with Decorations */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-transparent bg-gradient-to-br from-ant-gold via-transparent to-dark-navy rounded-[2.5rem] [mask-image:linear-gradient(white,white),linear-gradient(white,white)] [mask-clip:content-box,border-box] [mask-composite:intersect] -z-10 opacity-60"></div>
              
              {/* Border decoration */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-ant-gold/20 rounded-[2.5rem] -z-20"></div>
              
              {/* Wave/Curves decoration */}
              <div className="absolute -top-12 -right-8 w-32 h-32 opacity-80 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-ant-gold fill-current">
                   <path d="M0,50 Q10,40 20,50 T40,50 T60,50 T80,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" />
                   <path d="M0,60 Q10,50 20,60 T40,60 T60,60 T80,60 T100,60" fill="none" stroke="currentColor" strokeWidth="2" />
                   <path d="M0,70 Q10,60 20,70 T40,70 T60,70 T80,70 T100,70" fill="none" stroke="currentColor" strokeWidth="2" />
                   <path d="M0,80 Q10,70 20,80 T40,80 T60,80 T80,80 T100,80" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/expertise-team.png"
                  alt="Our Team Expertise"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
