"use client";

import { Bell, Bookmark, Check, Flag, Link2, Share2 } from "lucide-react";
import { useState } from "react";

import { useForumState } from "@/components/providers/forum-state-provider";

export function ArticleSaveButton({ slug, compact = false, dark = false }: { slug: string; compact?: boolean; dark?: boolean }) {
  const { savedDiscussions, toggleSaved } = useForumState();
  const saved = savedDiscussions.has(slug);

  return (
    <button
      type="button"
      onClick={() => toggleSaved(slug)}
      aria-pressed={saved}
      className={compact ? "grid size-full place-items-center" : `flex h-full w-full items-center justify-between ${dark ? "text-white" : "text-[#4f5b66]"}`}
    >
      {!compact ? <span>{saved ? "Artigo salvo" : "Salvar artigo"}</span> : null}
      {saved ? <Check className="size-4" /> : <Bookmark className="size-4" strokeWidth={1.5} />}
    </button>
  );
}

export function ArticleFollowButton({ slug, dark = false }: { slug: string; dark?: boolean }) {
  const { followedDiscussions, toggleDiscussionFollow } = useForumState();
  const followed = followedDiscussions.has(slug);
  return (
    <button type="button" onClick={() => toggleDiscussionFollow(slug)} className={`flex h-full w-full items-center justify-between ${dark ? "text-white" : "text-[#4f5b66]"}`}>
      <span>{followed ? "Seguindo discussão" : "Seguir discussão"}</span>
      {followed ? <Check className="size-4" /> : <Bell className="size-4" strokeWidth={1.5} />}
    </button>
  );
}

export function ArticleShareButton({ title, compact = false, dark = false }: { title: string; compact?: boolean; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch { /* usuário cancelou */ }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button type="button" onClick={share} className={compact ? "grid size-full place-items-center" : `flex h-full w-full items-center justify-between ${dark ? "text-white" : "text-[#4f5b66]"}`}>
      {!compact ? <span>{copied ? "Link copiado" : "Compartilhar"}</span> : null}
      {copied ? <Check className="size-4" /> : compact ? <Share2 className="size-4" strokeWidth={1.5} /> : <Link2 className="size-4" strokeWidth={1.5} />}
    </button>
  );
}

export function ReportButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="flex items-center gap-1.5 text-[10px] text-[#8c949a] transition hover:text-[#202326]"><Flag className="size-3.5" />Denunciar</button>
      {open ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/35 p-4" role="dialog" aria-modal="true" aria-label="Denunciar conteúdo">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <h3 className="text-base font-semibold text-[#34414d]">Denunciar conteúdo</h3>
            {sent ? (
              <div className="mt-5 rounded-lg bg-[#f5faf8] p-4 text-sm text-[#557168]">Denúncia registrada na interface. A integração definitiva será feita pelo backend.</div>
            ) : (
              <div className="mt-5 space-y-2">
                {["Spam", "Assédio ou comportamento abusivo", "Conteúdo perigoso", "Informação enganosa", "Outro"].map((reason, index) => (
                  <label key={reason} className="flex items-center gap-3 rounded-lg border border-[#e6eaed] px-3 py-3 text-sm text-[#5f6b76]"><input type="radio" name="report-reason" defaultChecked={index === 0} />{reason}</label>
                ))}
              </div>
            )}
            <div className="mt-6 flex justify-end gap-2"><button type="button" onClick={() => { setOpen(false); setSent(false); }} className="h-9 rounded-md border border-[#dfe4e8] px-4 text-xs text-[#64707b]">Fechar</button>{!sent ? <button type="button" onClick={() => setSent(true)} className="h-9 rounded-md bg-[#263241] px-4 text-xs font-semibold text-white">Enviar denúncia</button> : null}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
