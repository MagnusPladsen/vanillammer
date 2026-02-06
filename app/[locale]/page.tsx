import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <ProjectsPreview />
      <InstagramGrid />
      <CTASection />
    </>
  );
}
