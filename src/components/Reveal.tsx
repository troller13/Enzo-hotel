"use client";
import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const dirClass: Record<string, string> = {
    up: "from-up",
    down: "from-down",
    left: "from-left",
    right: "from-right",
    scale: "scale",
  };

  return (
    <div ref={ref} className={`reveal ${dirClass[direction]} ${className}`}>
      {children}
    </div>
  );
}
