import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Send a quote request or WhatsApp with a short description and photos if you have them.",
  },
  {
    number: "02",
    title: "We Review Your Project",
    text: "We assess the scope, ask the right questions, and arrange a site visit where needed.",
  },
  {
    number: "03",
    title: "You Receive Your Quote",
    text: "A clear, itemised quote with the scope, cost and timeline — in writing.",
  },
  {
    number: "04",
    title: "We Get To Work",
    text: "On the agreed date, our team arrives prepared and works through the plan.",
  },
  {
    number: "05",
    title: "Project Complete",
    text: "We walk the finished work with you and leave the site clean. Done properly.",
  },
];

export { steps as processSteps };

/**
 * Process timeline — "How It Works", 5 steps (master brief s.20).
 * Horizontal on desktop, vertical on mobile. Reused on home + service pages.
 */
export function ProcessSteps({
  number,
  label,
  title = "How It Works",
  lead = "A simple process, from first message to finished work — so you always know where your project stands.",
}: {
  number?: string;
  label?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <Container>
        <SectionHeading number={number} label={label} title={title} lead={lead} />

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="relative border-l border-hairline pl-6 lg:border-l-0 lg:border-t lg:pt-8 lg:pl-0"
            >
              <Reveal delay={i * 0.07}>
                <span
                  className="absolute -left-[5px] top-0 h-[9px] w-[9px] bg-copper lg:-top-[5px] lg:left-0"
                  aria-hidden
                />
                <span className="kicker text-copper">{step.number}</span>
                <h3 className="mt-3 font-display text-[19px] font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
