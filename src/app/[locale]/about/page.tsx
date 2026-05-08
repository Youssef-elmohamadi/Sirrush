import React from "react";
import AboutHero from "../../_components/about/AboutHero";
import AboutIntro from "../../_components/about/AboutIntro";
import AboutPillars from "../../_components/about/AboutPillars";
import AboutBenefits from "../../_components/about/AboutBenefits";
import AboutCulture from "../../_components/about/AboutCulture";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0">
      <AboutHero />
      <AboutIntro />
      <AboutPillars />
      <AboutBenefits />
      <AboutCulture />
    </div>
  );
}
