import { cn } from "@/lib/utils";

// Fades content in as it scrolls into view. The motion is driven by the
// scroll position in CSS (see .reveal in globals.css), so it tracks the
// user's scroll and never hides content where unsupported.
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  return <Tag className={cn("reveal", className)}>{children}</Tag>;
}
