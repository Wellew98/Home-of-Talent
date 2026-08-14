import { Hammer, Wrench, Home, TreePine } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Trust bar — 4 items, simple line icons (master brief s.9).
 */
const items = [
  { icon: Home, label: "Home Improvements" },
  { icon: Wrench, label: "Repairs & Maintenance" },
  { icon: Hammer, label: "Renovations" },
  { icon: TreePine, label: "Outdoor Projects" },
];

export function TrustBar() {
  return (
    <section className="border-b border-hairline bg-offwhite">
      <Container>
        <ul className="grid grid-cols-2 divide-hairline lg:grid-cols-4 lg:divide-x">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-2 py-6 lg:justify-center lg:px-6"
            >
              <item.icon
                className="h-5 w-5 shrink-0 text-copper"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
