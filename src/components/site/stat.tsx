import { cn } from "@/lib/utils";

export function Stat({
  value,
  suffix = "",
  label,
  className,
}: {
  value: number | string;
  suffix?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <p className="font-headline text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-foreground sm:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-[0.9375rem] text-muted-foreground">{label}</p>
    </div>
  );
}
