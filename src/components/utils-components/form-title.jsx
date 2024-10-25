import React from "react";
import { cn } from "@/lib/utils";

export default function FormTitle({ children, className, as: Component = "h3", ...props }) {
  return (
    <Component
      className={cn(
        "text-lg font-semibold text-center",
        "text-foreground dark:text-foreground",
        "mb-4",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}