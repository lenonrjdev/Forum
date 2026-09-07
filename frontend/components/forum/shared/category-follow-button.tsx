"use client";

import { Bell, Check } from "lucide-react";

import { useForumState } from "@/components/providers/forum-state-provider";

export function CategoryFollowButton({ categoryId }: { categoryId: string }) {
  const { followedCategories, toggleCategoryFollow } = useForumState();
  const followed = followedCategories.has(categoryId);

  return (
    <button
      type="button"
      onClick={() => toggleCategoryFollow(categoryId)}
      className={`flex h-10 items-center gap-2 rounded-md px-4 text-xs font-semibold transition ${
        followed ? "border border-[#dce5e8] bg-white text-[#53616d]" : "bg-[#263241] text-white hover:bg-[#18222d]"
      }`}
    >
      {followed ? <Check className="size-3.5" /> : <Bell className="size-3.5" />}
      {followed ? "Seguindo categoria" : "Seguir categoria"}
    </button>
  );
}
