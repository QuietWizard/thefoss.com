import SectionHeader from "../components/SectionHeader";
import TechCard from "../components/TechCard";
import Tag from "../components/Tag";
import Reveal from "../components/Reveal";
import { capabilityTiles, capabilityChips } from "../constants";

const Capabilities = () => {
  return (
    <section className="pt-[96px]">
      <SectionHeader sub="🤝 What I Bring to the Table" title="How I Can Contribute" />
      <Reveal className="mt-[44px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
        {capabilityTiles.map((tile) => (
          <TechCard key={tile.label} label={tile.label} icon={tile.icon} />
        ))}
      </Reveal>
      <div className="mt-[22px] flex flex-wrap justify-center gap-[7px]">
        {capabilityChips.map((chip) => (
          <Tag key={chip}>{chip}</Tag>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
