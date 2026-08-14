"use client";

import { useRef, type MouseEvent, type ReactNode, type CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  padding?: string;
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
}

const GlowCard = ({ children, padding = "p-[30px]", glow = true, className = "", style }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    el.style.setProperty("--start", (angle + 60).toString());
  };

  return (
    <div
      ref={ref}
      onMouseMove={glow ? handleMouseMove : undefined}
      className={`${glow ? "mf-glow " : ""}rounded-card border border-ink-600 bg-ink-800 ${padding} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlowCard;
