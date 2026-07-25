import type { ForumCategory } from "@/types/forum";

export type ArticleBodySection = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleCodeExample = {
  id: string;
  title: string;
  description: string;
  language: string;
  filename: string;
  code: string;
};

export type ArticleInsight = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ArticleComment = {
  id: string;
  author: string;
  avatar: string;
  publishedAt: string;
  content: string;
  likes: number;
};

export type ForumArticle = {
  slug: string;
  kind: "Artigo" | "Insight" | "Tutorial";
  title: string;
  description: string;
  categoryId: ForumCategory["id"];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  views: number;
  commentsCount: number;
  tags: string[];
  lead: string;
  sections: ArticleBodySection[];
  codeExample: ArticleCodeExample;
  insight: ArticleInsight;
  discussionQuestion: string;
  comments: ArticleComment[];
};
