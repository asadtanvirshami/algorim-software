"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    size?: number;
    value?: number;
  }
>(({ className, value = 10, size = 40, ...props }, ref) => {
  const [animatedValue, setAnimatedValue] = React.useState(0);

  React.useEffect(() => {
    // Animate to the new value smoothly
    let animationFrame: number;
    const animateProgress = () => {
      setAnimatedValue((prev) => {
        if (prev < (value ?? 0)) {
          return Math.min(prev + 1, value ?? 0); // Increment towards the target value
        }
        if (prev > (value ?? 0)) {
          return Math.max(prev - 1, value ?? 0); // Decrement towards the target value
        }
        return prev;
      });
      animationFrame = requestAnimationFrame(animateProgress);
    };

    animateProgress();

    return () => cancelAnimationFrame(animationFrame); // Clean up on unmount
  }, [value]);

  const progress = Math.min(Math.max(animatedValue, 0), 100); // Clamp progress between 0 and 100

  // Function to dynamically determine color
  const getColor = (progress: number): string => {
    if (progress < 20) return "red"; // Purple
    if (progress < 30) return "orange";
    if (progress < 50) return "lightpurple";
    if (progress < 60) return "yellow";
    if (progress === 100) return "green";
    return "red"; // Default
  };

  const color = getColor(progress);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* Full outline circle with glowing effect */}
      <div
        className="absolute inset-0 rounded-full shadow-lg animate-pulse"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(${color} ${progress}%, gray 0)`,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`, // Glowing effect
        }}
      />

      {/* Inner white circle to create ring effect */}
      <div
        className="absolute inset-[8%] rounded-full bg-card"
        style={{
          width: size * 0.84, // Slightly smaller than outer ring to show outline effect
          height: size * 0.84,
        }}
      />

      {/* Center text showing progress percentage */}
      <span
        className="absolute text-[12px] font-[family-name:var(--font-redhat)] font-bold"
        style={{ color }}
      >
        {Math.round(progress)}%
      </span>
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
