import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.15);

  const animClass = isVisible ? `animate-${animation}` : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className || ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
