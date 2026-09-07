import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { forumBrand } from "@/content/forum-home.content";

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <main className="grid min-h-screen grid-cols-[minmax(0,1fr)_520px] bg-white max-lg:grid-cols-1">
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#202a35] px-12 py-10 text-white max-lg:hidden">
        <Link href="/" className="inline-flex w-fit">
          <Image src={forumBrand.logoUrl} alt="Ateliux" width={140} height={66} className="h-[58px] w-[124px] object-contain object-left brightness-0 invert" priority />
        </Link>
        <div className="max-w-[620px] pb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Ateliux Forum</p>
          <h1 className="mt-5 font-serif text-[54px] leading-[1.05] tracking-[-0.045em]">Tecnologia que vira conversa, referência e comunidade.</h1>
          <p className="mt-6 max-w-[530px] text-sm leading-7 text-white/58">
            Acompanhe insights, códigos, decisões de produto e discussões técnicas produzidas pela Equipe Ateliux e pela comunidade.
          </p>
        </div>
        <p className="text-xs text-white/35">© 2026 Ateliux Forum</p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-8 py-12 max-sm:px-4">
        <div className="w-full max-w-[390px]">
          <Link href="/" className="mb-10 hidden w-fit max-lg:inline-flex">
            <Image src={forumBrand.logoUrl} alt="Ateliux" width={124} height={58} className="h-[50px] w-[108px] object-contain object-left" priority />
          </Link>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9aa4ae]">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-[34px] leading-tight tracking-[-0.03em] text-[#25313e]">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-[#7e8994]">{description}</p>
          <div className="mt-8">{children}</div>
          {footer ? <div className="mt-7 text-center text-xs text-[#84909b]">{footer}</div> : null}
        </div>
      </section>
    </main>
  );
}
