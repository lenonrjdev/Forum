import { InfoDocument } from "@/components/forum/shared/info-document";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function PrivacyPage(){return <StandardForumPage><InfoDocument eyebrow="Legal" title="Privacidade" description="Estrutura inicial da política de privacidade do Fórum Ateliux, pronta para revisão jurídica antes da publicação definitiva." sections={[
{title:"Dados da conta",paragraphs:["A plataforma poderá armazenar dados necessários para autenticação, perfil, preferências e participação no fórum."],bullets:["nome de exibição e username;","e-mail;","preferências e notificações;","atividade pública no fórum."]},
{title:"Dados de uso",paragraphs:["Métricas de acesso poderão ser usadas para segurança, funcionamento e melhoria do produto, respeitando a política definitiva e a legislação aplicável."]},
{title:"Controle do usuário",paragraphs:["Configurações de privacidade, edição de perfil e solicitações relacionadas à conta serão centralizadas na área de configurações."]}
]} /></StandardForumPage>}
