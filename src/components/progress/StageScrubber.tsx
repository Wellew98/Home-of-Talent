"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Stage = {
  image: StaticImageData;
  /** e.g. "Deck reinforced" */
  title: string;
  /** one line */
  caption: string;
  alt: string;
};

type StageScrubberProps = {
  /** 3–6 stages */
  stages: Stage[];
  badgeLabel?: string;
  className?: string;
  /** switches rail/tick/knob colours for use on a charcoal section */
  onDark?: boolean;
};

const pad2 = (n: number) => String(n).padStart(2, "0");

/**
 * Multi-stop drag scrubber — continuous crossfade between N stages, snapping
 * to the nearest stop on release. Ported from
 * prototype/home-of-talent-progress-components.html (section 01) — the
 * position math, easing and pointer handling are kept verbatim; only the
 * DOM plumbing is React-ified (imperative refs for the per-frame paint so
 * dragging stays smooth, React state only for the "which stage is active"
 * bits that don't need to update 60x/sec).
 */
export function StageScrubber({
  stages,
  badgeLabel = "Stage",
  className,
  onDark = false,
}: StageScrubberProps) {
  const N = stages.length;

  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const tickRefs = useRef<Array<HTMLDivElement | null>>([]);

  const posRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const reduceRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceRef.current = mql.matches;
    const onChange = () => {
      reduceRef.current = mql.matches;
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const paint = useCallback(
    (p: number) => {
      for (let i = 0; i < N; i++) {
        const o = Math.max(0, 1 - Math.abs(p - i));
        const el = frameRefs.current[i];
        if (el) el.style.opacity = String(o);
      }
      const pct = (p / (N - 1)) * 100;
      if (knobRef.current) knobRef.current.style.left = `${pct}%`;
      if (fillRef.current) fillRef.current.style.width = `${pct}%`;

      const k = Math.min(N - 1, Math.max(0, Math.round(p)));
      tickRefs.current.forEach((t, j) => {
        if (!t) return;
        t.style.borderColor = j <= k ? "var(--color-copper)" : "";
        t.style.backgroundColor = j <= k ? "var(--color-copper)" : "";
        t.style.transform = j <= k ? "scale(1.15)" : "";
      });
      if (k !== activeIndexRef.current) {
        activeIndexRef.current = k;
        setActiveIndex(k);
      }
    },
    [N],
  );

  // Stored in a ref (assigned from an effect, not during render) so the
  // rAF loop can re-schedule itself without a direct self-reference to a
  // not-yet-initialized binding.
  const tickRef = useRef<() => void>(() => {});
  useEffect(() => {
    tickRef.current = () => {
      posRef.current += (targetRef.current - posRef.current) * 0.24;
      if (Math.abs(targetRef.current - posRef.current) < 0.002) {
        posRef.current = targetRef.current;
        paint(posRef.current);
        rafRef.current = null;
        return;
      }
      paint(posRef.current);
      rafRef.current = requestAnimationFrame(() => tickRef.current());
    };
  }, [paint]);

  const go = useCallback(
    (v: number, snap: boolean) => {
      const clamped = Math.max(0, Math.min(N - 1, snap ? Math.round(v) : v));
      targetRef.current = clamped;
      if (reduceRef.current) {
        posRef.current = clamped;
        paint(clamped);
        return;
      }
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(() => tickRef.current());
    },
    [N, paint],
  );

  const fromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * (N - 1);
  }, [N]);

  const jumpTo = useCallback(
    (clientX: number) => {
      const v = Math.max(0, Math.min(N - 1, fromClientX(clientX)));
      posRef.current = targetRef.current = v;
      paint(v);
    },
    [N, fromClientX, paint],
  );

  const activeStage = stages[activeIndex];

  return (
    <div className={className}>
      <div
        className={cn(
          "relative mt-9 aspect-[11/5] overflow-hidden rounded-[2px] border bg-[#0d0d0d]",
          onDark ? "border-ondark/15" : "border-hairline",
        )}
      >
        <div className="absolute left-4 top-4 z-10 rounded-[2px] bg-charcoal/85 px-3 py-[7px] text-[11px] font-semibold uppercase tracking-[0.12em] text-ondark backdrop-blur-[2px]">
          {badgeLabel} <span className="text-copper">{pad2(activeIndex + 1)}</span> / {pad2(N)}
        </div>

        {stages.map((stage, i) => (
          <div
            key={i}
            ref={(el) => {
              frameRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={stage.image}
              alt={stage.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 to-transparent px-5 pb-[18px] pt-11">
          <p className="font-display text-[19px] font-extrabold tracking-tight text-ondark">
            {activeStage.title}
          </p>
          <p className="text-[14px] text-[#cfcbc4]">{activeStage.caption}</p>
        </div>
      </div>

      <div className="mt-[26px] flex items-center gap-[18px]">
        <button
          type="button"
          aria-label="Previous stage"
          disabled={activeIndex === 0}
          onClick={() => go(activeIndex - 1, true)}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-[2px] border transition-colors duration-200",
            "hover:border-copper hover:bg-copper/[0.06] disabled:cursor-default disabled:opacity-35 disabled:hover:border-inherit disabled:hover:bg-transparent",
            onDark ? "border-ondark/20 text-ondark" : "border-hairline text-ink",
          )}
        >
          <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>

        <div
          ref={trackRef}
          role="slider"
          tabIndex={0}
          aria-label="Build stage"
          aria-valuemin={1}
          aria-valuemax={N}
          aria-valuenow={activeIndex + 1}
          aria-valuetext={`Stage ${activeIndex + 1} of ${N}: ${activeStage.title}`}
          className="relative h-11 flex-1 cursor-grab touch-none select-none rounded-[2px] outline-offset-[6px] active:cursor-grabbing"
          onPointerDown={(e) => {
            draggingRef.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            jumpTo(e.clientX);
          }}
          onPointerMove={(e) => {
            if (draggingRef.current) jumpTo(e.clientX);
          }}
          onPointerUp={() => {
            if (!draggingRef.current) return;
            draggingRef.current = false;
            go(targetRef.current, true);
          }}
          onPointerCancel={() => {
            if (!draggingRef.current) return;
            draggingRef.current = false;
            go(targetRef.current, true);
          }}
          onKeyDown={(e) => {
            const k = Math.round(targetRef.current);
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
              go(k + 1, true);
              e.preventDefault();
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
              go(k - 1, true);
              e.preventDefault();
            } else if (e.key === "Home") {
              go(0, true);
              e.preventDefault();
            } else if (e.key === "End") {
              go(N - 1, true);
              e.preventDefault();
            }
          }}
        >
          <div
            className={cn(
              "absolute inset-x-0 top-[21px] h-[2px]",
              onDark ? "bg-ondark/15" : "bg-hairline",
            )}
          />
          <div ref={fillRef} className="absolute left-0 top-[21px] h-[2px] bg-copper" style={{ width: 0 }} />

          {stages.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                tickRefs.current[i] = el;
              }}
              className={cn(
                "absolute top-[14px] -ml-2 h-4 w-4 rounded-full border-2 transition-[transform,border-color,background-color] duration-[180ms]",
                onDark ? "border-ondark/30 bg-charcoal" : "border-hairline bg-offwhite",
              )}
              style={{ left: `${(i / (N - 1)) * 100}%` }}
            >
              <span
                className={cn(
                  "absolute -top-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.1em]",
                  onDark ? "text-ondark-muted" : "text-muted",
                )}
              >
                {pad2(i + 1)}
              </span>
            </div>
          ))}

          <div
            ref={knobRef}
            className={cn(
              "pointer-events-none absolute top-2 z-[3] -ml-[14px] h-7 w-7 rounded-full border-[3px] bg-copper shadow-[0_1px_6px_rgba(0,0,0,0.28)]",
              onDark ? "border-charcoal" : "border-offwhite",
            )}
            style={{ left: 0 }}
          />
        </div>

        <button
          type="button"
          aria-label="Next stage"
          disabled={activeIndex === N - 1}
          onClick={() => go(activeIndex + 1, true)}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-[2px] border transition-colors duration-200",
            "hover:border-copper hover:bg-copper/[0.06] disabled:cursor-default disabled:opacity-35 disabled:hover:border-inherit disabled:hover:bg-transparent",
            onDark ? "border-ondark/20 text-ondark" : "border-hairline text-ink",
          )}
        >
          <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>
      </div>
      <p className={cn("mt-3 text-[13px]", onDark ? "text-ondark-muted" : "text-muted")}>
        Drag the handle, click a stop, or use the arrow keys.
      </p>
    </div>
  );
}
