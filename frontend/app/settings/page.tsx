import { SettingsPanel } from "@/components/forum/profile/settings-panel";
import { SectionHeading } from "@/components/forum/shared/section-heading";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function SettingsPage(){return <StandardForumPage><SectionHeading eyebrow="Conta" title="Configurações" description="Personalize seu perfil, notificações, privacidade e preferências de uso." /><div className="mt-8"><SettingsPanel /></div></StandardForumPage>}
