"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="container-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
            <div className="relative">
              {/* Brush stroke effect */}
              <div className="absolute -inset-x-4 -inset-y-1 bg-ant-gold/10 skew-x-[-15deg] rounded-lg -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-black text-dark-navy tracking-tight">
                Get in Touch
              </h2>
            </div>
          </div>
          <p className="text-soft-gray text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            Do not hesitate to make your dreams a tangible reality..we are waiting for you
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FiPhone />,
              title: "Phone",
              value: "+966 5000 187 59",
              link: "tel:+966500018759",
            },
            {
              icon: <FiMapPin />,
              title: "Address",
              value: "4171 Al Mashtel Street, Riyadh, KSA",
              link: "#",
            },
            {
              icon: <FiMail />,
              title: "Email",
              value: "info@geexar.com",
              link: "mailto:info@geexar.com",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-full bg-ant-gold/10 text-ant-gold text-xl group-hover:bg-ant-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase tracking-widest text-soft-gray mb-1">
                  {item.title}
                </span>
                <span className="text-dark-navy font-bold truncate sm:whitespace-normal">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
              />
            </div>
            <input
              type="tel"
              placeholder="+966 5000 187 59"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all"
            />
            <textarea
              placeholder="write your message here ..."
              rows={5}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ant-gold/50 focus:bg-white transition-all resize-none"
            ></textarea>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/966500018759"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-2xl shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Contact us now</span>
              </motion.a>

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-bold rounded-2xl shadow-xl shadow-ant-gold/20 hover:shadow-ant-gold/40 transition-all duration-300"
              >
                <span>Send</span>
                <FiSend className="text-xl" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
