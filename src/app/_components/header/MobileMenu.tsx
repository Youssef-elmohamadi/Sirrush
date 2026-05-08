"use client";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

const MobileMenu = ({ isOpen, toggleMenu, navLinks }) => {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
    toggleMenu();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 z-50 md:hidden bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: dir === "rtl" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-s-0 top-0 bottom-0 w-full bg-white z-[9999] md:hidden flex flex-col p-6 pt-0 shadow-2xl"
          >
            <div className="flex justify-between items-center ">
              <Link
                href="/"
                onClick={toggleMenu}
                className="flex items-center gap-2 group transition-opacity hover:opacity-90"
              >
                <div className="relative w-10 h-20 overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src="/logo.png"
                    alt="Sirrush Logo"
                    fill
                    className="object-cover scale-[1.8] transform"
                  />
                </div>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-1 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoClose size={35} />
              </button>
            </div>
            <nav className="flex flex-col bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="py-3 text-lg font-semibold text-deep-navy hover:text-ant-gold border-b border-gray-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center justify-center">
                <button 
                  onClick={toggleLocale}
                  className="flex items-center gap-2 px-4 py-2 border border-deep-navy text-ant-gold text-sm font-bold rounded-full hover:bg-ant-gold/10 transition-all duration-300 group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saudi-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-saudi-green animate-pulse"></span>
                  </span>
                  {t("switch_locale")}
                </button>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61574370509901"
                  target="_blank"
                  className="group"
                >
                  <div
                    className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
                  >
                    <FaFacebookF
                      className=" text-xl text-ant-gold 
                             transition-colors duration-300 ease-in-out 
                             group-hover:text-white"
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/sirrushsolutions?igsh=bjVtZHRieDNoMHk2"
                  target="_blank"
                  className="group"
                >
                  <div
                    className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
                  >
                    <FaInstagram
                      className=" text-xl text-ant-gold 
                              transition-colors duration-300 ease-in-out 
                              group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="group"
                >
                  <div
                    className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
                  >
                    <FaLinkedinIn
                      className=" text-xl text-ant-gold 
                                transition-colors duration-300 ease-in-out 
                                group-hover:text-white"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3 pb-4">
                <Link 
                  href="https://wa.me/201507839478?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%B3%D9%8A%D8%B1%D9%88%D8%B4%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9." 
                  target="_blank"
                  className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
                >
                  <div className="bg-white p-1 rounded-full">
                    <FaWhatsapp className="text-[#25D366]" size={20} />
                  </div>
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

                  <span className="relative z-10">{t("contact")}</span>
                </Link>

                <Link 
                  href="https://wa.me/201507839478?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%B3%D9%8A%D8%B1%D9%88%D8%B4%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9."
                  target="_blank"
                  className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

                  <span className="relative z-10">{t("free_consulting")}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

