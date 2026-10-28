import { cn } from "@/lib/utils";

// Short kicker above a heading: sentence case, set in the brand colour.
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-[0.9375rem] font-semibold text-primary", className)}>{children}</p>;
}
