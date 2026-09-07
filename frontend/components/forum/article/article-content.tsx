import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ChevronRight } from "lucide-react";

import { ArticleCodeBlock } from "@/components/forum/article/article-code-block";
import { ArticleCommentsPreview } from "@/components/forum/article/article-comments-preview";
import { forumArticles } from "@/content/forum-articles.content";
import { getCategoryById } from "@/content/forum-home.content";
import type { ForumArticle } from "@/types/article";
import type { ForumCategory } from "@/types/forum";

export function ArticleContent({ article, category }: { article: ForumArticle; category: ForumCategory }) {
  const related = forumArticles.filter((item) => item.slug !== article.slug && (item.categoryId === article.categoryId || item.tags.some((tag) => article.tags.includes(tag)))).slice(0, 3);

  return (
    <article className="mx-auto w-full max-w-[860px] px-14 pb-24 pt-16 max-xl:px-10 max-md:px-6 max-md:pt-10">
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-1.5 text-[10px] text-[#969da2]">
        <Link href="/" className="hover:text-[#4f5960]">Fórum</Link><ChevronRight className="size-3" />
        <Link href={`/categories/${category.slug}`} className="hover:text-[#4f5960]">{category.label}</Link><ChevronRight className="size-3" />
        <span className="max-w-[280px] truncate text-[#6e767c]">{article.title}</span>
      </nav>

      <section id="resumo" className="scroll-mt-28">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70777d]">
          <span>{article.kind}</span><span className="text-[#b0b4b7]">/</span><span>{category.label}</span>
          {article.status === "resolved" ? <span className="ml-1 rounded-full bg-[#eaf6f2] px-2 py-1 text-[9px] tracking-normal text-[#4f897c]">Resolvido</span> : null}
        </div>

        <h1 className="mt-5 max-w-[760px] font-serif text-[48px] leading-[1.08] tracking-[-0.042em] text-[#202326] max-md:text-[38px] max-sm:text-[34px]">
          {article.title}
        </h1>

        <p className="mt-6 max-w-[720px] text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#515960]">{article.lead}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-[#deded9] py-5">
          <div className="flex items-center gap-3">
            <Image src={article.author.avatar} alt={article.author.name} width={38} height={38} className="size-[38px] rounded-full border border-[#e2e4e5] object-cover" />
            <div><p className="flex items-center gap-1 text-[11px] font-semibold text-[#31363a]">{article.author.name}{article.author.official ? <BadgeCheck className="size-3.5 text-[#42aee0]" /> : null}</p><p className="mt-1 text-[9px] text-[#90969b]">{article.author.role}</p></div>
          </div>
          <div className="text-right text-[10px] leading-5 text-[#8a9196]"><p>Publicado em {article.publishedAt}</p><p>{article.readingTime} de leitura · {article.views.toLocaleString("pt-BR")} visualizações</p></div>
        </div>
      </section>

      <div className="space-y-14 pt-12">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            {section.eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">{section.eyebrow}</p> : null}
            <h2 className="mt-3 max-w-[650px] font-serif text-[31px] leading-[1.18] tracking-[-0.025em] text-[#202326]">{section.title}</h2>
            <div className="mt-5 space-y-5">
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#555d64]">{paragraph}</p>)}
            </div>
            {section.bullets ? <ul className="mt-6 space-y-3 border-l border-[#cdd2d4] pl-6">{section.bullets.map((bullet) => <li key={bullet} className="text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#555d64]">{bullet}</li>)}</ul> : null}
          </section>
        ))}

        {article.codeExample ? <ArticleCodeBlock example={article.codeExample} /> : null}

        {article.insight ? (
          <section id="insight" className="scroll-mt-28 border-t border-[#deded9] pt-12">
            <div className="bg-[#202326] px-8 py-10 text-white max-sm:px-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#939a9f]">{article.insight.eyebrow}</p>
              <h2 className="mt-4 max-w-[600px] font-serif text-[32px] leading-[1.15] tracking-[-0.025em]">{article.insight.title}</h2>
              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#c8cdd0]">{article.insight.description}</p>
            </div>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-2 border-t border-[#deded9] pt-8">
          {article.tags.map((tag) => <Link key={tag} href={`/tags/${encodeURIComponent(tag.toLowerCase().replaceAll(" ", "-"))}`} className="rounded-full border border-[#d8dddf] px-3 py-1.5 text-[10px] font-medium text-[#697178] transition hover:border-[#aeb6bb] hover:text-[#30363a]">#{tag}</Link>)}
        </div>

        <ArticleCommentsPreview article={article} />

        {related.length ? (
          <section className="border-t border-[#deded9] pt-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">Continue explorando</p>
            <h2 className="mt-3 font-serif text-[30px] tracking-[-0.025em] text-[#202326]">Conteúdos relacionados</h2>
            <div className="mt-6 grid grid-cols-3 gap-3 max-md:grid-cols-1">
              {related.map((item) => {
                const itemCategory = getCategoryById(item.categoryId);
                return <Link key={item.slug} href={`/discussions/${item.slug}`} className="rounded-lg border border-[#deded9] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#cdd3d6]"><p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#969da2]">{itemCategory?.label}</p><h3 className="mt-3 text-sm font-medium leading-5 text-[#343a40]">{item.title}</h3><p className="mt-3 text-[10px] text-[#91989d]">{item.readingTime} de leitura</p></Link>;
              })}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
