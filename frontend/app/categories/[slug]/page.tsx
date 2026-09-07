import { notFound } from "next/navigation";

import { CategoryFollowButton } from "@/components/forum/shared/category-follow-button";
import { DiscussionListingPage } from "@/components/forum/shared/discussion-listing-page";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { forumDiscussions, getCategoryBySlug } from "@/content/forum-home.content";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> };

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const discussions = forumDiscussions.filter((discussion) => discussion.categoryId === category.id);
  const page = Math.max(1, Number(query.page ?? 1) || 1);

  return (
    <StandardForumPage>
      <DiscussionListingPage
        eyebrow="Categoria"
        title={category.label}
        description={category.description}
        discussions={discussions}
        basePath={`/categories/${category.slug}`}
        currentPage={page}
        action={<CategoryFollowButton categoryId={category.id} />}
      />
    </StandardForumPage>
  );
}
