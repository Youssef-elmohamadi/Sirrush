"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

const RelatedPosts = ({ currentId }: { currentId: string }) => {
  const t = useTranslations("blog_page");
  const posts = t.raw("posts");
  
  const related = posts
    .filter((p: any) => p.id !== currentId)
    .slice(0, 3);

  return (
    <section className="py-24 border-t border-gray-100">
      <div className="container-lg">
        <h3 className="text-3xl font-black text-dark-navy mb-12">
          {t("related.title")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="group block space-y-4">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-black text-dark-navy group-hover:text-ant-gold transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
