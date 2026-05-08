"use client";
import React from "react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contact_page.form");

  return (
    <section className="pb-24 bg-white">
      <div className="container-lg">
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t("name_label")}
                className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:outline-none focus:border-ant-gold transition-colors font-medium"
              />
              <input
                type="email"
                placeholder={t("email_label")}
                className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:outline-none focus:border-ant-gold transition-colors font-medium"
              />
            </div>
            
            <input
              type="text"
              placeholder={t("phone_label")}
              className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:outline-none focus:border-ant-gold transition-colors font-medium"
            />
            
            <textarea
              rows={6}
              placeholder={t("message_label")}
              className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:outline-none focus:border-ant-gold transition-colors font-medium resize-none"
            ></textarea>
            
            <div className="flex justify-center pt-4">
              <button className="px-16 py-5 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-black rounded-full shadow-xl shadow-ant-gold/30 hover:shadow-ant-gold/50 transition-all duration-300 uppercase tracking-widest hover:-translate-y-1">
                {t("send_btn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
