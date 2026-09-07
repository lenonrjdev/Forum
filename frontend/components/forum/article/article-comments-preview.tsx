"use client";

import Image from "next/image";
import { BadgeCheck, CheckCircle2, Heart, MessageCircleReply, MoreHorizontal, Send } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { ReportButton } from "@/components/forum/article/article-actions";
import type { ArticleComment, ForumArticle } from "@/types/article";

function CommentItem({ comment, onLike, onReply }: { comment: ArticleComment; onLike: (id: string) => void; onReply: (author: string) => void }) {
  return (
    <article className="border-t border-[#e2e2de] py-5 first:border-t-0">
      <div className="flex gap-3.5">
        <Image src={comment.avatar} alt={comment.author} width={38} height={38} className="size-[38px] rounded-full border border-[#e2e4e5] object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="flex items-center gap-1 text-[12px] font-semibold text-[#252a2e]">{comment.author}{comment.official ? <BadgeCheck className="size-3.5 text-[#42aee0]" /> : null}</h3>
            <span className="text-[10px] text-[#92989d]">{comment.publishedAt}</span>
            {comment.accepted ? <span className="flex items-center gap-1 rounded-full bg-[#eef8f5] px-2 py-1 text-[9px] font-semibold text-[#4c8b7d]"><CheckCircle2 className="size-3" />Solução aceita</span> : null}
          </div>
          <p className="mt-2 text-[13px] leading-6 text-[#626a70]">{comment.content}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] font-medium text-[#7a8289]">
            <button type="button" onClick={() => onLike(comment.id)} className="flex items-center gap-1.5 transition hover:text-[#202326]"><Heart className="size-3.5" strokeWidth={1.5} />{comment.likes}</button>
            <button type="button" onClick={() => onReply(comment.author)} className="flex items-center gap-1.5 transition hover:text-[#202326]"><MessageCircleReply className="size-3.5" strokeWidth={1.5} />Responder</button>
            <ReportButton />
          </div>
          {comment.replies?.length ? (
            <div className="mt-4 border-l border-[#d9dee1] pl-4">
              {comment.replies.map((reply) => <CommentItem key={reply.id} comment={reply} onLike={onLike} onReply={onReply} />)}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ArticleCommentsPreview({ article }: { article: ForumArticle }) {
  const [comments, setComments] = useState<ArticleComment[]>(article.comments);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [sort, setSort] = useState<"relevant" | "newest" | "oldest">("relevant");

  const visibleComments = useMemo(() => {
    if (sort === "newest") return [...comments].reverse();
    if (sort === "oldest") return comments;
    return [...comments].sort((a, b) => b.likes - a.likes);
  }, [comments, sort]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = text.trim();
    if (!content) return;
    const newComment: ArticleComment = {
      id: `local-${Date.now()}`,
      author: "Usuário Ateliux",
      avatar: "/avatars/current.svg",
      publishedAt: "agora",
      content: replyTo ? `@${replyTo} ${content}` : content,
      likes: 0,
    };
    setComments((current) => [newComment, ...current]);
    setText("");
    setReplyTo(null);
    setSort("newest");
  }

  function likeComment(id: string) {
    const update = (items: ArticleComment[]): ArticleComment[] => items.map((item) => item.id === id ? { ...item, likes: item.likes + 1 } : { ...item, replies: item.replies ? update(item.replies) : item.replies });
    setComments((current) => update(current));
  }

  return (
    <section id="discussao" className="scroll-mt-28 border-t border-[#deded9] pt-12">
      <div className="flex items-end justify-between gap-5 max-sm:items-start max-sm:flex-col">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a9196]">Discussão</p><h2 className="mt-3 font-serif text-[31px] leading-tight tracking-[-0.025em] text-[#202326]">Continue a conversa</h2></div>
        <label className="text-[10px] text-[#8a9196]">Ordenar comentários<select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)} className="ml-2 rounded border border-[#d9dddf] bg-transparent px-2 py-1.5 text-[10px] text-[#596169] outline-none"><option value="relevant">Mais relevantes</option><option value="newest">Mais recentes</option><option value="oldest">Mais antigos</option></select></label>
      </div>

      <div className="mt-6 border-l-2 border-[#43b8ee] bg-white px-5 py-4"><p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-[#68717a]">Pergunta para a comunidade</p><p className="mt-2 text-[var(--article-body-size)] leading-[var(--article-leading)] text-[#343a40]">{article.discussionQuestion}</p></div>

      {article.status === "closed" ? (
        <div className="mt-6 rounded-lg border border-[#e6ded8] bg-[#fffaf7] p-4 text-sm text-[#846d5c]">Esta discussão foi encerrada. O conteúdo continua disponível para consulta.</div>
      ) : (
        <form onSubmit={submit} className="mt-7 rounded-lg border border-[#dfe3e5] bg-white p-4">
          <div className="mb-3 flex items-center justify-between gap-4"><p className="text-xs font-semibold text-[#4d5964]">Adicionar comentário</p>{replyTo ? <button type="button" onClick={() => setReplyTo(null)} className="text-[10px] text-[#75909f]">Respondendo a {replyTo} · cancelar</button> : null}</div>
          <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Compartilhe sua experiência, dúvida ou complemento..." className="min-h-28 w-full resize-y border-0 bg-transparent text-sm leading-6 text-[#4b5660] outline-none placeholder:text-[#aab2b8]" />
          <div className="mt-3 flex items-center justify-between border-t border-[#edf0f2] pt-3"><span className="text-[10px] text-[#9aa2a9]">Markdown e blocos de código serão suportados pelo backend/editor final.</span><button type="submit" className="flex h-9 items-center gap-2 rounded-md bg-[#263241] px-4 text-xs font-semibold text-white transition hover:bg-[#18222d]"><Send className="size-3.5" />Publicar</button></div>
        </form>
      )}

      <div className="mt-7">
        {visibleComments.map((comment) => <CommentItem key={comment.id} comment={comment} onLike={likeComment} onReply={(author) => { setReplyTo(author); document.querySelector<HTMLTextAreaElement>("#discussao textarea")?.focus(); }} />)}
      </div>

      <button type="button" className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-[3px] border border-[#cfd3d5] bg-white text-[11px] font-semibold text-[#353b40] transition hover:border-[#aeb5b9] hover:bg-[#fbfbfa]"><MoreHorizontal className="size-4" />Carregar mais comentários</button>
    </section>
  );
}
