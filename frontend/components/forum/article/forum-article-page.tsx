import { ArticleAnchorRail } from "@/components/forum/article/article-anchor-rail";
import { ArticleContent } from "@/components/forum/article/article-content";
import { ArticleContextPanel } from "@/components/forum/article/article-context-panel";
import { ArticleReadingPane } from "@/components/forum/article/article-reading-pane";
import { ForumHeader } from "@/components/forum/forum-header";
import { ForumFooter } from "@/components/forum/shared/forum-footer";
import type { ForumArticle } from "@/types/article";
import type { ForumCategory } from "@/types/forum";

export function ForumArticlePage({ article, category }: { article: ForumArticle; category: ForumCategory }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <ForumHeader />
      <main className="w-full">
        <div className="grid min-h-[calc(100vh-82px)] w-full grid-cols-[72px_minmax(0,1fr)_380px] bg-white max-2xl:grid-cols-[64px_minmax(0,1fr)_350px] max-xl:grid-cols-[64px_minmax(0,1fr)] max-lg:grid-cols-1">
          <ArticleAnchorRail slug={article.slug} title={article.title} hasCode={Boolean(article.codeExample)} hasInsight={Boolean(article.insight)} />
          <ArticleReadingPane><ArticleContent article={article} category={category} /></ArticleReadingPane>
          <ArticleContextPanel article={article} category={category} />
        </div>
      </main>
      <ForumFooter />
    </div>
  );
}
