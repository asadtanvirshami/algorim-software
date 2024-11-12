"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { size?: number, color?: string }
>(({ className, value = 10, size = 40, color = 'blue', ...props }, ref) => {
  const progress = Math.min(Math.max(value, 0), 100); // Ensure value is between 0 and 100

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* Full outline circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(${color} ${progress}%, gray 0)`, // Progress with a gray background
        }}
      />

      {/* Inner white circle to create ring effect */}
      <div
        className="absolute inset-[8%] rounded-full bg-card"
        style={{
          width: size * 0.84,  // Slightly smaller than outer ring to show outline effect
          height: size * 0.84,
        }}
      />

      {/* Center text showing progress percentage */}
      <span className="absolute text-[12px] font-[family-name:var(--font-redhat)] font-bold " style={{ color }}>
        {Math.round(progress)}%
      </span>
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
