"use client";
import React from "react";
import { useTranslations } from "next-intl";

const BlogSidebar = () => {
  const t = useTranslations("blog_page.sidebar");

  return (
    <aside className="lg:sticky lg:top-32 h-fit">
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50">
        <h3 className="text-2xl font-black text-dark-navy mb-8 text-center">
          {t("contact_title")}
        </h3>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder={t("name_label")}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-ant-gold transition-colors text-sm font-medium"
          />
          <input
            type="text"
            placeholder={t("phone_label")}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-ant-gold transition-colors text-sm font-medium"
          />
          <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-ant-gold transition-colors text-sm font-medium text-soft-gray appearance-none cursor-pointer">
            <option>{t("service_label")}</option>
          </select>
          <textarea
            rows={4}
            placeholder={t("message_label")}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-ant-gold transition-colors text-sm font-medium resize-none"
          ></textarea>
          
          <button className="w-full py-4 bg-gradient-to-r from-ant-gold to-[#a48446] text-white font-black rounded-2xl shadow-lg shadow-ant-gold/30 hover:shadow-ant-gold/50 transition-all duration-300 uppercase tracking-widest text-sm">
            {t("send_btn")}
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
