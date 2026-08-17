"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type CompareProjectCardProps = {
  a: StaticImageData;
  b: StaticImageData;
  altA: string;
  altB: string;
  category: string;
  title: string;
  meta: string;
  href?: string;
  /** default "Drag to compare" */
  flagLabel?: string;
};

// px of pointer movement before a press counts as a drag rather than a tap —
// below this, a linked card still navigates normally.
const DRAG_THRESHOLD = 6;

/**
 * Editorial project card carrying two frames, revealed by dragging rather
 * than hover/tap — hover doesn't exist on the phones most customers browse
 * on, and drag does the same job better everywhere. Frame A shows by
 * default; dragging reveals frame B from the left, same clip-path mechanic
 * as StageCompare (just embedded in a card and, when `href` is set, not
 * mistaken for a navigation click — a genuine drag suppresses the click
 * that would otherwise follow it).
 */
export function CompareProjectCard({
  a,
  b,
  altA,
  altB,
  category,
  title,
  meta,
  href,
  flagLabel = "Drag to compare",
}: CompareProjectCardProps) {
  const topRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLSpanElement>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const draggedRef = useRef(false);

  const setPos = useCallback((p: number) => {
    const clamped = Math.max(0, Math.min(100, p));
    if (topRef.current) topRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    if (flagRef.current) {
      const revealed = clamped > 2;
      flagRef.current.style.backgroundColor = revealed ? "var(--color-copper)" : "";
      flagRef.current.style.color = revealed ? "#fff" : "";
    }
  }, []);

  const fromClientX = useCallback((clientX: number, rect: DOMRect) => {
    return ((clientX - rect.left) / rect.width) * 100;
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      startRef.current = { x: e.clientX, y: e.clientY };
      draggingRef.current = true;
      draggedRef.current = false;
      e.currentTarget.setPointerCapture(e.pointerId);
      setPos(fromClientX(e.clientX, e.currentTarget.getBoundingClientRect()));
    },
    [fromClientX, setPos],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current || !startRef.current) return;
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;
      if (!draggedRef.current && Math.hypot(dx, dy) > DRAG_THRESHOLD) draggedRef.current = true;
      setPos(fromClientX(e.clientX, e.currentTarget.getBoundingClientRect()));
    },
    [fromClientX, setPos],
  );

  const endDrag = useCallback(() => {
    draggingRef.current = false;
  }, []);

  // Suppress the click a drag gesture would otherwise trigger, so dragging
  // across a linked card never fires an accidental navigation.
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (draggedRef.current) {
      e.preventDefault();
      draggedRef.current = false;
    }
  }, []);

  const body = (
    <>
      <div
        className="relative aspect-[3/2] touch-none select-none overflow-hidden bg-[#0d0d0d] cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <Image
          src={a}
          alt={altA}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />
        <div
          ref={topRef}
          className="absolute inset-0"
          style={{ clipPath: "inset(0 100% 0 0)" }}
          aria-hidden
        >
          <Image
            src={b}
            alt={altB}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>
        <span
          ref={flagRef}
          className="pointer-events-none absolute bottom-3 left-3 z-[4] rounded-[2px] bg-charcoal/80 px-[9px] py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.11em] text-ondark transition-colors"
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

  const rootClassName = cn("block overflow-hidden rounded-[2px] border border-hairline bg-offwhite");

  if (href) {
    return (
      <Link href={href} className={rootClassName} onClickCapture={onClickCapture}>
        {body}
      </Link>
    );
  }

  return <article className={rootClassName}>{body}</article>;
}
