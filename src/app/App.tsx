import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InternshipSection } from './components/InternshipSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="size-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InternshipSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <CustomCursor />
    </div>
  );
}