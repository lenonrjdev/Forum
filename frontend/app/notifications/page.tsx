import { NotificationsView } from "@/components/forum/profile/notifications-view";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function NotificationsPage(){return <StandardForumPage><SectionHeading eyebrow="Conta" title="Notificações" description="Respostas, menções, conteúdos seguidos e avisos importantes do Fórum Ateliux." /><div className="mt-8"><NotificationsView /></div></StandardForumPage>}
