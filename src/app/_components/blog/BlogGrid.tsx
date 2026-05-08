"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiCalendar, FiTag, FiArrowRight } from "react-icons/fi";


const BlogGrid = () => {
  const t = useTranslations("blog_page");
  const posts = t.raw("posts");

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6 relative">
            <span className="w-4 h-4 bg-ant-gold rounded-full shadow-[0_0_15px_rgba(186,149,84,0.6)]"></span>
            <span className="text-soft-gray uppercase tracking-wider text-sm font-bold">
              {t("grid.label")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight leading-tight">
            {t("grid.title")}
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-ant-gold/20"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 ltr:left-6 rtl:right-6">
                    <span className="px-4 py-2 bg-ant-gold text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="flex items-center gap-6 text-soft-gray/60 text-sm font-bold uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-ant-gold" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-dark-navy tracking-tight leading-tight group-hover:text-ant-gold transition-colors duration-300 line-clamp-3">
                    {post.title}
                  </h3>

                  <div className="pt-4 mt-auto">
                    <div className="flex items-center gap-3 text-dark-navy font-bold text-sm uppercase tracking-wide group/btn transition-all duration-300 group-hover:text-ant-gold">
                      {t("grid.read_more")}
                      <FiArrowRight className="text-lg transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
