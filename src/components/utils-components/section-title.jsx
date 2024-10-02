import React from "react";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  children,
  className,
  as: Component = "h2",
  ...props
}) {
  return (
    <Component
      className={cn(
        "text-3xl font-bold text-center my-8",
        "text-foreground dark:text-foreground",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}