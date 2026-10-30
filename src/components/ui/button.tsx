import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full text-body font-normal transition duration-150 ease-apple active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-ink hover:bg-brand-secondary",
        secondary: "bg-surface-parchment text-ink hover:bg-surface-pearl",
        outline: "border border-hairline bg-surface-canvas text-ink hover:border-ink/25",
        ghost: "text-ink hover:bg-surface-parchment",
        link: "text-brand-link underline-offset-4 hover:underline",
        destructive: "bg-state-error text-ink-on-dark hover:opacity-90",
      },
      size: {
        default: "px-[22px] py-[11px]",
        sm: "min-h-9 px-3.5 py-2 text-caption",
        lg: "px-7 py-3.5 text-button-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button, buttonVariants };
