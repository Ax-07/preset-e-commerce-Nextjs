import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/utils/tailwind_cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        rounded: "flex items-center justify-center border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 rounded-full aspect-square",
        roundedOutline: "flex items-center justify-center border-primary text-primary shadow rounded-full aspect-square border"

      },
      size: {
        default: "",
        xs: "h-4 p-0 text-[10px]",
        sm: "py-0.125 text-[10px]",
        lg: "text-md",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
