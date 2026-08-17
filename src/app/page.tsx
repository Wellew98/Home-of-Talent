import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedService } from "@/components/home/FeaturedService";
import { WhyUs } from "@/components/home/WhyUs";
import { RoofStrip } from "@/components/progress/RoofStrip";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { BuildProgress } from "@/components/home/BuildProgress";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSection } from "@/components/home/CtaSection";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedService />
      <WhyUs />
      <RoofStrip image={images.roof.sheeting} alt="Finished sheet-metal roof, aerial view" />
      <ProjectShowcase />
      <BuildProgress />
      <ProcessSteps />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
