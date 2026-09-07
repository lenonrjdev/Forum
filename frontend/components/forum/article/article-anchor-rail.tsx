"use client";

import { AlignLeft, BookOpenText, Code2, Lightbulb, MessageSquareText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ArticleSaveButton, ArticleShareButton } from "@/components/forum/article/article-actions";

const baseAnchors = [
  { id: "resumo", label: "Início do artigo", icon: AlignLeft },
  { id: "artigo", label: "Conteúdo principal", icon: BookOpenText },
  { id: "codigo", label: "Exemplo de código", icon: Code2 },
  { id: "insight", label: "Insight Ateliux", icon: Lightbulb },
  { id: "discussao", label: "Discussão", icon: MessageSquareText },
];

export function ArticleAnchorRail({ slug, title, hasCode, hasInsight }: { slug: string; title: string; hasCode: boolean; hasInsight: boolean }) {
  const anchors = useMemo(() => baseAnchors.filter((anchor) => (anchor.id !== "codigo" || hasCode) && (anchor.id !== "insight" || hasInsight)), [hasCode, hasInsight]);
  const [activeSection, setActiveSection] = useState("resumo");

  useEffect(() => {
    const sections = anchors.map((anchor) => document.getElementById(anchor.id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [anchors]);

  return (
    <aside className="border-r border-[#e5e5e1] bg-white max-lg:border-b max-lg:border-r-0">
      <nav aria-label="Navegação do artigo" className="sticky top-[82px] flex min-h-[calc(100vh-82px)] flex-col items-center justify-between py-5 max-lg:static max-lg:min-h-0 max-lg:flex-row max-lg:px-4 max-lg:py-2">
        <div className="flex w-full flex-col items-center max-lg:flex-row max-lg:justify-center">
          {anchors.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return <a key={id} href={`#${id}`} aria-label={label} aria-current={isActive ? "location" : undefined} className={`group relative grid h-[58px] w-full place-items-center border-b border-[#efefec] transition max-lg:h-11 max-lg:w-12 max-lg:border-b-0 ${isActive ? "bg-[#f6f6f3] text-[#171a1d]" : "text-[#69727a] hover:bg-[#fafaf8] hover:text-[#171a1d]"}`}>{isActive ? <span className="absolute left-0 top-0 h-full w-[3px] bg-[#43b8ee] max-lg:bottom-0 max-lg:left-0 max-lg:top-auto max-lg:h-[3px] max-lg:w-full" /> : null}<Icon className="size-[18px]" strokeWidth={1.55} /><span className="pointer-events-none absolute left-[calc(100%+10px)] z-30 whitespace-nowrap rounded bg-[#171a1d] px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 max-lg:hidden">{label}</span></a>;
          })}
        </div>
        <div className="flex w-full flex-col items-center max-lg:w-auto max-lg:flex-row">
          <div className="h-[52px] w-full border-t border-[#efefec] text-[#7c858d] transition hover:bg-[#fafaf8] hover:text-[#171a1d] max-lg:h-11 max-lg:w-12 max-lg:border-t-0"><ArticleSaveButton slug={slug} compact /></div>
          <div className="h-[52px] w-full border-t border-[#efefec] text-[#7c858d] transition hover:bg-[#fafaf8] hover:text-[#171a1d] max-lg:h-11 max-lg:w-12 max-lg:border-t-0"><ArticleShareButton title={title} compact /></div>
        </div>
      </nav>
    </aside>
  );
}
