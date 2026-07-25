import Image from "next/image";

import { ArticleCodeBlock } from "@/components/forum/article/article-code-block";
import { ArticleCommentsPreview } from "@/components/forum/article/article-comments-preview";
import type { ForumArticle } from "@/types/article";
import type { ForumCategory } from "@/types/forum";

type ArticleContentProps = {
  article: ForumArticle;
  category: ForumCategory;
};

export function ArticleContent({ article, category }: ArticleContentProps) {
  return (
    <article className="mx-auto w-full max-w-[820px] px-14 pb-24 pt-20 max-xl:px-10 max-md:px-6 max-md:pt-12">
      <section id="resumo" className="scroll-mt-24">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70777d]">
          <span>{article.kind}</span>
          <span className="size-1 rounded-full" style={{ backgroundColor: category.color }} />
          <span>{category.label}</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#848b90]">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={24}
            height={24}
            className="size-6 rounded-full border border-[#e0e2e3]"
          />
          <span>Por {article.author.name}</span>
          <span>·</span>
          <span>{article.publishedAt}</span>
        </div>

        <h1 className="mt-8 max-w-[720px] font-serif text-[58px] leading-[1.03] tracking-[-0.045em] text-[#202326] max-xl:text-[52px] max-md:text-[42px]">
          {article.title}
        </h1>

        <p className="mt-8 max-w-[680px] text-[var(--article-body-size)] font-medium leading-[var(--article-leading)] text-[#454c52]">
          {article.lead}
        </p>
      </section>

      <div className="mt-14 space-y-14">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            {section.eyebrow ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 max-w-[650px] font-serif text-[34px] leading-[1.16] tracking-[-0.03em] text-[#202326]">
              {section.title}
            </h2>
            <div className="mt-6 space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[690px] text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#555d64]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.bullets ? (
              <ul className="mt-6 max-w-[680px] space-y-3 border-l border-[#bfc4c7] pl-5">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[calc(var(--article-body-size)-1px)] leading-7 text-[#50585e]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <ArticleCodeBlock example={article.codeExample} />

        <section id={article.insight.id} className="scroll-mt-24 border-t border-[#deded9] pt-12">
          <div className="bg-[#202326] px-8 py-8 text-white shadow-[0_14px_34px_rgba(31,35,39,0.12)] max-md:px-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77c9ed]">
              {article.insight.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[600px] font-serif text-[32px] leading-[1.15] tracking-[-0.025em]">
              {article.insight.title}
            </h2>
            <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#c8cdd0]">
              {article.insight.description}
            </p>
          </div>
        </section>

        <ArticleCommentsPreview article={article} />
      </div>
    </article>
  );
}
