import { notFound } from "next/navigation";
import { ForumEditor } from "@/components/forum/editor/forum-editor";
import { StandardForumPage } from "@/components/forum/shared/standard-forum-page";
import { getForumArticleBySlug } from "@/content/forum-articles.content";
type Props={params:Promise<{slug:string}>};
export default async function EditDiscussionPage({params}:Props){const {slug}=await params;const article=getForumArticleBySlug(slug);if(!article)notFound();return <StandardForumPage><ForumEditor mode="edit" initial={{title:article.title,summary:article.description,categoryId:article.categoryId,tags:article.tags.join(", "),content:[article.lead,...article.sections.flatMap((section)=>[section.title,...section.paragraphs])].join("\n\n")}} /></StandardForumPage>}
