import GlowCard from "./GlowCard";

interface TimelineEntryProps {
  logo?: string | null;
  company: string;
  role: string;
  date: string;
  bullets?: string[];
  image?: string;
  last?: boolean;
}

const TimelineEntry = ({ logo, company, role, date, bullets, image, last = false }: TimelineEntryProps) => {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-[44px]">
      <div className="flex flex-col items-center">
        <div className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full border border-ink-600 bg-ink-800">
          {logo ? (
            <img src={logo} alt={company} className="h-[42px] w-[42px] object-contain" />
          ) : (
            <span className="font-display text-[20px] font-medium text-amber-400">{company.charAt(0)}</span>
          )}
        </div>
        {!last && <div className="mt-2 min-h-[40px] w-[2px] flex-1" style={{ background: "var(--rail-gradient)" }} />}
      </div>
      <div className={last ? "pb-0" : "pb-[64px]"}>
        <h3 className="text-h2 font-semibold text-paper-0">{role}</h3>
        <p className="mt-1 text-h3 text-amber-400">{company}</p>
        <p className="mt-[11px] text-meta text-paper-300">🗓️&nbsp;{date}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-[11px] flex flex-col gap-[11px] pl-5 text-body-sm text-paper-200">
            {bullets.map((b) => (
              <li key={b} className="list-disc">
                {b}
              </li>
            ))}
          </ul>
        )}
        {image && (
          <GlowCard padding="p-[11px]" glow={false} className="mt-[22px]">
            <img src={image} alt={company} className="w-full rounded-[8px] object-cover" />
          </GlowCard>
        )}
      </div>
    </div>
  );
};

export default TimelineEntry;
