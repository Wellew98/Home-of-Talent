import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/data/services";
import { getTypicalProjects } from "@/data/typicalProjects";

/**
 * "Services included" checklist + "Typical projects" numbered list (brief s.15).
 */
export function ServiceDetails({ service }: { service: Service }) {
  const typical = getTypicalProjects(service);
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Services included */}
          <Reveal>
            <SectionHeading
              label="What's included"
              title="Services Included"
              lead={`Everything this service covers — handled properly, start to finish.`}
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[16px] font-medium text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] border border-copper/40">
                    <Check className="h-3.5 w-3.5 text-copper" strokeWidth={2.5} aria-hidden />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Typical projects */}
          <Reveal delay={0.1}>
            <SectionHeading
              label="Typical projects"
              title="The Kind of Work We Do"
              lead="A sense of the projects this service covers. Yours probably fits — ask us."
            />
            <ol className="mt-10 space-y-5">
              {typical.map((project, i) => (
                <li
                  key={project}
                  className="flex items-baseline gap-5 border-b border-hairline pb-5"
                >
                  <span className="kicker text-copper">0{i + 1}</span>
                  <span className="text-[16px] font-medium text-ink">{project}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/**
 * Project photos strip for a service page (brief s.15: "Project photos").
 */
export function ServicePhotos({
  service,
  extras,
}: {
  service: Service;
  extras: StaticImageData[];
}) {
  return (
    <section className="bg-tint py-24 lg:py-28">
      <Container>
        <SectionHeading
          label="Project photos"
          title="Work in This Category"
          lead="Example photos from projects like this. Real project galleries are being added."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
          {extras.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.06}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-hairline">
                <Image
                  src={photo}
                  alt={`${service.title} project example`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
