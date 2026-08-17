import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

/**
 * Service card — image, number, title, description, View Service (brief s.10).
 */
export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="rounded-[2px] border border-hairline bg-tint">
        <Link
          href={`/services/${service.slug}`}
          className="group grid lg:grid-cols-[1.25fr_1fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="kicker text-copper">Featured service</span>
            <h3 className="mt-4 font-display text-[28px] font-extrabold tracking-tight text-ink transition-colors group-hover:text-copper sm:text-[34px]">
              {service.title}
            </h3>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-muted">
              {service.shortDescription}
            </p>
            <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
              <span className="transition-colors group-hover:text-copper">View Service</span>
              <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article>
      <Link href={`/services/${service.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-hairline bg-tint">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-hairline pb-4">
          <span className="kicker text-copper">{service.number}</span>
        </div>
        <h3 className="mt-4 font-display text-[22px] font-bold tracking-tight text-ink transition-colors group-hover:text-copper">
          {service.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
          <span className="transition-colors group-hover:text-copper">View Service</span>
          <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </article>
  );
}
