import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import BlogSidebar from "../../../_components/blog/BlogSidebar";
import RelatedPosts from "../../../_components/blog/RelatedPosts";
import { FiCalendar, FiTag, FiChevronRight, FiChevronLeft } from "react-icons/fi";

export async function generateStaticParams() {
  const locales = ['en', 'ar'];
  // We'll hardcode some IDs for now or fetch them if we had a real data file.
  // Since we use JSON locales, we should ideally fetch from there.
  return [
    { locale: 'en', id: 'web-dev-dubai' },
    { locale: 'en', id: 'design-dubai' },
    { locale: 'en', id: 'mobile-app-dubai' },
    { locale: 'en', id: 'build-smarter' },
    { locale: 'en', id: 'digital-transformation' },
    { locale: 'en', id: 'app-design-steps' },
    { locale: 'ar', id: 'web-dev-dubai' },
    { locale: 'ar', id: 'design-dubai' },
    { locale: 'ar', id: 'mobile-app-dubai' },
    { locale: 'ar', id: 'build-smarter' },
    { locale: 'ar', id: 'digital-transformation' },
    { locale: 'ar', id: 'app-design-steps' }
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, id: string }> }) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'blog_page' });
  const posts = t.raw("posts");
  const post = posts.find((p: any) => p.id === id);

  if (!post) return <div className="py-20 text-center font-black text-dark-navy">Post not found: {id}</div>;


  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="container-lg py-12">
        <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-soft-gray overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-ant-gold transition-colors">{t("hero.breadcrumb_home")}</Link>
          <span className="text-ant-gold">/</span>
          <Link href="/blog" className="hover:text-ant-gold transition-colors">{t("hero.breadcrumb_blog")}</Link>
          <span className="text-ant-gold">/</span>
          <span className="text-dark-navy opacity-50 truncate max-w-[200px]">{post.title}</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <section className="pb-32">
        <div className="container-lg">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Post Content */}
            <div className="flex-1 space-y-12">
              <div className="space-y-6 text-center lg:text-left rtl:lg:text-right">
                 <h1 className="text-3xl md:text-5xl font-black text-dark-navy tracking-tight leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start gap-8 text-sm font-bold text-soft-gray/60 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-ant-gold" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiTag className="text-ant-gold" />
                    {post.category}
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <p className="text-soft-gray text-lg md:text-xl leading-relaxed text-justify font-medium">
                  {post.content}
                </p>
                
                {/* Example of a sub-section like in geexar screenshot */}
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 space-y-6">
                  <h2 className="text-2xl font-black text-dark-navy">
                    {locale === "ar" ? "أهم الخدمات المقدمة" : "Top Services Offered"}

                  </h2>
                  <p className="text-soft-gray leading-relaxed font-medium">
                    {locale === "ar" 
                      ? "نحن نؤمن بأن كل مشروع هو فرصة للابتكار. فريقنا ملتزم بتقديم حلول تفوق التوقعات." 
                      : "We believe every project is an opportunity for innovation. Our team is committed to delivering solutions that exceed expectations."}
                  </p>
                </div>

                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl">
                  <Image
                    src="/proj.png"
                    alt="Secondary illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-deep-navy/10"></div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[400px]">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentId={id} />

    </div>
  );
}
