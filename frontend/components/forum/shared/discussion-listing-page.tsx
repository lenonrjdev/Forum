import type { ReactNode } from "react";

import { DiscussionList } from "@/components/forum/discussion-list";
import { ForumSidebar } from "@/components/forum/forum-sidebar";
import { Pagination } from "@/components/forum/shared/pagination";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import type { ForumDiscussion } from "@/types/forum";

export function DiscussionListingPage({
  eyebrow,
  title,
  description,
  discussions,
  basePath,
  action,
  currentPage = 1,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  discussions: ForumDiscussion[];
  basePath: string;
  action?: ReactNode;
  currentPage?: number;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_250px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
      <section>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} action={action} />
        <div className="mt-8"><DiscussionList discussions={discussions} /></div>
        <Pagination basePath={basePath} currentPage={currentPage} />
      </section>
      <ForumSidebar />
    </div>
  );
}
