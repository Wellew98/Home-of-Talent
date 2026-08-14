import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

const serviceLinks = [
  { label: "Interior Remodeling", href: "/services/interior-remodeling" },
  { label: "Kitchen & Bathroom", href: "/services/kitchen-bathroom" },
  { label: "Painting & Finishes", href: "/services/painting-finishes" },
  { label: "Exterior Maintenance", href: "/services/exterior-maintenance" },
  { label: "Garage & Storage", href: "/services/garage-storage" },
  { label: "Repairs & Maintenance", href: "/services/repairs-maintenance" },
];

const areaLinks = [
  { label: "Johannesburg", href: "/areas/johannesburg" },
  { label: "Sandton", href: "/areas/sandton" },
  { label: "Randburg", href: "/areas/randburg" },
  { label: "Fourways", href: "/areas/fourways" },
  { label: "Bedfordview", href: "/areas/bedfordview" },
  { label: "Midrand", href: "/areas/midrand" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal pb-28 pt-16 text-ondark lg:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand block */}
          <div>
            <Image
              src="/brand/logo-tight-dark.svg"
              alt="Home of Talent logo"
              width={96}
              height={68}
              className="mb-6"
            />
            <p className="max-w-xs text-[15px] leading-relaxed text-ondark-muted">
              {site.tagline}
            </p>
            <div className="mt-6 space-y-2 text-[15px]">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ondark-muted transition-colors hover:text-copper"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp us
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="block text-ondark-muted transition-colors hover:text-copper"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-ondark-muted transition-colors hover:text-copper"
              >
                {site.email}
              </a>
              <p className="text-ondark-muted">{site.hours}</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Services" links={serviceLinks} />
            <FooterCol title="Service Areas" links={areaLinks} />
            <FooterCol title="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ondark/15 pt-8 text-[13px] text-ondark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.address.city}, {site.address.region}, South Africa
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="kicker mb-5 text-ondark-muted">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-ondark-muted transition-colors hover:text-copper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
