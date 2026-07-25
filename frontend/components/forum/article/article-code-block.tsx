"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import type { ArticleCodeExample } from "@/types/article";

type ArticleCodeBlockProps = {
  example: ArticleCodeExample;
};

export function ArticleCodeBlock({ example }: ArticleCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(example.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id={example.id} className="scroll-mt-24 border-t border-[#deded9] pt-12">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">
        Exemplo prático
      </p>
      <h2 className="mt-3 max-w-[620px] font-serif text-[31px] leading-[1.18] tracking-[-0.025em] text-[#202326]">
        {example.title}
      </h2>
      <p className="mt-5 max-w-[680px] text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#555d64]">
        {example.description}
      </p>

      <div className="mt-7 overflow-hidden rounded-[4px] border border-[#292d31] bg-[#181b1e] shadow-[0_14px_34px_rgba(31,35,39,0.12)]">
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 text-[11px] text-[#aeb5bb]">
          <span>{example.filename}</span>
          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-1.5 rounded px-2 py-1 transition hover:bg-white/10 hover:text-white"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
        <pre className="overflow-x-auto px-5 py-5 text-[12.5px] leading-6 text-[#e4e8eb]">
          <code>{example.code}</code>
        </pre>
      </div>
    </section>
  );
}
