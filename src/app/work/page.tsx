import WorkCard from "../../components/WorkCard";
import GlowCard from "../../components/GlowCard";
import Button from "../../components/Button";
import Reveal from "../../components/Reveal";
import { roles } from "../../constants";

export const metadata = {
  title: "Work — Michael Foss",
};

export default function WorkPage() {
  const caseStudyRole = roles.find((r) => r.caseStudy);

  return (
    <section className="pt-[64px] pb-[44px]">
      <div className="max-w-[760px]">
        <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">Selected work · 2017 — 2026</p>
        <h1 className="mt-[16px] font-display text-display-2 font-medium text-paper-0">Platforms, migrations and teams.</h1>
        <p className="mt-[22px] text-lede text-paper-300">
          Five engagements, from a two-person startup to enterprise storefronts serving US and international markets.
          Each one started with a system nobody could reason about anymore.
        </p>
      </div>

      <Reveal className="mt-[44px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {roles.map((r) => (
          <WorkCard
            key={r.id}
            index={r.index}
            title={r.company}
            meta={`${r.role} · ${r.date}`}
            blurb={r.blurb}
            tags={r.tags}
            image={r.image}
            href={r.caseStudy ? "/work/zymo-research" : r.link}
          />
        ))}

        {caseStudyRole && (
          <GlowCard glow={false} padding="p-[30px]" className="flex flex-col justify-between">
            <div>
              <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">Case study</p>
              <h3 className="mt-4 text-h3 font-semibold text-paper-0">Read the deep one</h3>
              <p className="mt-[11px] text-body-sm text-paper-300">
                A full breakdown of the {caseStudyRole.company} migration — the situation, what I did, and the
                result.
              </p>
            </div>
            <div className="mt-[22px]">
              <Button href="/work/zymo-research" variant="ghost" arrow>
                Read the case study
              </Button>
            </div>
          </GlowCard>
        )}
      </Reveal>
    </section>
  );
}
