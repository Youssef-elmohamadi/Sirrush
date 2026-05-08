import React from "react";
import BlogHero from "../../_components/blog/BlogHero";
import BlogGrid from "../../_components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}
