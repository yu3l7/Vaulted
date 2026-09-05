import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "ghost" | "outline" | "bracket";
type Size = "sm" | "md" | "lg";

const base =
  "mono inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none rounded-none";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-5 text-xs",
  lg: "h-13 px-7 text-sm",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-accent-fg hover:bg-accent/90 hover:tracking-[0.12em] focus-visible:bg-accent/90",
  ghost: "text-fg hover:bg-fg/5",
  outline:
    "border border-border-bright text-fg hover:border-accent hover:text-accent",
  bracket:
    "border border-accent/40 bg-accent/5 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_24px_rgb(167_139_250/0.4)]",
};

export function Button({
  variant = "solid",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
