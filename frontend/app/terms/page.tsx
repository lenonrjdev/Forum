import { InfoDocument } from "@/components/forum/shared/info-document";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function TermsPage(){return <StandardForumPage><InfoDocument eyebrow="Legal" title="Termos de uso" description="Estrutura inicial dos termos do Fórum Ateliux. O texto final deverá ser revisado antes da abertura pública da plataforma." sections={[
{title:"Uso da plataforma",paragraphs:["O fórum é destinado a conteúdo e discussões sobre tecnologia. O uso deve respeitar as diretrizes da comunidade e as leis aplicáveis."]},
{title:"Conteúdo publicado",paragraphs:["Autores permanecem responsáveis pelo conteúdo que publicam. A plataforma poderá moderar materiais que violem regras, direitos ou segurança."]},
{title:"Disponibilidade",paragraphs:["Recursos podem evoluir, mudar ou ser temporariamente indisponíveis durante manutenção e desenvolvimento do serviço."]}
]} /></StandardForumPage>}
