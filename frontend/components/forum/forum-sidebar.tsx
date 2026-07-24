import { Check, Flag, MessageSquareText } from "lucide-react";

import { forumCategories } from "@/content/forum-home.content";

export function ForumSidebar() {
  return (
    <aside className="pt-0.5 max-lg:pt-0">
      <button
        type="button"
        className="h-11 w-full rounded-[5px] bg-[#41b7ee] text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(65,183,238,0.25)] transition hover:bg-[#31abe3] hover:shadow-[0_10px_24px_rgba(65,183,238,0.32)]"
      >
        Start New Discussion
      </button>

      <nav className="mt-5" aria-label="Forum navigation">
        <button
          type="button"
          className="flex h-10 w-full items-center justify-between border-b border-[#edf0f3] text-left text-[12px] font-medium text-[#4b9fc4]"
        >
          <span className="flex items-center gap-2.5">
            <MessageSquareText className="size-[15px]" strokeWidth={1.55} />
            All Discussion
          </span>
          <Check className="size-3.5 text-[#56c3bd]" strokeWidth={1.8} />
        </button>

        <button
          type="button"
          className="flex h-10 w-full items-center gap-2.5 border-b border-[#edf0f3] text-left text-[12px] font-medium text-[#52606e] transition hover:text-[#263241]"
        >
          <Flag className="size-[15px]" strokeWidth={1.55} />
          Following
        </button>

        <div className="mt-4 space-y-1">
          {forumCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="flex h-8 w-full items-center gap-3 rounded-[5px] px-0.5 text-left text-[11.5px] font-medium text-[#75808c] transition hover:bg-[#f8fafb] hover:text-[#33404e]"
            >
              <span
                className="size-[9px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]"
                style={{ backgroundColor: category.color }}
              />
              {category.label}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
