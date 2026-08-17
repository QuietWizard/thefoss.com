import type { ReactNode } from "react";

const PlaceholderNote = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center gap-[7px] rounded-md border border-dashed border-amber-700 bg-[rgba(240,160,48,.06)] px-4 py-[11px] text-meta text-amber-400">
    <span aria-hidden>⚠︎</span>
    <span>{children}</span>
  </div>
);

export default PlaceholderNote;
