import type { ReactNode } from "react";
import Image from "next/image";
import Button from "../../../components/Button";
import Tag from "../../../components/Tag";
import GlowCard from "../../../components/GlowCard";
import { roles } from "../../../constants";

export const metadata = {
  title: "Zymo Research case study — Michael Foss",
};

const facts: [string, string][] = [
  ["Role", "Web Development Manager"],
  ["Dates", "May 2018 – Nov 2021"],
  ["Scope", "US + International storefronts"],
  ["Stack", "Magento → Shopify Plus, Azure, AWS"],
];

const Chapter = ({ n, title, children }: { n: string; title: string; children: ReactNode }) => (
  <div className="grid grid-cols-[64px_1fr] gap-[22px] pb-[64px]">
    <p className="font-display text-[15px] font-medium text-amber-400">{n}</p>
    <div>
      <h2 className="text-h1 font-medium text-paper-0">{title}</h2>
      <div className="mt-[16px] text-body text-paper-300">{children}</div>
    </div>
  </div>
);

export default function ZymoCaseStudyPage() {
  const zymo = roles.find((r) => r.id === "zymo")!;

  return (
    <section className="pt-[64px] pb-[64px]">
      <Button href="/work" variant="link">
        ← All work
      </Button>

      <div className="mt-[22px] flex items-center gap-[16px]">
        {zymo.logo && <Image src={zymo.logo} alt="Zymo Research" width={48} height={48} className="h-12 w-12 rounded-full object-contain" />}
        <Tag tone="accent">Case study</Tag>
      </div>

      <h1 className="mt-[16px] max-w-[820px] font-display text-[28px] leading-[1.15] font-medium tracking-h text-paper-0 sm:text-[36px] md:text-display-2">
        Moving two storefronts off Magento — without pausing the business.
      </h1>

      <div className="mt-[44px] grid grid-cols-2 border-y border-ink-600 md:grid-cols-4">
        {facts.map(([key, value], i) => (
          <div key={key} className={`p-[22px] ${i > 0 ? "border-ink-600 md:border-l" : ""}`}>
            <p className="text-micro font-semibold tracking-label text-paper-300 uppercase">{key}</p>
            <p className="mt-1 text-body-sm text-paper-0">{value}</p>
          </div>
        ))}
      </div>

      {zymo.image && (
        <Image
          src={zymo.image}
          alt="Zymo Research storefront"
          width={1600}
          height={921}
          sizes="(max-width: 1180px) 100vw, 1180px"
          priority
          className="mt-[44px] h-auto w-full rounded-card border border-ink-600"
        />
      )}

      <div className="mx-auto mt-[64px] max-w-[820px]">
        <Chapter n="01" title="The situation">
          <p>
            Zymo Research was running US and international storefronts on Magento, held together by internal
            tooling and integrations that had grown organically over years. I was brought in to manage the web
            development function and figure out where all of it was actually going to break next — the
            storefronts themselves, and the Azure and AWS infrastructure behind them.
          </p>
        </Chapter>
        <Chapter n="02" title="What I did">
          <ul className="flex flex-col gap-[11px] pl-5">
            {zymo.bullets.map((b) => (
              <li key={b} className="list-disc">
                {b}
              </li>
            ))}
          </ul>
        </Chapter>
        <Chapter n="03" title="The result">
          <p>
            Both storefronts run on Shopify Plus today, and the infrastructure behind them moved from one-off
            scripts to a single, coherent set of CI/CD pipelines across Azure and AWS.
          </p>
          <GlowCard glow={false} padding="p-[22px]" className="mt-[22px] !border-dashed !border-amber-700">
            <p className="text-meta text-amber-400">
              Increased web revenue from $7 million to over $30 million during my 3 years at Zymo, while also reducing the number of support tickets and engineering hours required to maintain the storefronts.
            </p>
          </GlowCard>
        </Chapter>
      </div>
    </section>
  );
}
