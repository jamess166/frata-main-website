import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "surface";
  id?: string;
}) {
  return (
    <section id={id} className={cn(tone === "surface" && "bg-surface", className)}>
      <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">{children}</div>
    </section>
  );
}
