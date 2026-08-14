"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { NAV_LINKS, site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-[60] border-b border-hairline bg-offwhite">
      {/* z-[60] keeps this stacking context (incl. the mobile menu panel)
          above the sticky mobile CTA bar (z-50).
          No backdrop-filter here — it creates a containing block that
          collapses the fixed mobile-menu panel to zero height. */}
      <Container className="flex h-[76px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home of Talent — home"
          className="relative block h-[56px] w-[80px] shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-tight.svg"
            alt="Home of Talent logo"
            fill
            priority
            sizes="74px"
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-ink transition-colors hover:text-copper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${site.name}`}
            className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-hairline text-sage transition-colors hover:border-copper hover:text-copper"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <Button href="/quote" variant="primary">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile: menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-hairline text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[76px] bottom-0 z-40 bg-charcoal transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <Container className="flex h-full flex-col py-8">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="border-b border-ondark/10">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="kicker text-copper">0{i + 1}</span>
                    <span className="font-display text-[26px] font-bold tracking-tight text-ondark">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto grid grid-cols-2 gap-3 pb-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-ondark/40 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-ondark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Button href="/quote" variant="primary" size="lg" className="py-4" onClick={() => setOpen(false)}>
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
