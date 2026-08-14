import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedService } from "@/components/home/FeaturedService";
import { WhyUs } from "@/components/home/WhyUs";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedService />
      <WhyUs />
      <ProjectShowcase />
      <BeforeAfter />
      <ProcessSteps />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
