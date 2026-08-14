import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

/**
 * Final CTA band — charcoal, primary + WhatsApp (master brief s.38).
 * Reusable across pages.
 */
export function CtaSection({
  title = "Ready to Start Your Project?",
  lead = "Request a free quote or send a WhatsApp — we'll come back to you with clear answers and a clear quote.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-charcoal py-24 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="kicker mb-4 text-copper">Get started</p>
          <h2 className="font-display text-[34px] font-extrabold tracking-tight text-ondark sm:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ondark-muted">
            {lead}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </Container>
    </section>
  );
}
