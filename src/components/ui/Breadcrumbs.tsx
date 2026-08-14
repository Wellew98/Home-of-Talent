import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

/**
 * Breadcrumbs + BreadcrumbList schema (master brief s.17).
 */
export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  const schemaItems = [{ name: "Home", item: `${site.url}/` }];
  let path = "";
  for (const item of items) {
    path = item.href ? `${site.url}${item.href}` : `${path}/${item.label.toLowerCase()}`;
    schemaItems.push({ name: item.label, item: path });
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: schemaItems.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.item,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-copper">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-sage" aria-hidden />
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-copper">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
