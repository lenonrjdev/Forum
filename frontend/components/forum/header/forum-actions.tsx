"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Bookmark, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { useForumState } from "@/components/providers/forum-state-provider";

const mobileLinks = [
  { href: "/latest", label: "Discussões recentes" },
  { href: "/categories", label: "Categorias" },
  { href: "/following", label: "Seguindo" },
  { href: "/saved", label: "Salvos" },
  { href: "/notifications", label: "Notificações" },
  { href: "/u/usuario-ateliux", label: "Perfil" },
];

export function ForumActions() {
  const { unreadNotifications } = useForumState();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex min-w-0 items-center justify-end gap-1.5">
      <Link
        href="/saved"
        aria-label="Artigos salvos"
        className="grid size-9 place-items-center rounded-full text-[#64707c] transition hover:bg-[#f5f7f9] hover:text-[#263241] max-sm:hidden"
      >
        <Bookmark className="size-[18px]" strokeWidth={1.65} />
      </Link>

      <Link
        href="/notifications"
        aria-label="Notificações"
        className="relative grid size-9 place-items-center rounded-full text-[#64707c] transition hover:bg-[#f5f7f9] hover:text-[#263241] max-sm:hidden"
      >
        <Bell className="size-[18px]" strokeWidth={1.65} />
        {unreadNotifications > 0 ? (
          <span className="absolute right-[5px] top-[4px] grid min-h-4 min-w-4 place-items-center rounded-full bg-[#e66d84] px-1 text-[9px] font-semibold text-white ring-2 ring-white">
            {unreadNotifications}
          </span>
        ) : null}
      </Link>

      <Link
        href="/u/usuario-ateliux"
        aria-label="Abrir perfil"
        className="ml-1 flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-[#f5f7f9] max-sm:hidden"
      >
        <Image
          src="/avatars/current.svg"
          alt="Usuário Ateliux"
          width={32}
          height={32}
          className="size-8 rounded-full border border-[#e7e9ed] object-cover"
        />
        <ChevronDown className="size-3.5 text-[#66717d]" strokeWidth={1.75} />
      </Link>

      <button
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
        className="hidden size-9 place-items-center rounded-full text-[#64707c] transition hover:bg-[#f5f7f9] max-sm:grid"
      >
        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {menuOpen ? (
        <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-[#e8ebee] bg-white p-2 shadow-[0_18px_50px_rgba(32,43,56,0.12)] sm:hidden">
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-[#596571] transition hover:bg-[#f5f7f9] hover:text-[#263241]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
