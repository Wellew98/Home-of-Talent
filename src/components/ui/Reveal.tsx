/**
 * Reveal — subtle CSS fade/slide on load. Server component, zero JS.
 * (Master brief s.27 animations + s.29 "minimal JavaScript".)
 * Reduced-motion users get instant visibility via the global CSS override.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      data-reveal
    >
      {children}
    </div>
  );
}
