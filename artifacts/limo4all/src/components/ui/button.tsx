import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "white" | "primary-dark";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-caps text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(20,183,244,0.3)] hover:shadow-[0_0_25px_rgba(20,183,244,0.5)]": variant === "default",
            "border border-primary text-primary hover:bg-primary/10": variant === "outline",
            "border border-border bg-transparent hover:bg-white/5 text-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "bg-white text-background hover:bg-gray-100": variant === "white",
            "bg-background text-foreground border border-border hover:bg-border/50": variant === "primary-dark",
            "h-10 px-6 py-2": size === "default",
            "h-8 px-4 text-xs": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
