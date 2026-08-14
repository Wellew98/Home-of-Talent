import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { homepageFaqs } from "@/data/faqs";

/**
 * Homepage FAQ section — heading + shared FaqList.
 */
export function FaqAccordion() {
  return (
    <section className="bg-tint py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            number="07"
            label="Common Questions"
            title="Frequently Asked Questions"
            lead="The answers to the questions Johannesburg homeowners ask us most. Anything else — send a WhatsApp or request a quote."
          />
          <FaqList faqs={homepageFaqs} />
        </div>
      </Container>
    </section>
  );
}
