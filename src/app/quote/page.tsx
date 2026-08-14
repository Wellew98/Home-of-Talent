import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free quote from Home of Talent. Tell us about your project and we'll respond with clear answers and a clear quote.",
};

const nextSteps = [
  {
    number: "01",
    title: "We contact you",
    text: "We come back to you to discuss your project and arrange a site visit where needed.",
  },
  {
    number: "02",
    title: "We review the project",
    text: "A proper look at the scope, the site and what the job actually needs.",
  },
  {
    number: "03",
    title: "You receive your quote",
    text: "A clear, itemised quote with scope, cost and timeline — in writing.",
  },
  {
    number: "04",
    title: "Work begins on your schedule",
    text: "On the agreed date, our team arrives prepared and gets the job done.",
  },
];

export default function QuotePage() {
  return (
    <>
      <section className="bg-charcoal py-16 lg:py-20">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs items={[{ label: "Free Quote" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">No obligation · Clear quotes</p>
            <h1 className="font-display text-[36px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[50px]">
              Get a Free Quote
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              Tell us about your project and we&apos;ll come back to you with clear
              answers and a clear quote. Every quote is itemised, so you know the
              scope and cost before any work begins.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-tint py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="mb-6 font-display text-[26px] font-extrabold tracking-tight">
                Project Request Form
              </h2>
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              <div className="rounded-[2px] border border-hairline bg-offwhite p-7">
                <h2 className="kicker mb-5 text-sage">Prefer to talk?</h2>
                <ul className="space-y-4 text-[15px]">
                  <li>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-semibold text-ink transition-colors hover:text-copper"
                    >
                      <WhatsAppIcon className="h-5 w-5 text-copper" />
                      WhatsApp us
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="flex items-center gap-3 text-ink transition-colors hover:text-copper"
                    >
                      <Phone className="h-5 w-5 text-copper" aria-hidden />
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 text-ink transition-colors hover:text-copper"
                    >
                      <Mail className="h-5 w-5 text-copper" aria-hidden />
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted">
                    <Clock className="h-5 w-5 text-copper" aria-hidden />
                    {site.hours}
                  </li>
                </ul>
              </div>

              <div className="rounded-[2px] border border-hairline bg-offwhite p-7">
                <h2 className="kicker mb-6 text-sage">What happens next</h2>
                <ol className="space-y-6">
                  {nextSteps.map((step) => (
                    <li key={step.number} className="flex gap-4">
                      <span className="kicker mt-1 text-copper">{step.number}</span>
                      <div>
                        <p className="font-display text-[16px] font-bold text-ink">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-muted">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-[13px] leading-relaxed text-muted">
                We respond as soon as we can — no spam, no pressure. Your details
                stay between you and {site.name}.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
