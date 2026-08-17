import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { images } from "@/lib/images";

const trustPills = ["Quality Work", "Clear Quotes", "Professional Service", "Johannesburg"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Background photo + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.roofer}
          alt="Home of Talent carpenter setting roof trusses on site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30"
          aria-hidden
        />
      </div>

      <Container className="relative py-28 lg:py-40">
        <div data-reveal>
          <p className="kicker mb-6 text-copper">Home of Talent · Johannesburg</p>
          <h1 className="max-w-3xl font-display text-[46px] font-extrabold leading-[1.0] tracking-tight text-ondark sm:text-[68px]">
            Your Home.
            <br />
            Done Properly.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ondark-muted">
            Professional home improvement, repairs and maintenance services
            across Johannesburg.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-ondark/15 pt-8">
            {trustPills.map((pill) => (
              <li
                key={pill}
                className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ondark-muted"
              >
                <span className="h-1 w-1 bg-copper" aria-hidden />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
