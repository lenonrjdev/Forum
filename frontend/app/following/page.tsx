import { ActivityView } from "@/components/forum/profile/activity-view";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function FollowingPage(){return <StandardForumPage><SectionHeading eyebrow="Feed pessoal" title="Seguindo" description="Discussões e categorias que você acompanha para receber atualizações." /><div className="mt-8"><ActivityView initialTab="following" /></div></StandardForumPage>}
