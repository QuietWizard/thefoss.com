interface SectionHeaderProps {
  title: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeader = ({ title, sub, align = "center", className = "" }: SectionHeaderProps) => {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-[11px] ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {sub && (
        <div className="inline-flex items-center gap-[7px] rounded-pill border border-ink-600 bg-ink-800 px-[14px] py-[6px] text-meta text-paper-200">
          {sub}
        </div>
      )}
      <h2 className="max-w-[18ch] font-display text-[26px] leading-[1.15] font-medium tracking-h text-paper-0 sm:text-[30px] md:text-display-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
