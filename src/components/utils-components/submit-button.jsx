import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SubmitButton({ children, className, ...props }) {
  return (
    <Button
      type="submit"
      variant="outline"
      className={cn(
        "w-full sm:w-auto",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}