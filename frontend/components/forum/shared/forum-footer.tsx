import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "Sobre" },
  { href: "/community-guidelines", label: "Diretrizes" },
  { href: "/privacy", label: "Privacidade" },
  { href: "/terms", label: "Termos" },
];

export function ForumFooter() {
  return (
    <footer className="border-t border-[#edf0f3] bg-white px-10 py-8 max-md:px-4">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 max-md:flex-col max-md:items-start">
        <p className="text-xs text-[#8b95a0]">© 2026 Ateliux Forum. Tecnologia, código e produto.</p>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs text-[#687481] transition hover:text-[#263241]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
