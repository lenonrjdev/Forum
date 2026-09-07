import { InfoDocument } from "@/components/forum/shared/info-document";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
export default function AboutPage(){return <StandardForumPage><InfoDocument eyebrow="Ateliux Forum" title="Tecnologia discutida com contexto" description="O Fórum Ateliux é uma comunidade editorial para compartilhar códigos, insights, decisões de produto e discussões técnicas." sections={[
{title:"O que publicamos",paragraphs:["A Equipe Ateliux publica conteúdos sobre desenvolvimento, backend, inteligência artificial, design, produto e mercado de tecnologia."],bullets:["artigos e tutoriais;","insights curtos;","códigos e soluções;","estudos de caso;","discussões técnicas."]},
{title:"Como a comunidade participa",paragraphs:["Visitantes podem explorar conteúdos públicos. Usuários cadastrados podem comentar, responder, salvar, seguir categorias e participar das discussões."],bullets:["publicações principais começam com a Equipe Ateliux;","autores aprovados poderão publicar futuramente;","comentários seguem as diretrizes de comunidade."]},
{title:"Por que existe",paragraphs:["A proposta é transformar conhecimento prático de tecnologia em uma base pesquisável e em conversas que continuem úteis depois do momento em que foram publicadas."]}
]} /></StandardForumPage>}
