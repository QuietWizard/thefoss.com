import SectionHeader from "../components/SectionHeader";
import TimelineEntry from "../components/TimelineEntry";
import Reveal from "../components/Reveal";
import { roles } from "../constants";

const Timeline = () => {
  return (
    <section className="pt-[96px]">
      <SectionHeader sub="💼 My Career Overview" title="Professional Work Experience" />
      <Reveal className="mt-[44px] flex flex-col" stagger={0.15} y={16}>
        {roles.map((r, i) => (
          <TimelineEntry
            key={r.id}
            logo={r.logo}
            company={r.org}
            role={r.role}
            date={r.date}
            bullets={r.bullets}
            last={i === roles.length - 1}
          />
        ))}
      </Reveal>
    </section>
  );
};

export default Timeline;
