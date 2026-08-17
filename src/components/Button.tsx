"use client";

import type { MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "quiet" | "link" | "cta";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
  full?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

const sizePadding: Record<ButtonSize, string> = {
  sm: "px-[14px] py-2",
  md: "px-5 py-[10px]",
  lg: "px-6 py-[14px]",
};

const sizeText: Record<ButtonSize, string> = {
  sm: "text-meta",
  md: "text-ui",
  lg: "text-body-sm",
};

const variantClasses: Record<Exclude<ButtonVariant, "cta">, string> = {
  primary: "bg-amber-400 hover:bg-amber-300 text-amber-ink border-transparent",
  ghost: "bg-transparent border-ink-600 hover:border-amber-400 text-paper-0 hover:text-amber-400",
  quiet: "bg-ink-800 hover:bg-ink-750 border-ink-600 text-paper-0",
  link: "bg-transparent !p-0 border-transparent text-amber-400 hover:text-amber-300",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  arrow = false,
  full = false,
  className = "",
  target,
  rel,
}: ButtonProps) => {
  if (variant === "cta") {
    const Comp = href ? "a" : "button";
    return (
      <Comp
        href={href}
        onClick={onClick}
        type={href ? undefined : type}
        disabled={href ? undefined : disabled}
        target={target}
        rel={rel}
        className={`group relative inline-flex min-w-[220px] items-center overflow-hidden rounded-md bg-ink-700 px-4 py-4 lg:py-[18px] ${disabled ? "pointer-events-none opacity-45" : ""} ${className}`}
      >
        <span className="absolute top-1/2 -right-2.5 h-[120%] w-[120%] -translate-y-1/2 rounded-full bg-amber-400 transition-all duration-500 ease-[cubic-bezier(.71,.03,.34,1)] group-hover:right-2.5 group-hover:h-10 group-hover:w-10" />
        <span className="relative z-10 -translate-x-0 text-ui font-semibold tracking-[.08em] text-amber-ink uppercase transition-all duration-500 ease-[cubic-bezier(.71,.03,.34,1)] group-hover:-translate-x-[18px] group-hover:text-amber-400">
          {children}
        </span>
        <span className="absolute top-1/2 right-2.5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-base text-amber-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          ↗
        </span>
      </Comp>
    );
  }

  const base = `inline-flex items-center justify-center gap-[7px] rounded-md border font-semibold tracking-[.01em] transition-colors duration-[250ms] ease-[cubic-bezier(.4,0,.2,1)] ${sizePadding[size]} ${sizeText[size]} ${full ? "w-full flex" : ""} ${disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer"}`;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span className="inline-block transition-transform duration-[250ms] ease-[cubic-bezier(.71,.03,.34,1)] group-hover:translate-x-[3px]">
          →
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={`group ${classes}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  );
};

export default Button;
