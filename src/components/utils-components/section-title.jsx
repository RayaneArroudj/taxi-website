import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  children,
  className,
  as: Component = "h2",
  ...props
}) {
  return (
    <Component
      className={cn(
        "xs:text-3xl font-bold text-center xs:my-8",
        "text-foreground dark:text-foreground",
        "transition-colors duration-200 pb-2 ",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
