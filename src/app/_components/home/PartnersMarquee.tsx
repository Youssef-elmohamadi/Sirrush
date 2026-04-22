"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/42.png" },
  { name: "Partner 2", logo: "/43.png" },
  { name: "Partner 3", logo: "/44.png" },
  { name: "Partner 4", logo: "/48.png" },
  { name: "Partner 5", logo: "/49.png" },
  { name: "Partner 6", logo: "/50.png" },
];

const PartnersMarquee = () => {
  // بنضاعف المصفوفة عشان الحركة تكون مستمرة بدون فراغات (Seamless Loop)
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-ant-gold shadow-[0_0_10px_rgba(186,149,84,0.5)]"></span>
            <span className="text-soft-gray uppercase tracking-[0.3em] text-xs font-bold">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-deep-navy tracking-tight max-w-2xl leading-tight">
            Join our clients to create a new success story
            <span className="text-ant-gold">.</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden py-10 mask-fade">
          {/* mask-fade (اختياري): 
              تريك لتنعيم حواف السلايدر عشان الشعارات متختفيش فجأة 
          */}
          <motion.div
            className="flex flex-nowrap shrink-0 gap-16 md:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }} // بيتحرك لنص المسافة (بسبب المضاعفة) وبيرجع للصفر في لمح البصر
            transition={{
              duration: 25, // كل ما زاد الرقم، السرعة بقت أبطأ وأنعم
              ease: "linear", // السرعة الثابتة المطلوبة
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                {/* تريك الـ Grayscale: 
                    بتخلي شكل الشركاء "بريميوم" أكتر، ولما تقف على لوجو ينور بألوانه الأصلية
                */}
                <div className="relative h-12 w-32 md:w-40 flex items-center justify-center">
                  {/* استبدل الـ Image بالمسار الحقيقي أو استخدم Placeholder حالياً */}
                  {/* <div className="text-xl font-bold text-soft-gray tracking-tighter">
                    {partner.name}
                  </div> */}
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain"
                  /> 
                 
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* تنسيق الـ Masking للـ Fade الجانبي */}
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default PartnersMarquee;
