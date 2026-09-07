import Link from "next/link";
import { ArrowUpRight, MessageSquareText, Users } from "lucide-react";

import { ForumHeader } from "@/components/forum/forum-header";
import { ForumFooter } from "@/components/forum/shared/forum-footer";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { forumCategories } from "@/content/forum-home.content";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ForumHeader />
      <main className="mx-auto w-full max-w-[1280px] px-8 py-14 max-md:px-4 max-md:py-8">
        <SectionHeading
          eyebrow="Explorar"
          title="Categorias"
          description="Navegue pelos principais assuntos do Fórum Ateliux e acompanhe as áreas mais relevantes para o seu trabalho."
        />
        <div className="mt-9 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {forumCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group rounded-xl border border-[#e7ebef] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#d9e0e6] hover:shadow-[0_12px_34px_rgba(37,51,65,0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="mt-1 size-3 rounded-full" style={{ backgroundColor: category.color }} />
                <ArrowUpRight className="size-4 text-[#a2abb4] transition group-hover:text-[#263241]" />
              </div>
              <h2 className="mt-5 text-lg font-medium tracking-[-0.02em] text-[#263241]">{category.label}</h2>
              <p className="mt-2 min-h-12 text-xs leading-6 text-[#85909b]">{category.description}</p>
              <div className="mt-6 flex items-center gap-5 text-[11px] text-[#8c97a2]">
                <span className="flex items-center gap-1.5"><MessageSquareText className="size-3.5" /> {category.discussionsCount} discussões</span>
                <span className="flex items-center gap-1.5"><Users className="size-3.5" /> {category.followersCount.toLocaleString("pt-BR")} seguindo</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <ForumFooter />
    </div>
  );
}
