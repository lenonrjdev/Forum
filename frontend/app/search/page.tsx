import Link from "next/link";

import { DiscussionListingPage } from "@/components/forum/shared/discussion-listing-page";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { forumCategories, forumDiscussions } from "@/content/forum-home.content";

type Props = { searchParams: Promise<{ q?: string; filter?: string; page?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const query = await searchParams;
  const search = (query.q ?? "").trim().toLowerCase();
  const filter = query.filter ?? "all";
  const page = Math.max(1, Number(query.page ?? 1) || 1);

  const discussions = forumDiscussions.filter((discussion) => {
    if (!search) return true;
    const category = forumCategories.find((item) => item.id === discussion.categoryId);
    const haystack = [discussion.title, discussion.excerpt, discussion.author, category?.label ?? "", ...discussion.tags]
      .join(" ")
      .toLowerCase();
    return haystack.includes(search);
  });

  const base = `/search?q=${encodeURIComponent(query.q ?? "")}${filter !== "all" ? `&filter=${filter}` : ""}`;
  const filters = [
    { id: "all", label: "Todos" },
    { id: "articles", label: "Artigos" },
    { id: "discussion", label: "Discussões" },
    { id: "code", label: "Código" },
  ];

  return (
    <StandardForumPage>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Link
            key={item.id}
            href={`/search?q=${encodeURIComponent(query.q ?? "")}&filter=${item.id}`}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              filter === item.id
                ? "border-[#263241] bg-[#263241] text-white"
                : "border-[#e2e6ea] text-[#6f7a85] hover:border-[#cfd6dc]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <DiscussionListingPage
        eyebrow="Pesquisa"
        title={search ? `Resultados para “${query.q}”` : "Pesquisar no fórum"}
        description={
          search
            ? `${discussions.length} resultado${discussions.length === 1 ? "" : "s"} encontrado${discussions.length === 1 ? "" : "s"}. Busque por título, conteúdo, categoria, autor ou tag.`
            : "Use a barra de busca para encontrar artigos, discussões, códigos, categorias e tags."
        }
        discussions={discussions}
        basePath={base}
        currentPage={page}
      />
    </StandardForumPage>
  );
}
