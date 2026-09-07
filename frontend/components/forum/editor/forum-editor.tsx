"use client";

import { CheckCircle2, Code2, Eye, FileText, ImageIcon, Link2, Save, Send, Tag } from "lucide-react";
import { useState, type FormEvent } from "react";

import { forumCategories } from "@/content/forum-home.content";

type ForumEditorProps = {
  mode?: "create" | "edit";
  initial?: {
    title?: string;
    summary?: string;
    categoryId?: string;
    tags?: string;
    content?: string;
  };
};

const inputClass = "mt-1.5 w-full rounded-md border border-[#dfe4e8] bg-white px-3.5 py-2.5 text-sm text-[#34414d] outline-none transition placeholder:text-[#aeb6bd] focus:border-[#aebcc7] focus:ring-4 focus:ring-[#eff7fb]";

export function ForumEditor({ mode = "create", initial }: ForumEditorProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [summary, setSummary] = useState(initial?.summary ?? "");
  const [categoryId, setCategoryId] = useState(initial?.categoryId ?? forumCategories[0].id);
  const [tags, setTags] = useState(initial?.tags ?? "Next.js, TypeScript");
  const [content, setContent] = useState(initial?.content ?? "");
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<"idle" | "draft" | "published">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("published");
  }

  const category = forumCategories.find((item) => item.id === categoryId);

  return (
    <form onSubmit={submit} className="grid grid-cols-[minmax(0,1fr)_280px] gap-10 max-lg:grid-cols-1">
      <section>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-[#edf0f3] pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#929ca5]">{mode === "create" ? "Nova publicação" : "Editar publicação"}</p>
            <h1 className="mt-2 font-serif text-[34px] tracking-[-0.03em] text-[#25313e]">{preview ? "Pré-visualização" : "Editor"}</h1>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setPreview((value) => !value)} className="flex h-9 items-center gap-2 rounded-md border border-[#dfe4e8] px-3 text-xs font-medium text-[#61707b] hover:bg-[#f7f9fa]"><Eye className="size-3.5" />{preview ? "Voltar ao editor" : "Preview"}</button>
            <button type="button" onClick={() => setStatus("draft")} className="flex h-9 items-center gap-2 rounded-md border border-[#dfe4e8] px-3 text-xs font-medium text-[#61707b] hover:bg-[#f7f9fa]"><Save className="size-3.5" />Salvar rascunho</button>
          </div>
        </div>

        {preview ? (
          <article className="rounded-xl border border-[#e4e8eb] bg-[#f7f7f4] px-10 py-12 max-sm:px-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e969d]">{category?.label} · Preview</p>
            <h2 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1.1] tracking-[-0.04em] text-[#202326]">{title || "Título da publicação"}</h2>
            <p className="mt-5 text-base leading-8 text-[#5c646b]">{summary || "O resumo aparecerá aqui para contextualizar o leitor."}</p>
            <div className="mt-8 border-y border-[#dfe1dd] py-5 text-xs text-[#899097]">Equipe Ateliux · {category?.label}</div>
            <div className="mt-8 whitespace-pre-wrap text-[16px] leading-8 text-[#555d64]">{content || "O conteúdo completo aparecerá aqui durante a pré-visualização."}</div>
          </article>
        ) : (
          <div className="space-y-5">
            <label className="block text-xs font-medium text-[#5f6b76]">Título<input value={title} onChange={(event) => setTitle(event.target.value)} required maxLength={120} placeholder="Um título claro e específico" className={inputClass} /></label>
            <label className="block text-xs font-medium text-[#5f6b76]">Resumo<textarea value={summary} onChange={(event) => setSummary(event.target.value)} required maxLength={280} placeholder="Explique em poucas linhas por que essa publicação importa." className={`${inputClass} min-h-24 resize-y`} /></label>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <label className="block text-xs font-medium text-[#5f6b76]">Categoria<select value={categoryId} onChange={(event) => setCategoryId(event.target.value)} className={`${inputClass} h-11`}>{forumCategories.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
              <label className="block text-xs font-medium text-[#5f6b76]">Tags<input value={tags} onChange={(event) => setTags(event.target.value)} className={inputClass} /></label>
            </div>

            <div className="rounded-lg border border-[#dfe4e8] bg-white">
              <div className="flex flex-wrap gap-1 border-b border-[#edf0f2] p-2">
                {[
                  { label: "Texto", icon: FileText },
                  { label: "Código", icon: Code2 },
                  { label: "Link", icon: Link2 },
                  { label: "Imagem", icon: ImageIcon },
                  { label: "Tag", icon: Tag },
                ].map(({ label, icon: Icon }) => <button key={label} type="button" className="flex h-8 items-center gap-1.5 rounded px-2.5 text-[10px] font-medium text-[#6f7b86] hover:bg-[#f5f7f8]"><Icon className="size-3.5" />{label}</button>)}
              </div>
              <label className="sr-only" htmlFor="forum-editor-content">Conteúdo</label>
              <textarea id="forum-editor-content" value={content} onChange={(event) => setContent(event.target.value)} required placeholder="Escreva o conteúdo da publicação. O editor visual será conectado ao formato definitivo do backend posteriormente." className="min-h-[420px] w-full resize-y border-0 bg-transparent px-5 py-5 text-sm leading-7 text-[#4f5b66] outline-none placeholder:text-[#aeb6bd]" />
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#7e8993]">{status === "draft" ? <span className="flex items-center gap-1.5 text-[#5d897e]"><CheckCircle2 className="size-4" />Rascunho salvo localmente</span> : status === "published" ? <span className="flex items-center gap-1.5 text-[#5d897e]"><CheckCircle2 className="size-4" />Publicação preparada para envio ao backend</span> : "Alterações não publicadas"}</div>
          <button type="submit" className="flex h-10 items-center gap-2 rounded-md bg-[#263241] px-5 text-xs font-semibold text-white transition hover:bg-[#18222d]"><Send className="size-3.5" />{mode === "create" ? "Publicar" : "Salvar publicação"}</button>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-xl border border-[#e5e9ec] p-5"><p className="text-xs font-semibold text-[#4b5864]">Permissão de autor</p><p className="mt-2 text-xs leading-5 text-[#87919b]">Nesta primeira versão, a criação de publicações principais é reservada à Equipe Ateliux e a autores aprovados.</p></div>
        <div className="rounded-xl border border-[#e5e9ec] p-5"><p className="text-xs font-semibold text-[#4b5864]">Checklist editorial</p><ul className="mt-3 space-y-2 text-xs leading-5 text-[#87919b]"><li>• título específico;</li><li>• categoria correta;</li><li>• fontes e contexto claros;</li><li>• código revisado;</li><li>• chamada para discussão.</li></ul></div>
        <div className="rounded-xl bg-[#222c36] p-5 text-white"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Ateliux</p><p className="mt-3 text-sm font-medium">Conteúdo técnico com contexto e aplicação prática.</p><p className="mt-3 text-xs leading-5 text-white/55">O editor final poderá salvar rascunhos, revisar versões e publicar pela API do backend.</p></div>
      </aside>
    </form>
  );
}
