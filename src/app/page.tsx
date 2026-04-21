import FeaturesSection from "./_components/home/FeaturesSection";
import Hero from "./_components/home/Hero";
import dynamic from "next/dynamic";
const StatsSection = dynamic(() => import("./_components/home/StatsSection"), {
  ssr: true,
});
export default function Home() {
  return (
    <div>
      <Hero />

      <StatsSection />

      <FeaturesSection />
    </div>
  );
}
