"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export function ForumToolbar() {
  const [marked, setMarked] = useState(false);

  return (
    <div className="mb-[22px] flex h-11 items-center justify-between gap-4">
      <label className="sr-only" htmlFor="forum-sort">Ordenar discussões</label>
      <select
        id="forum-sort"
        defaultValue="latest"
        className="h-9 rounded-[6px] border border-[#e5e9ed] bg-white px-3.5 text-[12px] font-medium text-[#65717e] shadow-[0_2px_8px_rgba(34,49,63,0.025)] outline-none transition hover:border-[#d9dfe5] focus:border-[#b9c4ce]"
      >
        <option value="latest">Mais recentes</option>
        <option value="comments">Mais comentadas</option>
        <option value="views">Mais visualizadas</option>
        <option value="unanswered">Sem resposta</option>
      </select>

      <button
        type="button"
        onClick={() => setMarked(true)}
        className="flex items-center gap-2 text-[12px] font-medium text-[#687480] transition-colors hover:text-[#252f3b]"
      >
        <Check className="size-3.5" strokeWidth={1.8} />
        {marked ? "Tudo marcado como lido" : "Marcar tudo como lido"}
      </button>
    </div>
  );
}
