"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-950/40 hover:brightness-110 hover:scale-[1.02]",
  secondary:
    "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:scale-[1.02] card-glass",
  outline:
    "bg-transparent border-2 border-orange-500/60 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 hover:scale-[1.02]",
  gold:
    "bg-gradient-to-r from-amber-500 to-yellow-400 text-brand-black font-extrabold shadow-lg shadow-amber-900/30 hover:brightness-105 hover:scale-[1.02]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3 text-base sm:text-lg",
  xl: "px-9 py-4 text-lg sm:text-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-center gap-2 rounded-full font-bold cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.95 }}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileTap={{ scale: 0.95 }} {...(props as any)}>
      {children}
    </motion.button>
  );
}
