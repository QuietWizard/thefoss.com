"use client";

import { useState } from "react";
import type { StackLogo } from "../constants";

interface LogoMarqueeProps {
  logos: StackLogo[];
  height?: number;
  speed?: number;
}

const MarqueeItem = ({ logo, height }: { logo: StackLogo; height: number }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span style={{ fontSize: height * 0.52 }} className="font-semibold text-paper-200 opacity-65">
        {logo.name}
      </span>
    );
  }

  return (
    <img
      src={logo.src}
      alt={logo.name}
      style={{ height }}
      onError={() => setFailed(true)}
      className={`opacity-65 ${logo.invert ? "brightness-0 invert" : "grayscale"}`}
    />
  );
};

const LogoMarquee = ({ logos, height = 34, speed = 32 }: LogoMarqueeProps) => {
  const doubled = [...logos, ...logos];

  return (
    <div className="mf-marquee relative overflow-hidden py-[22px]">
      <div className="mf-marquee-track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((logo, i) => (
          <MarqueeItem key={`${logo.name}-${i}`} logo={logo} height={height} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-36" style={{ background: "var(--edge-fade-left)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-36" style={{ background: "var(--edge-fade-right)" }} />
    </div>
  );
};

export default LogoMarquee;
