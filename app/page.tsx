import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { projects } from "@/data/projects";
import { heroStats } from "@/data/site";
import { personalProjects } from "@/data/personal-projects";


export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <SiteHeader />
      <main id="main">
        <HeroSection stats={heroStats} />
        <WorkSection projects={projects} />
          <WorkSection projects={personalProjects} />

          {/*<ComponentsShowcase />*/}
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

