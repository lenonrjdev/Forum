import { ForumActions } from "@/components/forum/header/forum-actions";
import { ForumBrand } from "@/components/forum/header/forum-brand";
import { ForumSearch } from "@/components/forum/header/forum-search";

export function ForumHeader() {
  return (
    <header className="border-b border-[#edf0f3] bg-white shadow-[0_2px_10px_rgba(29,43,59,0.025)]">
      <nav
        aria-label="Main navigation"
        className="grid h-[82px] w-full grid-cols-[180px_minmax(340px,600px)_180px] items-center justify-between gap-8 px-10 max-lg:grid-cols-[150px_minmax(260px,1fr)_150px] max-lg:gap-6 max-md:h-[72px] max-md:grid-cols-[104px_minmax(0,1fr)_auto] max-md:gap-3 max-md:px-4"
      >
        <ForumBrand />
        <ForumSearch />
        <ForumActions />
      </nav>
    </header>
  );
}
