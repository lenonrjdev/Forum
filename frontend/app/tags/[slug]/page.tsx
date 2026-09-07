import { DiscussionListingPage } from "@/components/forum/shared/discussion-listing-page";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { forumDiscussions } from "@/content/forum-home.content";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> };

export default async function TagPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const normalized = decodeURIComponent(slug).replaceAll("-", " ").toLowerCase();
  const discussions = forumDiscussions.filter((discussion) =>
    discussion.tags.some((tag) => tag.toLowerCase().replaceAll(".", "").includes(normalized.replaceAll(".", ""))),
  );

  return (
    <StandardForumPage>
      <DiscussionListingPage
        eyebrow="Tag"
        title={`#${decodeURIComponent(slug)}`}
        description="Conteúdos relacionados a esta tecnologia ou assunto dentro do Fórum Ateliux."
        discussions={discussions}
        basePath={`/tags/${slug}`}
        currentPage={Math.max(1, Number(query.page ?? 1) || 1)}
      />
    </StandardForumPage>
  );
}
