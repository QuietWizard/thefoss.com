import WorkCard from "../components/WorkCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { roles } from "../constants";

const FeaturedWork = () => {
  return (
    <section className="pt-[64px]">
      <Reveal className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {roles.slice(0, 3).map((r) => (
          <WorkCard
            key={r.id}
            title={r.company}
            meta={`${r.role} · ${r.date}`}
            blurb={r.blurb}
            tags={r.tags.slice(0, 3)}
            href={r.caseStudy ? "/work/zymo-research" : "/work"}
          />
        ))}
      </Reveal>
      <div className="mt-[30px] flex justify-center">
        <Button href="/work" variant="link" arrow>
          All work
        </Button>
      </div>
    </section>
  );
};

export default FeaturedWork;
