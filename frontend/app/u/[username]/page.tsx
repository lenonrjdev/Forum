import { notFound } from "next/navigation";

import { DiscussionList } from "@/components/forum/discussion-list";
import { ProfileHeader } from "@/components/forum/profile/profile-header";
import { ProfileTabs } from "@/components/forum/profile/profile-tabs";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { currentForumProfile, forumDiscussions, officialForumProfile } from "@/content/forum-home.content";

type Props = { params: Promise<{ username: string }> };

export default async function UserProfilePage({ params }: Props) {
  const { username } = await params;
  const profile = username === officialForumProfile.username ? officialForumProfile : username === currentForumProfile.username ? currentForumProfile : undefined;
  if (!profile) notFound();

  const discussions = profile.official ? forumDiscussions.slice(0, 4) : forumDiscussions.slice(4, 7);

  return (
    <StandardForumPage>
      <ProfileHeader profile={profile} />
      <ProfileTabs username={profile.username} />
      <section className="mt-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-[#34414d]">Atividade recente</h2>
            <p className="mt-1 text-xs text-[#8c96a0]">Publicações e participações recentes deste perfil.</p>
          </div>
        </div>
        <DiscussionList discussions={discussions} />
      </section>
    </StandardForumPage>
  );
}
