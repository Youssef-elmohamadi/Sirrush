"use client";
import Link from "next/link";
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

const MobileMenu = ({ isOpen, toggleMenu, navLinks }) => {
  const dir = "rtl";
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
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 z-50 md:hidden"
          />
          <motion.div
            initial={{ x: dir === "rtl" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-s-0 top-0 bottom-0 w-full bg-white z-99999 md:hidden flex flex-col p-6 pt-0 shadow-2xl"
          >
            <div className="flex justify-between items-center ">
              <Link
                href="/"
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
  <button className="flex items-center gap-2 px-4 py-2 border border-deep-navy text-ant-gold text-xs font-bold rounded-full hover:bg-ant-gold/10 transition-all duration-300 group">
    
    {/* حاوية اللمبة الخضراء */}
    <span className="relative flex h-2 w-2">
      {/* تأثير الهالة المنتشرة (Ping) - اختياري لشكل أكثر ديناميكية */}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saudi-green opacity-75"></span>
      
      {/* اللمبة الأساسية التي تعمل وميض (Pulse) */}
      <span className="relative inline-flex rounded-full h-2 w-2 bg-saudi-green animate-pulse"></span>
    </span>

    العربية
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

                {/* Instagram */}
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
                    <FaInstagram
                      className=" text-xl text-ant-gold 
                              transition-colors duration-300 ease-in-out 
                              group-hover:text-white"
                    />
                  </div>
                </Link>
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
                    <FaLinkedinIn
                      className=" text-xl text-ant-gold 
                               transition-colors duration-300 ease-in-out 
                               group-hover:text-white"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3 pb-4">
                <button className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer flex items-center justify-center gap-3">
                  <div className="bg-white p-1 rounded-full">
                    <FaWhatsapp className="text-[#25D366]" size={20} />
                  </div>
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

                  <span className="relative z-10">Contact US</span>
                </button>

                <button className="relative px-6 py-3 bg-deep-navy text-ant-gold text-sm font-bold rounded-full overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-ant-gold/30 active:scale-95 cursor-pointer">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-[-100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-ant-gold/10 blur-md" />

                  <span className="relative z-10">Free Consulting</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
