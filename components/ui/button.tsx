import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors duration-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc917] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#003D7C] to-[#001F3F] text-white shadow-xs hover:cursor-pointer",
          outline:
          "border border-[#003D7C] text-white hover:bg-[#ffc917] hover:text-white",
        ghost:
          "bg-transparent text-white hover:bg-[#ffc917] hover:text-white",
        link:
          "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-full tracking-[2px] capitalize",
        md: "h-8 px-3 rounded-md text-sm gap-1.5",
        lg: "h-10 px-6 rounded-md text-base capitalize",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
