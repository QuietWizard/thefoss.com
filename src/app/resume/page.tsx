"use client";

import type { ReactNode } from "react";
import Button from "../../components/Button";
import { roles, positioning } from "../../constants";

const ResumeBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-[28px]">
    <h2 className="border-b border-[#ddd] pb-2 text-[11px] font-semibold tracking-[.16em] text-[#8A5620] uppercase">
      {title}
    </h2>
    <div className="mt-3">{children}</div>
  </div>
);

const capabilitiesLine =
  "Technology Strategy · Cloud Architecture (Azure / AWS) · eCommerce Platforms · DevOps & CI/CD · ERP / OMS / WMS Integrations · Digital Transformation · AI & Automation · Agile Delivery · UI/UX · Team Building & Mentorship · Cybersecurity Governance";

export default function ResumePage() {
  return (
    <section className="pt-[64px] pb-[64px]">
      <div className="mf-nonprint flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-display-3 font-medium text-paper-0">Resume</h1>
          <p className="mt-1 text-meta text-paper-300">US Letter · prints black on white</p>
        </div>
        <div className="flex gap-[13px]">
          <Button variant="ghost" onClick={() => window.print()}>
            Print
          </Button>
          <Button href="https://calendly.com/michaelfoss" target="_blank" rel="noopener noreferrer">
            Book a call
          </Button>
        </div>
      </div>

      <div className="mf-sheet mx-auto mt-[30px] max-w-[8.5in] rounded-sm px-[60px] py-[56px]">
        <header className="border-b-2 border-[#111] pb-4">
          <h2 className="font-display text-[34px] tracking-[-.02em] text-[#111]">Michael Foss</h2>
          <p className="mt-1 text-[13px] font-semibold tracking-[.08em] text-[#8A5620] uppercase">
            Chief Technology Officer · Engineering &amp; eCommerce Leader
          </p>
          <p className="mt-2 text-[11.5px] text-[#444]">
            Southern California · thefoss.com · michaelfoss.me · linkedin.com/in/themichaelfoss ·
            calendly.com/michaelfoss
          </p>
        </header>

        <ResumeBlock title="Summary">
          <p className="text-[12px] leading-[1.55] text-[#333]">{positioning}</p>
        </ResumeBlock>

        <ResumeBlock title="Experience">
          <div className="flex flex-col gap-4">
            {roles.map((r) => (
              <div key={r.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[13px] font-semibold text-[#111]">
                    {r.role} — {r.org}
                  </p>
                  <p className="text-[11px] whitespace-nowrap text-[#555]">{r.date}</p>
                </div>
                <ul className="mt-1 flex flex-col gap-1 pl-4 text-[12px] leading-[1.55] text-[#333]">
                  {r.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="list-disc">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock title="Capabilities">
          <p className="text-[12px] leading-[1.55] text-[#333]">{capabilitiesLine}</p>
        </ResumeBlock>
      </div>
    </section>
  );
}
