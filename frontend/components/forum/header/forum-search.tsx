"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function ForumSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="relative mx-auto block w-full max-w-[600px]">
      <label className="sr-only" htmlFor="forum-search">Pesquisar no fórum</label>
      <input
        id="forum-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Pesquisar no fórum"
        className="h-10 w-full rounded-[7px] border border-[#e4e8ec] bg-white px-4 pr-11 text-[12px] text-[#263241] outline-none transition placeholder:text-[#aab2bc] focus:border-[#b9c4ce] focus:ring-4 focus:ring-[#eef8fd]"
      />
      <button
        type="submit"
        aria-label="Pesquisar"
        className="absolute right-1.5 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-[#85909c] transition hover:bg-[#f5f7f9] hover:text-[#263241]"
      >
        <Search aria-hidden="true" className="size-[17px]" strokeWidth={1.8} />
      </button>
    </form>
  );
}
