import Link from "next/link";

export function Pagination({ basePath, currentPage = 1, totalPages = 5 }: { basePath: string; currentPage?: number; totalPages?: number }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hrefFor = (page: number) => `${basePath}${basePath.includes("?") ? "&" : "?"}page=${page}`;

  return (
    <nav aria-label="Paginação" className="mt-10 flex items-center justify-between border-t border-[#edf0f3] pt-7">
      <Link
        href={hrefFor(Math.max(1, currentPage - 1))}
        className={`text-sm ${currentPage === 1 ? "pointer-events-none text-[#bcc3ca]" : "text-[#55616d] hover:text-[#263241]"}`}
      >
        ← Anterior
      </Link>
      <div className="flex items-center gap-1 max-sm:hidden">
        {pages.map((page) => (
          <Link
            key={page}
            href={hrefFor(page)}
            className={`grid size-8 place-items-center rounded-md text-xs transition ${
              currentPage === page ? "bg-[#263241] text-white" : "text-[#697580] hover:bg-[#f3f5f7]"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
      <Link
        href={hrefFor(Math.min(totalPages, currentPage + 1))}
        className={`text-sm ${currentPage === totalPages ? "pointer-events-none text-[#bcc3ca]" : "text-[#55616d] hover:text-[#263241]"}`}
      >
        Próxima →
      </Link>
    </nav>
  );
}
