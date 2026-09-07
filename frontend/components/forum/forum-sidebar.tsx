import { BookOpenText, Check, Flag, Grid2X2, MessageSquareText, PenLine, Tags } from "lucide-react";
import Link from "next/link";

import { forumCategories } from "@/content/forum-home.content";

export function ForumSidebar() {
  return (
    <aside className="pt-0.5 max-lg:pt-0">
      <Link
        href="/write"
        className="grid h-11 w-full place-items-center rounded-[5px] bg-[#41b7ee] text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(65,183,238,0.25)] transition hover:bg-[#31abe3] hover:shadow-[0_10px_24px_rgba(65,183,238,0.32)]"
      >
        <span className="flex items-center gap-2"><PenLine className="size-3.5" /> Nova publicação</span>
      </Link>

      <nav className="mt-5" aria-label="Navegação do fórum">
        <Link href="/latest" className="flex h-10 w-full items-center justify-between border-b border-[#edf0f3] text-left text-[12px] font-medium text-[#4b9fc4]">
          <span className="flex items-center gap-2.5"><MessageSquareText className="size-[15px]" strokeWidth={1.55} />Todas as discussões</span>
          <Check className="size-3.5 text-[#56c3bd]" strokeWidth={1.8} />
        </Link>
        <Link href="/following" className="flex h-10 w-full items-center gap-2.5 border-b border-[#edf0f3] text-[12px] font-medium text-[#52606e] transition hover:text-[#263241]">
          <Flag className="size-[15px]" strokeWidth={1.55} /> Seguindo
        </Link>
        <Link href="/categories" className="flex h-10 w-full items-center gap-2.5 border-b border-[#edf0f3] text-[12px] font-medium text-[#52606e] transition hover:text-[#263241]">
          <Grid2X2 className="size-[15px]" strokeWidth={1.55} /> Categorias
        </Link>
        <Link href="/tags/nextjs" className="flex h-10 w-full items-center gap-2.5 border-b border-[#edf0f3] text-[12px] font-medium text-[#52606e] transition hover:text-[#263241]">
          <Tags className="size-[15px]" strokeWidth={1.55} /> Tags em destaque
        </Link>
        <Link href="/community-guidelines" className="flex h-10 w-full items-center gap-2.5 border-b border-[#edf0f3] text-[12px] font-medium text-[#52606e] transition hover:text-[#263241]">
          <BookOpenText className="size-[15px]" strokeWidth={1.55} /> Diretrizes
        </Link>

        <p className="mb-2 mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a0a9b3]">Categorias</p>
        <div className="space-y-1">
          {forumCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="flex min-h-8 w-full items-center gap-3 rounded-[5px] px-0.5 text-left text-[11.5px] font-medium text-[#75808c] transition hover:bg-[#f8fafb] hover:text-[#33404e]"
            >
              <span className="size-[9px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]" style={{ backgroundColor: category.color }} />
              {category.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
