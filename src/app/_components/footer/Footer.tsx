"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fastLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Our Team", href: "/team" },
    { name: "Blogs", href: "/blog" },
  ];

  const services = [
    "Software Development",
    "UI & UX Development",
    "Web Development",
    "Mobile Development",
    "E-commerce",
    "Performance Marketing",
    "Graphic Design",
    "Branding",
    "Media Buying",
    "Social Media Management",
    "SEO",
    "Content Creation",
    "E-commerce Marketing",
    "Media Production",
  ];

  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ant-gold/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ant-gold/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Logo & Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 overflow-hidden flex items-center justify-center bg-white rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Sirrush Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-white uppercase">
                <span className="text-xl font-black tracking-wide leading-none">SIRRUSH</span>
                <span className="text-[10px] font-bold tracking-widest text-ant-gold">Software Solutions</span>
              </div>
            </Link>
            
            <p className="text-pure-white/70 text-sm leading-relaxed max-w-xs">
              We are a leading software company, creating innovative and effective
              websites and applications that enhance your brand and increase your revenue.
            </p>

            {/* Vision 2030 Placeholder */}
            <div className="pt-4 flex items-center gap-4">
               <div className="w-24 h-12 flex items-center justify-center border border-white/20 rounded-lg text-[10px] font-black uppercase tracking-tighter opacity-80">
                  <span className="text-white">VISION</span>
                  <span className="text-ant-gold ml-1">2030</span>
               </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-ant-gold hover:border-ant-gold transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Fast Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">Fast Links</h4>
            <ul className="space-y-4">
              {fastLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pure-white/70 hover:text-ant-gold transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">Services</h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-pure-white/70 hover:text-ant-gold transition-colors text-sm font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-ant-gold">Get in Touch</h4>
            <ul className="space-y-6">
              {[
                { icon: <FiPhone />, text: "+966 5000 187 59" },
                { icon: <FiMapPin />, text: "4171 Al Mashtel Street, Riyadh, KSA" },
                { icon: <FiPhone />, text: "+2010 8000 2215" },
                { icon: <FiMapPin />, text: "Al Jazeera Tower, Mansoura, Egypt" },
                { icon: <FiMail />, text: "info@geexar.com" },
              ].map((contact, i) => (
                <li key={i} className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-ant-gold group-hover:bg-ant-gold group-hover:text-white transition-all">
                    {contact.icon}
                  </div>
                  <span className="text-pure-white/70 text-sm leading-tight pt-2">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-pure-white/50 text-xs font-bold tracking-widest uppercase">
            All rights reserved © {currentYear} to <span className="text-ant-gold">SIRRUSH</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
