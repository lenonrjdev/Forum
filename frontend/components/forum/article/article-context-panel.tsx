import Image from "next/image";
import { Bookmark, ChevronDown, MessageSquare, Share2 } from "lucide-react";

import type { ForumArticle } from "@/types/article";
import type { ForumCategory } from "@/types/forum";

type ArticleContextPanelProps = {
  article: ForumArticle;
  category: ForumCategory;
};

export function ArticleContextPanel({ article, category }: ArticleContextPanelProps) {
  return (
    <aside className="bg-[#171717] text-white max-xl:hidden">
      <div className="sticky top-0 max-h-screen overflow-y-auto">
        <div className="px-8 pb-8 pt-7">
          <div className="flex items-center justify-between text-[10px] text-[#8f9497]">
            <span>{article.kind}</span>
            <span className="flex items-center gap-1.5">
              por <strong className="font-medium text-[#d9dcde]">Ateliux</strong>
              <span className="grid size-4 place-items-center rounded-full border border-white/20 text-[8px]">A</span>
            </span>
          </div>

          <h2 className="mt-6 font-serif text-[34px] leading-[1.06] tracking-[-0.03em]">
            {category.label}
          </h2>
          <p className="mt-5 text-[12px] leading-6 text-[#aeb3b6]">{article.description}</p>
        </div>

        <div className="border-t border-white/10">
          <button
            type="button"
            className="flex h-14 w-full items-center justify-between border-b border-white/10 px-8 text-left text-[11px] font-medium transition hover:bg-white/[0.04]"
          >
            Salvar artigo
            <Bookmark className="size-4 text-[#969da1]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="flex h-14 w-full items-center justify-between border-b border-white/10 px-8 text-left text-[11px] font-medium transition hover:bg-white/[0.04]"
          >
            Compartilhar
            <Share2 className="size-4 text-[#969da1]" strokeWidth={1.5} />
          </button>
        </div>

        <div className="bg-[#242424] px-8 py-7">
          <h3 className="text-[11px] font-semibold underline underline-offset-4">Informações do artigo</h3>

          <dl className="mt-7 space-y-5 text-[10px]">
            <div className="flex items-start justify-between gap-5">
              <dt className="text-[#979da1]">Tempo de leitura</dt>
              <dd className="font-medium text-white">{article.readingTime}</dd>
            </div>
            <div className="flex items-start justify-between gap-5">
              <dt className="text-[#979da1]">Nível</dt>
              <dd className="font-medium text-white">{article.difficulty}</dd>
            </div>
            <div className="flex items-start justify-between gap-5">
              <dt className="text-[#979da1]">Visualizações</dt>
              <dd className="font-medium text-white">{article.views.toLocaleString("pt-BR")}</dd>
            </div>
            <div className="flex items-start justify-between gap-5">
              <dt className="text-[#979da1]">Atualizado</dt>
              <dd className="max-w-[135px] text-right font-medium leading-4 text-white">{article.updatedAt}</dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8d9498]">Tags</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="border border-white/12 px-2.5 py-1.5 text-[9px] text-[#c4c8ca]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-7">
          <div className="flex items-center gap-3">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={42}
              height={42}
              className="size-[42px] rounded-full border border-white/15"
            />
            <div>
              <p className="text-[11px] font-semibold">{article.author.name}</p>
              <p className="mt-1 text-[9px] text-[#8f969a]">{article.author.role}</p>
            </div>
          </div>
        </div>

        <a
          href="#comentarios"
          className="flex min-h-16 items-center justify-between bg-[#43b8ee] px-8 text-[11px] font-semibold text-[#10232c] transition hover:bg-[#59c1ef]"
        >
          <span className="flex items-center gap-2">
            <MessageSquare className="size-4" strokeWidth={1.65} />
            Participar da discussão
          </span>
          <span>{article.commentsCount}</span>
        </a>

        <button
          type="button"
          className="flex h-14 w-full items-center justify-between px-8 text-[10px] text-[#92989b] transition hover:bg-white/[0.04] hover:text-white"
        >
          Conteúdos relacionados
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  );
}
