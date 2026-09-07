"use client";

import Link from "next/link";
import { Bookmark, Flag, History, MessageCircle } from "lucide-react";
import { useState } from "react";

import { DiscussionList } from "@/components/forum/discussion-list";
import { useForumState } from "@/components/providers/forum-state-provider";
import { forumDiscussions } from "@/content/forum-home.content";

const tabs = [
  { id: "saved", label: "Salvos", icon: Bookmark },
  { id: "following", label: "Seguindo", icon: Flag },
  { id: "comments", label: "Comentários", icon: MessageCircle },
  { id: "history", label: "Histórico", icon: History },
] as const;

type ActivityTab = (typeof tabs)[number]["id"];

export function ActivityView({ initialTab = "saved" }: { initialTab?: ActivityTab }) {
  const [tab, setTab] = useState<ActivityTab>(initialTab);
  const { savedDiscussions, followedDiscussions } = useForumState();

  const discussions = tab === "saved"
    ? forumDiscussions.filter((item) => savedDiscussions.has(item.id))
    : tab === "following"
      ? forumDiscussions.filter((item) => followedDiscussions.has(item.id))
      : tab === "history"
        ? forumDiscussions.slice(0, 4)
        : [];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-[#edf0f3] pb-5">
        {tabs.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} type="button" onClick={() => setTab(item.id)} className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition ${tab === item.id ? "bg-[#263241] text-white" : "bg-[#f6f8f9] text-[#687480] hover:bg-[#edf1f3]"}`}>
              <Icon className="size-3.5" />{item.label}
            </button>
          );
        })}
      </div>

      {tab === "comments" ? (
        <div className="mt-7 space-y-4">
          {[
            "A separação entre regras de domínio e interface deixa o fluxo muito mais previsível.",
            "Gostei da forma como a solução aceita ficou destacada sem competir com o conteúdo.",
          ].map((comment, index) => (
            <article key={comment} className="rounded-lg border border-[#e6eaed] p-5">
              <div className="flex items-center justify-between gap-4"><p className="text-xs font-medium text-[#596672]">Comentário de Usuário Ateliux</p><span className="text-[10px] text-[#a0a9b2]">há {index + 1} dia{index ? "s" : ""}</span></div>
              <p className="mt-3 text-sm leading-6 text-[#707c87]">{comment}</p>
              <Link href={`/discussions/${forumDiscussions[index].id}#discussao`} className="mt-3 inline-block text-xs font-medium text-[#3a98c3]">Abrir discussão →</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-7">
          {discussions.length > 0 ? (
            <DiscussionList discussions={discussions} />
          ) : (
            <div className="rounded-xl border border-dashed border-[#dfe4e8] px-8 py-16 text-center"><p className="text-sm font-medium text-[#4d5965]">Nada por aqui ainda.</p><p className="mt-2 text-xs text-[#8b95a0]">Use as ações do fórum para preencher esta área.</p></div>
          )}
        </div>
      )}
    </div>
  );
}
