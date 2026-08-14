import type { ReactNode } from "react";

interface StatusPillProps {
  children: ReactNode;
  live?: boolean;
  className?: string;
}

const StatusPill = ({ children, live = true, className = "" }: StatusPillProps) => (
  <div
    className={`inline-flex items-center gap-[9px] rounded-pill border border-ink-600 bg-ink-800 px-4 py-[7px] text-meta text-paper-100 ${className}`}
  >
    <span
      className={`h-[7px] w-[7px] rounded-full ${live ? "bg-amber-400" : "bg-paper-400"}`}
      style={live ? { boxShadow: "0 0 0 4px rgba(240,160,48,.18)" } : undefined}
    />
    {children}
  </div>
);

export default StatusPill;
