import { DiscussionListingPage } from "@/components/forum/shared/discussion-listing-page";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { forumDiscussions } from "@/content/forum-home.content";

type Props = { searchParams: Promise<{ page?: string }> };

export default async function LatestPage({ searchParams }: Props) {
  const query = await searchParams;
  return (
    <StandardForumPage>
      <DiscussionListingPage
        eyebrow="Feed"
        title="Discussões recentes"
        description="As publicações mais recentes do Fórum Ateliux em ordem cronológica."
        discussions={forumDiscussions}
        basePath="/latest"
        currentPage={Math.max(1, Number(query.page ?? 1) || 1)}
      />
    </StandardForumPage>
  );
}
