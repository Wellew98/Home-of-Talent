"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Frame = { image: StaticImageData; label: string; alt: string };

type StageCompareProps = {
  before: Frame;
  after: Frame;
  /** default "3/2" */
  aspect?: string;
  className?: string;
};

/**
 * Two-image drag comparison. Ported from prototype's makeCompare().
 *
 * Labelling rule: use "Before / After" only when both frames were shot from
 * the same camera position. Otherwise label them "Stage 01 / Stage 02" — the
 * caller decides via the `label` on each frame, this component just renders
 * whatever it's given.
 */
export function StageCompare({ before, after, aspect = "3/2", className }: StageCompareProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(50);
  const draggingRef = useRef(false);
  const [valueNow, setValueNow] = useState(50);

  const set = useCallback((v: number) => {
    const p = Math.max(3, Math.min(97, v));
    posRef.current = p;
    if (topRef.current) topRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (handleRef.current) handleRef.current.style.left = `${p}%`;
    setValueNow(Math.round(p));
  }, []);

  const fromClientX = useCallback(
    (clientX: number) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      set(((clientX - rect.left) / rect.width) * 100);
    },
    [set],
  );

  return (
    <div
      ref={rootRef}
      role="slider"
      tabIndex={0}
      aria-label={`Compare ${before.label} and ${after.label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valueNow}
      className={cn(
        "relative cursor-ew-resize touch-none select-none overflow-hidden rounded-[2px] border border-hairline bg-[#0d0d0d]",
        className,
      )}
      style={{ aspectRatio: aspect }}
      onPointerDown={(e) => {
        draggingRef.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        fromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (draggingRef.current) fromClientX(e.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          set(posRef.current + 4);
          e.preventDefault();
        } else if (e.key === "ArrowLeft") {
          set(posRef.current - 4);
          e.preventDefault();
        }
      }}
    >
      <Image
        src={after.image}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        draggable={false}
      />
      <div
        ref={topRef}
        className="absolute inset-0"
        style={{ clipPath: "inset(0 50% 0 0)" }}
        aria-hidden
      >
        <Image
          src={before.image}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="absolute left-3.5 top-3.5 z-[6] rounded-[2px] bg-charcoal/85 px-[11px] py-1.5 text-[11px] font-semibold uppercase tracking-[0.11em] text-ondark">
        {before.label}
      </span>
      <span className="absolute right-3.5 top-3.5 z-[6] rounded-[2px] bg-copper px-[11px] py-1.5 text-[11px] font-semibold uppercase tracking-[0.11em] text-white">
        {after.label}
      </span>

      <div
        ref={handleRef}
        className="pointer-events-none absolute inset-y-0 z-[6]"
        style={{ left: "50%" }}
        aria-hidden
      >
        <div className="absolute inset-y-0 -ml-px w-[2px] bg-offwhite" />
        <div className="absolute left-0 top-1/2 -ml-[23px] grid h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-[2px] bg-offwhite shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          <ChevronsLeftRight className="h-[19px] w-[19px] text-ink" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
