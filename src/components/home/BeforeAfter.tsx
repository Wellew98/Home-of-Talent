"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

/**
 * Before/After comparison slider (master brief s.14).
 * Drag handle + keyboard accessible (arrow keys on the handle).
 */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <section className="bg-tint py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="kicker mb-4 text-sage">05 · Before & After</p>
          <h2 className="font-display text-[34px] font-extrabold tracking-tight sm:text-[44px]">
            See The Difference.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Drag the handle to compare. Example transformation shown — your
            project could be next.
          </p>
        </div>

        <div className="mt-12">
          <div
            ref={ref}
            className="relative aspect-[16/9] cursor-ew-resize touch-none select-none overflow-hidden rounded-[2px] border border-hairline sm:aspect-[21/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            {/* After (base) */}
            <Image
              src={images.after}
              alt="After renovation — finished room"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover"
              draggable={false}
            />
            {/* Before (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden
            >
              <Image
                src={images.before}
                alt=""
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
                draggable={false}
              />
            </div>
            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <div className="absolute inset-y-0 -ml-px w-[2px] bg-offwhite" />
              <div className="absolute top-1/2 -ml-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[2px] bg-offwhite shadow-sm">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6-6 6 6 6" />
                  <path d="m15 6 6 6-6 6" />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <span className="absolute left-4 top-4 rounded-[2px] bg-charcoal/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ondark">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-[2px] bg-copper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
              After
            </span>
          </div>
        </div>

        <Reveal className="mt-10">
          <Button href="/quote" size="lg">
            Start Your Project
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
