import { Search } from "lucide-react";

export function ForumSearch() {
  return (
    <label className="relative mx-auto block w-full max-w-[600px]">
      <span className="sr-only">Search the forum</span>
      <input
        type="search"
        placeholder="Search the forum"
        className="h-10 w-full rounded-[7px] border border-[#e4e8ec] bg-white px-4 pr-11 text-[12px] text-[#263241] outline-none transition placeholder:text-[#aab2bc] focus:border-[#b9c4ce] focus:ring-4 focus:ring-[#eef8fd]"
      />
      <Search
        aria-hidden="true"
        className="absolute right-3.5 top-1/2 size-[17px] -translate-y-1/2 text-[#85909c]"
        strokeWidth={1.8}
      />
    </label>
  );
}
