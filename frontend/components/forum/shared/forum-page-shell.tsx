import type { ReactNode } from "react";

import { ForumFooter } from "@/components/forum/shared/forum-footer";

export function ForumPageShell({ children, fullWidth = false }: { children: ReactNode; fullWidth?: boolean }) {
  return (
    <>
      <main className={fullWidth ? "w-full" : "mx-auto w-full max-w-[1280px] px-8 py-14 max-md:px-4 max-md:py-8"}>
        {children}
      </main>
      <ForumFooter />
    </>
  );
}
