import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-oklch(0.923 0.003 48.717) bg-oklch(1 0 0) px-3 py-2 text-base ring-offset-oklch(1 0 0) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-oklch(0.147 0.004 49.25) placeholder:text-oklch(0.553 0.013 58.071) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oklch(0.709 0.01 56.259) focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-oklch(1 0 0 / 10%) dark:border-oklch(1 0 0 / 15%) dark:bg-oklch(0.147 0.004 49.25) dark:ring-offset-oklch(0.147 0.004 49.25) dark:file:text-oklch(0.985 0.001 106.423) dark:placeholder:text-oklch(0.709 0.01 56.259) dark:focus-visible:ring-oklch(0.553 0.013 58.071)",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
