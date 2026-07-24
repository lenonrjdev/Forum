import { DiscussionCard } from "@/components/forum/discussion-card";
import { forumCategories, forumDiscussions } from "@/content/forum-home.content";

export function DiscussionList() {
  return (
    <div className="space-y-[20px]">
      {forumDiscussions.map((discussion) => {
        const category = forumCategories.find((item) => item.id === discussion.categoryId);

        if (!category) {
          return null;
        }

        return (
          <DiscussionCard key={discussion.id} discussion={discussion} category={category} />
        );
      })}
    </div>
  );
}
