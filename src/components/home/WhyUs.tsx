import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

/**
 * Why Home of Talent — dark charcoal, 4 numbered trust points
 * + tradesperson photo (master brief s.12).
 * NO unsupported claims (no invented years/insurance figures).
 */
const points = [
  {
    number: "01",
    title: "Clear Communication",
    text: "You know the scope, the cost and the timeline before work starts — and who to call while it's underway.",
  },
  {
    number: "02",
    title: "Quality Workmanship",
    text: "Every job is finished to a standard we'd accept in our own homes, with proper preparation and proper materials.",
  },
  {
    number: "03",
    title: "Respect for Your Home",
    text: "Clean work areas, protection for your surfaces and furniture, and a tidy site at the end of every day.",
  },
  {
    number: "04",
    title: "Reliable Service",
    text: "We arrive when we say we will and we stay until the work is done. If something changes, you hear it from us first.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="kicker mb-4 text-copper">03 · Why Home of Talent</p>
            <h2 className="font-display text-[34px] font-extrabold tracking-tight text-ondark sm:text-[44px]">
              Work You Feel Good About.
            </h2>
            <div className="mt-14 space-y-10">
              {points.map((point, i) => (
                <Reveal key={point.number} delay={i * 0.06}>
                  <div className="grid grid-cols-[64px_1fr] gap-6 border-b border-ondark/10 pb-10">
                    <span className="font-display text-[40px] font-extrabold leading-none text-copper">
                      {point.number}
                    </span>
                    <div>
                      <h3 className="font-display text-[20px] font-bold tracking-tight text-ondark">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ondark-muted">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <Reveal delay={0.1} className="relative hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-ondark/15">
              <Image
                src={images.tradesperson}
                alt="Craftsman working on a home project"
                fill
                sizes="(min-width: 1024px) 40vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -left-6 -bottom-6 h-24 w-24 border border-copper"
              aria-hidden
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
