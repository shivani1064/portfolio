import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-md",
        accent: "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-20px_hsl(var(--accent))]",
        secondary: "bg-surface text-foreground hover:bg-surface-2 hover:-translate-y-0.5",
        outline: "border border-border bg-surface-2/40 text-foreground hover:bg-surface-2 hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-surface",
        link: "text-accent underline-offset-4 hover:underline px-0 h-auto",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12 px-6 text-[0.9375rem] rounded-full",
        sm: "h-10 px-5 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
