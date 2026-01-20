import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "service" | "team" | "info";
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  hover = true,
}: CardProps) {
  const baseStyles = "bg-white rounded-lg shadow-md overflow-hidden";

  const variantStyles = {
    default: "p-6",
    service: "p-6 border-t-4 border-primary",
    team: "p-0",
    info: "p-6 bg-primary-50 border-l-4 border-primary",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
