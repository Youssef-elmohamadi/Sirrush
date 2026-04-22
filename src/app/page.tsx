import FeaturesSection from "./_components/home/FeaturesSection";
import Hero from "./_components/home/Hero";
import dynamic from "next/dynamic";
import ServicesSlider from "./_components/home/ServicesSlider";
import PartnersMarquee from "./_components/home/PartnersMarquee";
const StatsSection = dynamic(() => import("./_components/home/StatsSection"), {
  ssr: true,
});
export default function Home() {
  return (
    <div>
      <Hero />

      <StatsSection />

      <FeaturesSection />

      <ServicesSlider />

      <PartnersMarquee />
    </div>
  );
}
