import { cn } from "@/lib/utils";

/**
 * SectionHeading — numbered kicker + bold title + lead (master brief s.26).
 * "01 / SERVICES / Everything your home needs."
 */
export function SectionHeading({
  number,
  label,
  title,
  lead,
  dark = false,
  align = "left",
  className,
}: {
  number?: string;
  label?: string;
  title: string;
  lead?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(number || label) && (
        <p
          className={cn(
            "kicker mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
            dark ? "text-copper" : "text-sage",
          )}
        >
          {number && <span>{number}</span>}
          {number && label && <span className="h-px w-8 bg-current opacity-50" aria-hidden />}
          {label && <span>{label}</span>}
        </p>
      )}
      <h2
        className={cn(
          "text-[34px] leading-[1.04] sm:text-[44px]",
          dark ? "text-ondark" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed",
            dark ? "text-ondark-muted" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
