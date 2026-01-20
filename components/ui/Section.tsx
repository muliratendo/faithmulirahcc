import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: "white" | "gray" | "primary" | "gradient" | "hero";
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
}

export default function Section({
  children,
  id,
  background = "white",
  className = "",
  containerSize = "default",
}: SectionProps) {
  const backgroundStyles = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary-50",
    gradient: "bg-gradient-to-br from-primary-50 via-white to-secondary-50",
    hero: "bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-900 text-white",
  };

  const containerStyles = {
    default: "container mx-auto px-4",
    narrow: "container mx-auto px-4 max-w-4xl",
    wide: "container mx-auto px-4 max-w-7xl",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className={containerStyles[containerSize]}>{children}</div>
    </section>
  );
}
