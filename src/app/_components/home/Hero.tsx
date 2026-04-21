"use client";  
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
const Hero = () => {
      const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
      <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
      >
<picture>
  <source media="(max-width: 768px)" srcSet="/hero-mobile.webp"  />
  <source media="(min-width: 769px)" srcSet="/hero.webp" />
  
  <Image
    src="/hero.webp" 
    alt="Landing Background"
    fill
    sizes=""
    className="object-cover object-center"
    priority
  />
</picture>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="absolute z-30 top-10 md:top-30 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4"
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden border-3 border-deep-navy px-4 py-2 text-deep-navy text-xl font-bold whitespace-nowrap"
          >
            <TypewriterComponent
              options={{
                strings: ["Creative", "Ambitious", "Strategic", "SIRRUSH"],
                autoStart: true,

                loop: true,
                delay: 200,
                deleteSpeed: 75,
                cursor: "|",
              }}
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-lg font-bold text-ant-gold"
          >
            <span>{"<"}</span>
            <span className="text-deep-navy">/</span>
            <span>Safe</span>
            <span>{">"}</span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="absolute z-20 container-lg inset-0 flex flex-col items-center justify-center text-center px-4 pt-4"
        >
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="text-xl md:text-3xl font-bold text-deep-navy mb-4 max-w-[100%] md:max-w-[80%]"
          >
            With passion and ambition, we guide your business toward greater
            successes and new horizons that meet your aspirations.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="text-base md:text-xl font-bold md:font-medium text-deep-navy mb-8 max-w-[80%] md:max-w-[60%]"
          >
            We always strive to delight our customers by providing the widest
            possible range of digital options.
          </motion.p>

          <div className="flex gap-4">
            <button className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

              <span className="relative z-10">Free Consulting</span>
            </button>

            <button className="relative px-6 py-3 bg-transparent border border-deep-navy text-deep-navy text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-deep-navy hover:text-ant-gold hover:shadow-lg hover:shadow-deep-navy/30 active:scale-95 cursor-pointer">              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-ant-gold/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
              </span>

              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </motion.div>
      </section>
  )
}

export default Hero
