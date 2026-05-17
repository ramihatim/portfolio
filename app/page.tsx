import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { PersonalSection } from "@/components/sections/PersonalSection";
import { GlitchDivider, ChevronDivider, ScanBandDivider, WaveDivider } from "@/components/SectionDivider";
import { projects } from "@/data/projects";
import { heroStats } from "@/data/site";
import { personalProjects } from "@/data/personal-projects";


export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />
      <main id="main">
        <HeroSection stats={heroStats} />
        <GlitchDivider />
        <WorkSection projects={projects} />
        <ChevronDivider />
        <PersonalSection projects={personalProjects} />
        <ScanBandDivider />
        <AboutSection />
        <WaveDivider />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

