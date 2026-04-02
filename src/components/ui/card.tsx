import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const hasCustomBackground = className ? /(^|\s)bg-[^\s]+/.test(className) : false;
  const hasCustomBorder = className ? /(^|\s)border([-\s][^\s]*)?/.test(className) : false;
  const hasCustomShadow = className ? /(^|\s)shadow([-\s][^\s]*)?/.test(className) : false;

  return (
    <div
      className={cn(
        "rounded-[20px]",
        !hasCustomBorder && "border border-[#E4EAED]",
        !hasCustomBackground && "bg-white",
        !hasCustomShadow && "shadow-[0_14px_40px_rgba(0,75,98,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-6 sm:p-8", className)} {...props} />;
}

export { Card, CardContent };
