import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NumberedRow({
  index,
  title,
  description,
  href,
  cta,
  className,
}: {
  index: string;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  className?: string;
}) {
  const body = (
    <div
      className={cn(
        "group grid gap-4 border-t border-border py-8 md:grid-cols-[90px_1fr_auto] md:items-baseline md:gap-8 lg:py-10",
        className
      )}
    >
      <span className="font-code text-sm text-muted-foreground transition-colors group-hover:text-primary">
        {index}
      </span>
      <div>
        <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
          {title}
        </h3>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {href && (
        <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{body}</Link>;
  }
  return body;
}
