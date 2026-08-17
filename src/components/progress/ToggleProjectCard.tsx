"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ToggleProjectCardProps = {
  a: StaticImageData;
  b: StaticImageData;
  altA: string;
  altB: string;
  category: string;
  title: string;
  meta: string;
  href?: string;
  /** default "Hover / tap" */
  flagLabel?: string;
};

/**
 * Editorial project card carrying two frames — desktop hovers, mobile taps,
 * keyboard activates with Enter/Space, 450ms crossfade. Ported from the
 * prototype's `.card` (section 03).
 *
 * When `href` is given the whole card is a link (matches ProjectCard, which
 * this replaces on cards with two frames): frame B previews on hover/focus
 * and a click navigates, same as any other project card. Without `href` the
 * card has no destination, so click/tap/Enter/Space toggles the preview —
 * this is how the roofing page's illustrative "work in this category" grid
 * uses it.
 */
export function ToggleProjectCard({
  a,
  b,
  altA,
  altB,
  category,
  title,
  meta,
  href,
  flagLabel = "Hover / tap",
}: ToggleProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => setFlipped((f) => !f), []);
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle],
  );

  const body = (
    <>
      <div className="relative aspect-[3/2] overflow-hidden bg-[#0d0d0d]">
        <Image
          src={a}
          alt={altA}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <Image
          src={b}
          alt={altB}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-0 transition-opacity duration-[450ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
          style={flipped ? { opacity: 1 } : undefined}
        />
        <span
          className="absolute bottom-3 left-3 z-[4] rounded-[2px] bg-charcoal/80 px-[9px] py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.11em] text-ondark transition-colors group-hover:bg-copper group-hover:text-white group-focus-visible:bg-copper group-focus-visible:text-white"
          style={flipped ? { backgroundColor: "var(--color-copper)", color: "#fff" } : undefined}
        >
          {flagLabel}
        </span>
      </div>
      <div className="px-5 pb-[22px] pt-5">
        <p className="kicker mb-[9px] text-sage">{category}</p>
        <h3 className="font-display text-[21px] font-bold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 text-[14.5px] text-muted">{meta}</p>
      </div>
    </>
  );

  const rootClassName = cn(
    "group block overflow-hidden rounded-[2px] border border-hairline bg-offwhite",
  );

  if (href) {
    return (
      <Link href={href} className={rootClassName}>
        {body}
      </Link>
    );
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className={cn(rootClassName, "cursor-pointer")}
    >
      {body}
    </article>
  );
}
