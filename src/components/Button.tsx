"use client";

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label: string;
  href?: string;
  iconPosition?: "left" | "right";
  bordered?: boolean;
  withIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  bordered = false,
  className = "",
  onClick,
}) => {
  const baseClasses = `group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-sm font-medium focus:outline-none focus:ring transition-all`;
  const colorClasses = bordered
    ? "border border-current text-indigo-600 active:text-indigo-500"
    : "bg-indigo-600 text-white active:bg-indigo-500";

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`${baseClasses} ${colorClasses} ${className}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </Component>
  );
};

export default Button;
