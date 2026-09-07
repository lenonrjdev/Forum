"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, MessageSquare } from "lucide-react";

import { ArticleFollowButton, ArticleSaveButton, ArticleShareButton } from "@/components/forum/article/article-actions";
import type { ForumArticle } from "@/types/article";
import type { ForumCategory } from "@/types/forum";

export function ArticleContextPanel({ article, category }: { article: ForumArticle; category: ForumCategory }) {
  return (
    <aside className="bg-[#171717] text-white max-xl:col-span-2 max-lg:col-span-1">
      <div className="sticky top-[82px] max-h-[calc(100vh-82px)] overflow-y-auto max-xl:static max-xl:max-h-none">
        <div className="px-8 pb-8 pt-7">
          <div className="flex items-center justify-between text-[10px] text-[#8f9497]"><span>{article.kind}</span><span>por <strong className="font-medium text-[#d9dcde]">Ateliux</strong></span></div>
          <h2 className="mt-6 font-serif text-[34px] leading-[1.06] tracking-[-0.03em]">{category.label}</h2>
          <p className="mt-5 text-[12px] leading-6 text-[#aeb3b6]">{article.description}</p>
        </div>

        <div className="border-t border-white/10 text-[11px] font-medium">
          <div className="h-14 border-b border-white/10 px-8 transition hover:bg-white/[0.04]"><ArticleSaveButton slug={article.slug} dark /></div>
          <div className="h-14 border-b border-white/10 px-8 transition hover:bg-white/[0.04]"><ArticleFollowButton slug={article.slug} dark /></div>
          <div className="h-14 border-b border-white/10 px-8 transition hover:bg-white/[0.04]"><ArticleShareButton title={article.title} dark /></div>
        </div>

        <div className="bg-[#242424] px-8 py-7">
          <h3 className="text-[11px] font-semibold underline underline-offset-4">Informações do artigo</h3>
          <dl className="mt-7 space-y-5 text-[10px]">
            <div className="flex justify-between gap-5"><dt className="text-[#979da1]">Tempo de leitura</dt><dd className="font-medium">{article.readingTime}</dd></div>
            <div className="flex justify-between gap-5"><dt className="text-[#979da1]">Nível</dt><dd className="font-medium">{article.difficulty}</dd></div>
            <div className="flex justify-between gap-5"><dt className="text-[#979da1]">Visualizações</dt><dd className="font-medium">{article.views.toLocaleString("pt-BR")}</dd></div>
            <div className="flex justify-between gap-5"><dt className="text-[#979da1]">Atualizado</dt><dd className="max-w-[135px] text-right font-medium">{article.updatedAt}</dd></div>
          </dl>
          <div className="mt-8 border-t border-white/10 pt-6"><p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8d9498]">Tags</p><div className="mt-3 flex flex-wrap gap-2">{article.tags.map((tag) => <Link key={tag} href={`/tags/${encodeURIComponent(tag.toLowerCase().replaceAll(" ", "-"))}`} className="border border-white/12 px-2.5 py-1.5 text-[9px] text-[#c4c8ca] hover:border-white/30">{tag}</Link>)}</div></div>
        </div>

        <Link href="/u/ateliux" className="flex items-center gap-3 border-t border-white/10 px-8 py-7 transition hover:bg-white/[0.03]"><Image src={article.author.avatar} alt={article.author.name} width={42} height={42} className="size-[42px] rounded-full border border-white/15" /><div><p className="text-[11px] font-semibold">{article.author.name}</p><p className="mt-1 text-[9px] text-[#8f969a]">{article.author.role}</p></div></Link>

        <a href="#discussao" className="flex min-h-16 items-center justify-between bg-[#43b8ee] px-8 text-[11px] font-semibold text-[#10232c] transition hover:bg-[#59c1ef]"><span className="flex items-center gap-2"><MessageSquare className="size-4" />Participar da discussão</span><span>{article.commentsCount}</span></a>
        <Link href={`/categories/${category.slug}`} className="flex h-14 items-center justify-between px-8 text-[10px] text-[#92989b] transition hover:bg-white/[0.04] hover:text-white"><span className="flex items-center gap-2"><Bell className="size-3.5" />Mais em {category.label}</span><span>→</span></Link>
      </div>
    </aside>
  );
}
