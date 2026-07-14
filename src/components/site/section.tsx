import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  hairline = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  hairline?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(hairline && "border-t border-border", className)}>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {children}
      </div>
    </section>
  );
}
