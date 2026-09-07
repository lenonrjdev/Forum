import { DiscussionCard } from "@/components/forum/discussion-card";
import { forumCategories, forumDiscussions } from "@/content/forum-home.content";
import type { ForumDiscussion } from "@/types/forum";

export function DiscussionList({ discussions = forumDiscussions }: { discussions?: ForumDiscussion[] }) {
  if (discussions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#dfe4e8] px-8 py-16 text-center">
        <p className="text-sm font-medium text-[#4d5965]">Nenhuma discussão encontrada.</p>
        <p className="mt-2 text-xs leading-6 text-[#8b95a0]">Tente remover algum filtro ou explorar outra categoria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-[20px]">
      {discussions.map((discussion) => {
        const category = forumCategories.find((item) => item.id === discussion.categoryId);
        if (!category) return null;
        return <DiscussionCard key={discussion.id} discussion={discussion} category={category} />;
      })}
    </div>
  );
}
