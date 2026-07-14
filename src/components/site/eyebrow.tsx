import { cn } from "@/lib/utils";

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
    >
      {index && <span className="mr-3 font-code text-primary">{index}</span>}
      {children}
    </p>
  );
}
