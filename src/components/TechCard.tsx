"use client";

import { useState } from "react";

interface TechCardProps {
  label: string;
  icon?: string;
  shape?: "pill" | "card";
}

const TechCard = ({ label, icon, shape = "pill" }: TechCardProps) => {
  const [hot, setHot] = useState(false);

  return (
    <div
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      className={`relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden border bg-ink-800 px-[22px] py-[30px] text-center transition-colors duration-700 ease-[cubic-bezier(.4,0,.2,1)] ${
        shape === "pill" ? "rounded-pill" : "rounded-card"
      } ${hot ? "border-amber-700" : "border-ink-600"}`}
    >
      <div
        className={`absolute left-0 h-full w-full bg-ink-750 transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] ${
          hot ? "bottom-0" : "bottom-[-100%]"
        }`}
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        {icon ? (
          <img
            src={icon}
            alt=""
            className={`h-14 w-14 object-contain transition-all duration-300 ${hot ? "grayscale-0" : "grayscale-[.4]"}`}
          />
        ) : (
          <span className="font-display text-[30px] font-medium text-amber-400">{label.charAt(0)}</span>
        )}
        <p className={`text-body-sm font-semibold ${hot ? "text-paper-0" : "text-paper-200"}`}>{label}</p>
      </div>
    </div>
  );
};

export default TechCard;
