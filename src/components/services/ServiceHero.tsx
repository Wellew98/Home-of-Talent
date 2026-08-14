import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { whatsappLink } from "@/lib/site";
import type { Service } from "@/data/services";

/**
 * Service page hero — charcoal split: copy left, service image right (brief s.15).
 */
export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="bg-charcoal">
      <Container className="pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="text-ondark-muted">
          <Breadcrumbs
            items={[{ label: "Services", href: "/services" }, { label: service.title }]}
          />
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="kicker mb-5 text-copper">
              Service {service.number} · Home of Talent
            </p>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[52px]">
              {service.title} in Johannesburg
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ondark-muted">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" size="lg">
                Get a Free Quote
              </Button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-ondark/50 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-ondark transition-colors hover:border-copper hover:text-copper"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-ondark/15">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 hidden h-20 w-20 border border-copper lg:block"
              aria-hidden
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
