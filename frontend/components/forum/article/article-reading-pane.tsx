"use client";

import { AlignJustify, List, Minus, Plus, RotateCcw } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

type ArticleReadingPaneProps = {
  children: ReactNode;
};

const fontSizes = [15, 16.5, 18];

export function ArticleReadingPane({ children }: ArticleReadingPaneProps) {
  const [fontIndex, setFontIndex] = useState(1);
  const [comfortableLeading, setComfortableLeading] = useState(true);

  const readingStyle = {
    "--article-body-size": `${fontSizes[fontIndex]}px`,
    "--article-leading": comfortableLeading ? "1.9" : "1.68",
  } as CSSProperties;

  function resetReader() {
    setFontIndex(1);
    setComfortableLeading(true);
  }

  return (
    <section className="min-w-0 bg-[#f6f6f3]" style={readingStyle}>
      <div className="sticky top-0 z-20 flex min-h-[64px] items-center justify-between gap-5 border-b border-[#ddddda] bg-[#f6f6f3]/95 px-8 backdrop-blur-sm max-md:flex-wrap max-md:px-5 max-md:py-3">
        <div className="flex items-center gap-1 text-[10px] font-medium text-[#596169]">
          <span className="mr-2 uppercase tracking-[0.13em] text-[#969c9f]">Leitura</span>
          <button
            type="button"
            aria-label="Diminuir texto"
            onClick={() => setFontIndex((current) => Math.max(0, current - 1))}
            className="grid size-8 place-items-center rounded-sm transition hover:bg-white"
          >
            <Minus className="size-3.5" />
          </button>
          <span className="min-w-10 text-center tabular-nums">{fontSizes[fontIndex]} px</span>
          <button
            type="button"
            aria-label="Aumentar texto"
            onClick={() => setFontIndex((current) => Math.min(fontSizes.length - 1, current + 1))}
            className="grid size-8 place-items-center rounded-sm transition hover:bg-white"
          >
            <Plus className="size-3.5" />
          </button>

          <button
            type="button"
            aria-label="Alternar espaçamento do texto"
            aria-pressed={comfortableLeading}
            onClick={() => setComfortableLeading((current) => !current)}
            className={`ml-2 grid size-8 place-items-center rounded-sm transition hover:bg-white ${
              comfortableLeading ? "bg-white text-[#171a1d]" : ""
            }`}
          >
            <AlignJustify className="size-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-medium text-[#596169]">
          <button
            type="button"
            onClick={resetReader}
            className="flex h-8 items-center gap-1.5 rounded-sm px-2.5 transition hover:bg-white"
          >
            <RotateCcw className="size-3.5" />
            Redefinir
          </button>
          <a
            href="#resumo"
            className="flex h-8 items-center gap-1.5 rounded-sm px-2.5 transition hover:bg-white"
          >
            <List className="size-3.5" />
            Início
          </a>
        </div>
      </div>

      {children}
    </section>
  );
}
