import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-8 border-b border-[#edf0f3] pb-8 max-md:items-start max-md:flex-col max-md:gap-5">
      <div className="max-w-[760px]">
        {eyebrow ? <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86919d]">{eyebrow}</p> : null}
        <h1 className="font-serif text-[38px] leading-[1.12] tracking-[-0.03em] text-[#243140] max-md:text-[32px]">{title}</h1>
        {description ? <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#74808c]">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
