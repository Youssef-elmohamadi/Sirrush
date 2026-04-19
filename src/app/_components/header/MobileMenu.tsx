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
    const dir="rtl";
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
                  className="py-3 text-lg font-semibold text-deep-navy hover:text-royal-gold border-b border-gray-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇸🇦</span>
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
                <button className="w-full py-3 bg-[#8E67E8] text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-purple-200">
                  <div className="bg-white p-1 rounded-full">
                    <FaWhatsapp className="text-[#25D366]" size={20} />
                  </div>
                  Contact us now
                </button>

                <button className="w-full py-3 bg-[#a17ced] text-white rounded-2xl font-bold">
                  استشارة مجانية
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
