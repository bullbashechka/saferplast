import * as React from "react";

import { cn } from "@/lib/utils";

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid gap-3", className)} {...props} />;
}

type FieldProps = React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};

function Field({ className, orientation = "vertical", ...props }: FieldProps) {
  return (
    <div
      className={cn(
        "grid",
        orientation === "horizontal" ? "grid-cols-[auto_1fr] items-center gap-3" : "gap-2",
        className,
      )}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("font-body text-[14px] font-normal leading-[1.2]", className)} {...props} />;
}

export { Field, FieldGroup, FieldLabel };
