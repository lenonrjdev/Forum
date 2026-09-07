import type { ReactNode } from "react";

import { ForumHeader } from "@/components/forum/forum-header";
import { ForumPageShell } from "@/components/forum/shared/forum-page-shell";

export function StandardForumPage({ children, fullWidth = false }: { children: ReactNode; fullWidth?: boolean }) {
  return (
    <div className="min-h-screen bg-white">
      <ForumHeader />
      <ForumPageShell fullWidth={fullWidth}>{children}</ForumPageShell>
    </div>
  );
}
