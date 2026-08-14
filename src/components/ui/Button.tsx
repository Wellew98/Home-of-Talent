import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.08em] text-[13px] transition-colors duration-200 select-none rounded-[2px]";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-white hover:bg-copper-dark",
  outline: "border border-ink/70 text-ink hover:border-copper hover:text-copper bg-transparent",
  "outline-dark":
    "border border-ondark/50 text-ondark hover:border-copper hover:text-copper bg-transparent",
  ghost: "text-ink hover:text-copper bg-transparent px-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3",
  lg: "px-7 py-4 text-[14px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if ("href" in props && props.href !== undefined) {
    const { href, variant = "primary", size = "md", className, ...rest } = props;
    const external =
      href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const cls = cn(base, variants[variant], sizes[size], className);
    if (external) {
      return <a href={href} className={cls} {...rest} />;
    }
    return <Link href={href} className={cls} {...rest} />;
  }

  const { variant = "primary", size = "md", className, ...rest } = props;
  return (
    <button
      type="button"
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
}
