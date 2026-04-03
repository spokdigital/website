"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-oklch(1 0 0) transition-colors hover:bg-oklch(0.97 0.001 106.424) hover:text-oklch(0.553 0.013 58.071) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oklch(0.709 0.01 56.259) focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-oklch(0.97 0.001 106.424) data-[state=on]:text-oklch(0.216 0.006 56.043) [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2 dark:ring-offset-oklch(0.147 0.004 49.25) dark:hover:bg-oklch(0.268 0.007 34.298) dark:hover:text-oklch(0.709 0.01 56.259) dark:focus-visible:ring-oklch(0.553 0.013 58.071) dark:data-[state=on]:bg-oklch(0.268 0.007 34.298) dark:data-[state=on]:text-oklch(0.985 0.001 106.423)",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-oklch(0.923 0.003 48.717) bg-transparent hover:bg-oklch(0.97 0.001 106.424) hover:text-oklch(0.216 0.006 56.043) dark:border-oklch(1 0 0 / 15%) dark:hover:bg-oklch(0.268 0.007 34.298) dark:hover:text-oklch(0.985 0.001 106.423)",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
