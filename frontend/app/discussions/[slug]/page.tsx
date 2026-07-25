import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ForumArticlePage } from "@/components/forum/article/forum-article-page";
import { getForumArticleBySlug, forumArticles } from "@/content/forum-articles.content";
import { forumCategories } from "@/content/forum-home.content";

type DiscussionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return forumArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: DiscussionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getForumArticleBySlug(slug);

  if (!article) {
    return { title: "Artigo não encontrado | Ateliux Forum" };
  }

  return {
    title: `${article.title} | Ateliux Forum`,
    description: article.description,
  };
}

export default async function DiscussionPage({ params }: DiscussionPageProps) {
  const { slug } = await params;
  const article = getForumArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = forumCategories.find((item) => item.id === article.categoryId);

  if (!category) {
    notFound();
  }

  return <ForumArticlePage article={article} category={category} />;
}
