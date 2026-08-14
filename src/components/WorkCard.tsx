import Link from "next/link";
import GlowCard from "./GlowCard";
import Tag from "./Tag";

interface WorkCardProps {
  index?: string;
  title: string;
  meta?: string;
  blurb: string;
  tags?: string[];
  image?: string;
  href?: string;
}

const WorkCardInner = ({ index, title, meta, blurb, tags, image }: Omit<WorkCardProps, "href">) => (
  <GlowCard padding="p-[30px]" className="flex h-full flex-col">
    {image && (
      <div className="-mx-[30px] -mt-[30px] mb-[22px] h-[176px] overflow-hidden rounded-t-[14px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
    )}
    {index && <p className="font-display text-[15px] font-medium tracking-[.04em] text-amber-400">{index}</p>}
    <h3 className="mt-4 text-h3 font-semibold text-paper-0">{title}</h3>
    {meta && <p className="mt-[6px] text-meta text-paper-300">{meta}</p>}
    <p className="mt-[11px] text-body-sm text-paper-300">{blurb}</p>
    {tags && tags.length > 0 && (
      <div className="mt-[22px] flex flex-wrap gap-[7px]">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    )}
  </GlowCard>
);

const WorkCard = ({ href, ...rest }: WorkCardProps) => {
  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          <WorkCardInner {...rest} />
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full">
        <WorkCardInner {...rest} />
      </Link>
    );
  }
  return <WorkCardInner {...rest} />;
};

export default WorkCard;
