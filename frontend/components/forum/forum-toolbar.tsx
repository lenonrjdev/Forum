import { Check, ChevronDown } from "lucide-react";

export function ForumToolbar() {
  return (
    <div className="mb-[22px] flex h-11 items-center justify-between">
      <button
        type="button"
        className="flex h-9 items-center gap-3 rounded-[6px] border border-[#e5e9ed] bg-white px-3.5 text-[12px] font-medium text-[#65717e] shadow-[0_2px_8px_rgba(34,49,63,0.025)] transition hover:border-[#d9dfe5]"
      >
        Mais recentes
        <ChevronDown className="size-3.5" strokeWidth={1.7} />
      </button>

      <button
        type="button"
        className="flex items-center gap-2 text-[12px] font-medium text-[#687480] transition-colors hover:text-[#252f3b]"
      >
        <Check className="size-3.5" strokeWidth={1.8} />
        Marcar tudo como lido
      </button>
    </div>
  );
}
