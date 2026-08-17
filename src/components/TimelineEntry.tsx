import Image from "next/image";
import GlowCard from "./GlowCard";

interface TimelineEntryProps {
  logo?: string | null;
  company: string;
  role: string;
  date: string;
  blurb: string;
  bullets?: string[];
  image?: string;
  last?: boolean;
}

const TimelineEntry = ({ logo, company, role, date, blurb, bullets, image, last = false }: TimelineEntryProps) => {
  return (
    <div className="grid grid-cols-[56px_1fr] gap-[20px] sm:grid-cols-[80px_1fr] sm:gap-[44px]">
      <div className="flex flex-col items-center">
        <div className="flex h-[56px] w-[56px] flex-none items-center justify-center rounded-full border border-ink-600 bg-ink-800 sm:h-[72px] sm:w-[72px]">
          {logo ? (
            <Image
              src={logo}
              alt={company}
              width={42}
              height={42}
              className="h-[32px] w-[32px] object-contain sm:h-[42px] sm:w-[42px]"
            />
          ) : (
            <span className="font-display text-[16px] font-medium text-amber-400 sm:text-[20px]">{company.charAt(0)}</span>
          )}
        </div>
        <div className="mt-2 min-h-[40px] w-[2px] flex-1" style={{ background: "var(--rail-gradient)" }} />
      </div>
      <div className={last ? "pb-0" : "pb-[64px]"}>
        <h3 className="text-h2 font-semibold text-paper-0">{role}</h3>
        <p className="mt-1 text-h3 text-amber-400">{company}</p>
        <p className="mt-[11px] text-meta text-paper-300">🗓️&nbsp;{date}</p>
        <p className="mt-[11px] text-body-sm text-paper-200">{blurb}</p>
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
            <Image
              src={image}
              alt={company}
              width={1600}
              height={921}
              sizes="(max-width: 820px) 100vw, 820px"
              className="h-auto w-full rounded-[8px] object-cover"
            />
          </GlowCard>
        )}
      </div>
    </div>
  );
};

export default TimelineEntry;
