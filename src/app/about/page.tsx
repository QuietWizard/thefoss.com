import SectionHeader from "../../components/SectionHeader";
import Tag from "../../components/Tag";
import Booking from "../../sections/Booking";
import { positioning, capabilityTiles, capabilityChips } from "../../constants";

export const metadata = {
  title: "About — Michael Foss",
};

const facts: [string, string][] = [
  ["Based", "Southern California"],
  ["Now", "Fractional CTO & AI automation"],
  ["Studio", "QuietWizard Studios"],
  ["Sites", "thefoss.com · michaelfoss.me"],
];

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex items-center justify-between gap-4 border-b border-ink-600 py-[11px] text-meta">
    <span className="text-paper-400">{k}</span>
    <span className="text-right text-paper-0">{v}</span>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <section className="pt-[64px]">
        <div className="grid grid-cols-1 items-start gap-[64px] lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">About</p>
            <h1 className="mt-[16px] font-display text-display-2 font-medium text-paper-0">
              Three decades of building things that had to work.
            </h1>
            <p className="mt-[22px] text-lede text-paper-200">
              Hi, I&rsquo;m Michael, a Southern California native who has spent the past 3 decades in programming
              and system engineering. I have a passion for creating innovative solutions that drive business
              success.
            </p>
            <p className="mt-[22px] text-body text-paper-300">{positioning}</p>
          </div>

          <div>
            <img
              src="/images/headshot.jpg"
              alt="Michael Foss"
              className="w-full max-w-[300px] rounded-lg object-cover grayscale-[.15]"
            />
            <div className="mt-[22px] flex flex-col">
              {facts.map(([k, v]) => (
                <Row key={k} k={k} v={v} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[96px]">
        <SectionHeader align="left" sub="🧰 The toolkit" title="What I Work On" />
        <div className="mt-[22px] flex flex-wrap gap-[7px]">
          {capabilityTiles.map((tile) => (
            <Tag key={tile.label} tone="accent">
              {tile.label}
            </Tag>
          ))}
          {capabilityChips.map((chip) => (
            <Tag key={chip}>{chip}</Tag>
          ))}
        </div>
      </section>

      <Booking sub="🗓️ Let's find a time" title="Book a Call" align="left" />
    </>
  );
}
