import { ForumHeader } from "@/components/forum/forum-header";
import { ForumHome } from "@/components/forum/forum-home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ForumHeader />
      <ForumHome />
    </div>
  );
}
