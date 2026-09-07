import type { ReactNode } from "react";

import { SectionHeading } from "@/components/forum/shared/section-heading";

export type InfoSection = { title: string; paragraphs: string[]; bullets?: string[] };

export function InfoDocument({ eyebrow, title, description, sections, note }: { eyebrow: string; title: string; description: string; sections: InfoSection[]; note?: ReactNode }) {
  return (
    <div className="mx-auto max-w-[900px]">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {note ? <div className="mt-8">{note}</div> : null}
      <div className="mt-10 space-y-12">
        {sections.map((section, index) => (
          <section key={section.title} className="border-t border-[#edf0f3] pt-8 first:border-t-0 first:pt-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9ba4ad]">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 font-serif text-[28px] tracking-[-0.025em] text-[#2c3844]">{section.title}</h2>
            <div className="mt-4 space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-[#6f7b86]">{paragraph}</p>)}</div>
            {section.bullets ? <ul className="mt-5 space-y-2 border-l-2 border-[#e7ebee] pl-5 text-sm leading-7 text-[#6f7b86]">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul> : null}
          </section>
        ))}
      </div>
    </div>
  );
}
