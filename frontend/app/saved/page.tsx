import { ActivityView } from "@/components/forum/profile/activity-view";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function SavedPage(){return <StandardForumPage><SectionHeading eyebrow="Biblioteca" title="Conteúdos salvos" description="Tudo que você marcou para consultar novamente." /><div className="mt-8"><ActivityView initialTab="saved" /></div></StandardForumPage>}
