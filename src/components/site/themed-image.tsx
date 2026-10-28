import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

// next/image with an optional dark-mode variant: both are rendered and CSS
// shows the one matching the visitor's colour scheme.
export function ThemedImage({ darkSrc, className, ...props }: ImageProps & { darkSrc?: string }) {
  if (!darkSrc) return <Image className={className} {...props} />;
  return (
    <>
      <Image className={cn(className, "dark:hidden")} {...props} />
      <Image className={cn(className, "hidden dark:block")} {...props} src={darkSrc} />
    </>
  );
}
