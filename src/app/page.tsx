import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { RecentSection } from "@/components/sections/home/RecentSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RecentSection />
    </>
  );
}
