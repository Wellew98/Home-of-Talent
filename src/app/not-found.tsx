import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Branded 404 (master brief s.46 acceptance criteria).
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-offwhite px-6 py-24">
      <Container>
        <div className="max-w-xl">
          <p className="kicker mb-4 text-copper">404 · Page not found</p>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.03] tracking-tight sm:text-[54px]">
            That page has moved out.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. The
            rest of the site is right here.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/quote" variant="outline">
              Get a Free Quote
            </Button>
          </div>
          <p className="mt-10 text-[14px] text-muted">
            Looking for a specific service?{" "}
            <Link href="/services" className="font-medium text-copper hover:underline">
              Browse all services
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
