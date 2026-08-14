import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

/**
 * Sticky mobile conversion bar (master brief s.12, s.39).
 * Mobile only. Left: WhatsApp. Right: Get a Quote.
 */
export function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-ondark/20 bg-charcoal lg:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-ondark"
      >
        <WhatsAppIcon className="h-4 w-4 text-copper" />
        WhatsApp
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center bg-copper py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white"
      >
        Get a Quote
      </Link>
    </div>
  );
}
