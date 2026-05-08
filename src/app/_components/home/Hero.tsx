"use client";  
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Hero = () => {
  const t = useTranslations("home.hero");
  
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
                strings: t.raw("typewriter"),
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
            className="flex items-center gap-2 text-2xl font-bold text-deep-navy"
          >
            <span>{"<"}</span>
            <span className="text-ant-gold">/</span>
            <span>{t("tag")}</span>
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
            {t("title")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="text-base md:text-xl font-bold md:font-medium text-deep-navy mb-8 max-w-[80%] md:max-w-[60%]"
          >
            {t("subtitle")}
          </motion.p>

          <div className="flex gap-4">
            <Link 
              href="https://wa.me/201507839478?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%B3%D9%8A%D8%B1%D9%88%D8%B4%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9." 
              target="_blank"
              className="relative px-6 py-3 bg-deep-navy text-ant-gold font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
              </span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

              <span className="relative z-10">{t("free_consulting")}</span>
            </Link>

            <button className="relative px-6 py-3 bg-transparent border border-deep-navy text-deep-navy font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-deep-navy hover:text-ant-gold hover:shadow-lg hover:shadow-deep-navy/30 active:scale-95 cursor-pointer">              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-ant-gold/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
              </span>

              <span className="relative z-10 ">{t("learn_more")}</span>
            </button>
          </div>
        </motion.div>
      </section>
  )
}

export default Hero

