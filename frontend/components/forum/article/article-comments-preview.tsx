import Image from "next/image";
import { Heart, MessageCircleReply } from "lucide-react";

import type { ForumArticle } from "@/types/article";

type ArticleCommentsPreviewProps = {
  article: ForumArticle;
};

export function ArticleCommentsPreview({ article }: ArticleCommentsPreviewProps) {
  return (
    <section id="comentarios" className="scroll-mt-24 border-t border-[#deded9] pt-12">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">
            Discussão
          </p>
          <h2 className="mt-3 font-serif text-[31px] leading-tight tracking-[-0.025em] text-[#202326]">
            Continue a conversa
          </h2>
        </div>
        <span className="text-[11px] text-[#8a9196]">{article.commentsCount} comentários</span>
      </div>

      <div className="mt-6 border-l-2 border-[#43b8ee] bg-white px-5 py-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-[#68717a]">
          Pergunta para a comunidade
        </p>
        <p className="mt-2 text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#343a40]">
          {article.discussionQuestion}
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {article.comments.map((comment) => (
          <article key={comment.id} className="border-t border-[#e2e2de] py-5 first:border-t-0">
            <div className="flex gap-3.5">
              <Image
                src={comment.avatar}
                alt={comment.author}
                width={38}
                height={38}
                className="size-[38px] rounded-full border border-[#e2e4e5] object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-[12px] font-semibold text-[#252a2e]">{comment.author}</h3>
                  <span className="text-[10px] text-[#92989d]">{comment.publishedAt}</span>
                </div>
                <p className="mt-2 text-[13px] leading-6 text-[#626a70]">{comment.content}</p>
                <div className="mt-3 flex items-center gap-4 text-[10px] font-medium text-[#7a8289]">
                  <button type="button" className="flex items-center gap-1.5 transition hover:text-[#202326]">
                    <Heart className="size-3.5" strokeWidth={1.5} />
                    {comment.likes}
                  </button>
                  <button type="button" className="flex items-center gap-1.5 transition hover:text-[#202326]">
                    <MessageCircleReply className="size-3.5" strokeWidth={1.5} />
                    Responder
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 h-11 w-full rounded-[3px] border border-[#cfd3d5] bg-white text-[11px] font-semibold text-[#353b40] transition hover:border-[#aeb5b9] hover:bg-[#fbfbfa]"
      >
        Ver toda a discussão
      </button>
    </section>
  );
}
