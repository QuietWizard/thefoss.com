import GlowCard from "../../components/GlowCard";
import Tag from "../../components/Tag";
import StatusPill from "../../components/StatusPill";
import Button from "../../components/Button";
import PlaceholderNote from "../../components/PlaceholderNote";
import { nextUpItems, currentStatuses } from "../../constants";

export const metadata = {
  title: "Now — Michael Foss",
};

export default function NowPage() {
  return (
    <section className="pt-[64px]">
      <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">Now</p>
      <h1 className="mt-[16px] font-display text-display-2 font-medium text-paper-0">
        What I&rsquo;m working on and where I&rsquo;ll be live.
      </h1>
      <div className="mt-[22px]">
        <PlaceholderNote>Layout only — no streams or sessions scheduled yet.</PlaceholderNote>
      </div>

      <div className="mt-[44px] grid grid-cols-1 gap-[44px] lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-h3 font-semibold text-paper-0">Next up</h2>
          <div className="mt-[22px] flex flex-col gap-[16px]">
            {nextUpItems.map((item, i) => (
              <GlowCard key={i} glow={i === 0} padding="p-[22px]">
                <div className="flex items-center justify-between gap-4">
                  <Tag tone={item.tone}>{item.tag}</Tag>
                  <span className="text-meta text-paper-400">{item.meta}</span>
                </div>
                <p className="mt-[11px] text-body-sm text-paper-300">{item.title}</p>
                <p className="mt-1 text-meta text-paper-400">{item.date}</p>
                <div className="mt-[16px]">
                  <Button variant="ghost" size="sm">
                    Set reminder
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-h3 font-semibold text-paper-0">Currently</h2>
          <div className="mt-[22px] flex flex-col gap-[11px]">
            {currentStatuses.map((status) => (
              <StatusPill key={status.text} live={status.live}>
                {status.text}
              </StatusPill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
