import { DiscussionList } from "@/components/forum/discussion-list";
import { ForumSidebar } from "@/components/forum/forum-sidebar";
import { ForumToolbar } from "@/components/forum/forum-toolbar";

export function ForumHome() {
  return (
    <main className="mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,840px)_250px] gap-[100px] px-8 pb-20 pt-[68px] max-xl:grid-cols-[minmax(0,1fr)_235px] max-xl:gap-12 max-lg:grid-cols-1 max-lg:gap-10 max-lg:pt-10 max-md:px-4">
      <section aria-label="Forum discussions">
        <ForumToolbar />
        <DiscussionList />
      </section>

      <ForumSidebar />
    </main>
  );
}
