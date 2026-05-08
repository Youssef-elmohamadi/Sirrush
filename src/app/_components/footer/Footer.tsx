"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const fastLinks = [
    { name: t("fast_links.home"), href: "/" },
    { name: t("fast_links.about"), href: "/about" },
    { name: t("fast_links.services"), href: "/services" },
    { name: t("fast_links.projects"), href: "/projects" },
    { name: t("fast_links.team"), href: "/team" },
    { name: t("fast_links.blog"), href: "/blog" },
  ];

  const services = t.raw("services.list");

  return (
    <footer suppressHydrationWarning className="bg-deep-navy text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ant-gold/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ant-gold/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Logo & Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-24 overflow-hidden flex items-center justify-center bg-white">
                <Image
                  src="/logo.png"
                  alt="Sirrush Logo"
                  fill
                  className="object-cover scale-[1.8] transform"
                />
              </div>

              <div className="flex flex-col text-white uppercase">
                <span className="text-xl font-black tracking-wide leading-none">SIRRUSH</span>
                <span className="text-[10px] font-bold tracking-widest text-ant-gold">{t("tagline")}</span>
              </div>
            </Link>
            
            <p className="text-pure-white/70   leading-relaxed max-w-xs">
              {t("description")}
            </p>

            {/* Vision 2030 Placeholder */}
             <div className="pt-4 flex items-center gap-4">
                <div className="w-auto px-4 h-12 flex items-center justify-center border border-white/20 rounded-lg text-xs md:text-[10px] font-black uppercase tracking-tighter opacity-80 gap-1">
                   <span className="text-white">{t("vision.text")}</span>
                   <span className="text-ant-gold">{t("vision.year")}</span>
                </div>
             </div>

            <div className="flex items-center gap-4 min-h-[40px]">
              {mounted && (
                <>
                  {[
                    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/sirrushsolutions?igsh=bjVtZHRieDNoMHk2" },
                    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61574370509901" },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-ant-gold hover:border-ant-gold transition-all duration-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </>
              )}
            </div>

          </div>

          {/* Column 2: Fast Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">{t("fast_links.title")}</h4>
            <ul className="space-y-4">
              {fastLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pure-white/70 hover:text-ant-gold transition-colors   font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">{t("services.title")}</h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {services.map((service: string) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-pure-white/70 hover:text-ant-gold transition-colors   font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">{t("contact.title")}</h4>
            <ul className="space-y-6">
              {[
                { icon: <FiPhone />, text: "015 078 39478", href: "tel:01507839478" },
                { icon: <FiMapPin />, text: t("contact.address"), href: "#" },
                { icon: <FiMail />, text: "sirrushsolutions@gmail.com", href: "mailto:sirrushsolutions@gmail.com" },
              ].map((contact, i) => (
                <li key={i}>
                  <Link href={contact.href} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-ant-gold group-hover:bg-ant-gold group-hover:text-white transition-all">
                      {contact.icon}
                    </div>
                    <span className="text-pure-white/70 leading-tight pt-2 group-hover:text-ant-gold transition-colors">
                      {contact.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-pure-white/50   font-bold tracking-wide uppercase">
            {mounted && t.rich("copyright", {
              year: currentYear,
              span: (chunks) => <span className="text-ant-gold">{chunks}</span>
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
