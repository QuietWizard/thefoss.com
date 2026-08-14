"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

interface GlowCardProps {
  card: string;
  index: number;
  children: ReactNode;
}

const GlowCard = ({ index, children }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number, e: MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", (angle + 60).toString());
  };

  return (
    <div
      ref={(el) => { cardRefs.current[index] = el; }}
      onMouseMove={(e) => handleMouseMove(index, e)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default GlowCard;
