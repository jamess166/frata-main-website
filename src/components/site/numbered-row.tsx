import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  const step = Number.parseInt(index, 10);
  const body = (
    <div
      className={cn(
        "group grid gap-3 border-t border-border py-7 first:border-t-0 md:grid-cols-[3rem_1fr] md:gap-6",
        className
      )}
    >
      <span className="font-headline text-title text-primary">{Number.isNaN(step) ? index : step}</span>
      <div>
        <h3 className="font-headline text-title text-foreground">{title}</h3>
        {description && (
          <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">{description}</p>
        )}
        {href && cta && (
          <span className="link-more mt-3 text-[1.0625rem]">
            {cta}
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {body}
      </Link>
    );
  }
  return body;
}
