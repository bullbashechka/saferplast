import * as React from "react";

import { cn } from "@/lib/utils";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type">;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <span className="relative inline-flex h-[18px] w-[18px] shrink-0">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer appearance-none rounded-[4px] opacity-0 outline-none",
          className,
        )}
        {...props}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[4px] border border-white bg-transparent transition-colors peer-checked:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-white/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#004B62]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 m-auto h-[12px] w-[12px] scale-0 text-[#004B62] transition-transform duration-150 ease-out peer-checked:scale-100"
        fill="none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 8.25L6.5 11.25L12.5 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </span>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
