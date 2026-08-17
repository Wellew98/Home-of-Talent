import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type RoofStripProps = {
  image: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed letterboxed image band — a palate cleanser between two heavy
 * sections. No border, no radius. Server component; nothing here is
 * interactive.
 */
export function RoofStrip({ image, alt, priority = false, className }: RoofStripProps) {
  return (
    <div className={cn("relative h-[clamp(180px,26vw,330px)] w-full overflow-hidden", className)}>
      <Image src={image} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
    </div>
  );
}
