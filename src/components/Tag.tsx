import type { ReactNode } from "react";

type TagTone = "neutral" | "accent" | "solid";

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  className?: string;
}

const toneClasses: Record<TagTone, string> = {
  neutral: "text-paper-100 border-ink-600 bg-transparent",
  accent: "text-amber-400 border-amber-700 bg-[rgba(240,160,48,.07)]",
  solid: "text-amber-ink border-transparent bg-amber-400",
};

const Tag = ({ children, tone = "neutral", className = "" }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-sm border px-[9px] py-[4px] text-micro font-normal tracking-wide whitespace-nowrap uppercase ${toneClasses[tone]} ${className}`}
  >
    {children}
  </span>
);

export default Tag;
