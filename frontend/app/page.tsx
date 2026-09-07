import { ForumHeader } from "@/components/forum/forum-header";
import { ForumHome } from "@/components/forum/forum-home";
import { ForumFooter } from "@/components/forum/shared/forum-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ForumHeader />
      <ForumHome />
      <ForumFooter />
    </div>
  );
}
