import Hero from "@/components/sections/Hero";
import BrandStrip from "@/components/sections/BrandStrip";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DigitalGrowthPhilosophy from "@/components/sections/DigitalGrowthPhilosophy";
import AIAutomationSystemOverview from "@/components/sections/AIAutomationSystemOverview";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import ProcessBreakdown from "@/components/sections/ProcessBreakdown";
import Testimonials from "@/components/sections/Testimonials";
import BhuexpertTeaser from "@/components/sections/BhuexpertTeaser";
import Pricing from "@/components/sections/Pricing";
import AboutSnippet from "@/components/sections/AboutSnippet";
import TeamSection from "@/components/sections/TeamSection";
import ResultsMetrics from "@/components/sections/ResultsMetrics";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandStrip />
      <ServicesOverview />
      <ProcessBreakdown />
      <CaseStudiesPreview />
      <BhuexpertTeaser />
      <Testimonials />
      <DigitalGrowthPhilosophy />
      <Pricing />
      <AboutSnippet />
      <TeamSection />
      <ResultsMetrics />
      <FAQ />
      <ContactSection />
    </div>
  );
}
