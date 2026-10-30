import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text?: string;
  variant?: "primary" | "blue" | "secondary" | "dark";
  onClick?: () => void;
  icon?: React.ReactNode | null;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
};

const sizeClasses = {
  xs: "text-fine",
  sm: "text-caption",
  md: "text-body",
  lg: "text-button-lg",
};

const Button = ({
  text,
  variant = "primary",
  onClick,
  icon,
  iconPosition = "left",
  href,
  size = "md",
  className,
}: ButtonProps) => {
  const variantClasses = {
    primary: "btn-primary",
    blue: "btn-primary",
    secondary: "btn-secondary",
    dark: "btn-dark",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {text ? <span className={sizeClasses[size]}>{text}</span> : null}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cn(variantClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn(variantClasses, className)}>
      {content}
    </button>
  );
};

export default Button;
