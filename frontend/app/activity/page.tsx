import { ActivityView } from "@/components/forum/profile/activity-view";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function ActivityPage(){return <StandardForumPage><SectionHeading eyebrow="Conta" title="Minha atividade" description="Acompanhe conteúdos salvos, discussões seguidas, comentários e histórico recente." /><div className="mt-8"><ActivityView /></div></StandardForumPage>}
