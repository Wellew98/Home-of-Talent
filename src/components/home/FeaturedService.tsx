import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

/**
 * Featured service — large split section (master brief s.11).
 * Image left, copy right, asymmetry for editorial feel.
 */
const points = [
  "Small repairs",
  "Maintenance",
  "Renovations",
  "Improvements",
  "Property preparation",
];

export function FeaturedService() {
  return (
    <section className="bg-tint py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-hairline">
              <Image
                src={images.featured}
                alt="Large home renovation project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* offset accent block — editorial asymmetry */}
            <div
              className="absolute -bottom-6 -right-6 hidden h-24 w-24 border border-copper lg:block"
              aria-hidden
            />
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <p className="kicker mb-4 text-sage">02 · What we handle</p>
            <h2 className="font-display text-[34px] font-extrabold tracking-tight sm:text-[44px]">
              From the small jobs to the big ones.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
              One team for the whole house. Whether it&apos;s a single repair this
              week or a full renovation next season, the same standard of
              workmanship applies from start to finish — a standard we would
              accept in our own homes.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[16px] font-medium text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-[2px] border border-copper/40">
                    <Check className="h-3.5 w-3.5 text-copper" strokeWidth={2.5} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/quote" size="lg">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
