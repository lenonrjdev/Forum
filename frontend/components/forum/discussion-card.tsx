import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star } from "lucide-react";

import { AvatarStack } from "@/components/forum/avatar-stack";
import type { ForumCategory, ForumDiscussion } from "@/types/forum";

type DiscussionCardProps = {
  discussion: ForumDiscussion;
  category: ForumCategory;
};

export function DiscussionCard({ discussion, category }: DiscussionCardProps) {
  return (
    <Link
      href={`/discussions/${discussion.id}`}
      aria-label={`Abrir artigo: ${discussion.title}`}
      className="block"
    >
      <article
        className={`relative grid min-h-[132px] grid-cols-[58px_minmax(0,1fr)_148px] items-center gap-4 rounded-[7px] border border-[#e7ebef] bg-white px-5 py-4 shadow-[0_5px_18px_rgba(37,51,65,0.055)] transition duration-200 hover:-translate-y-0.5 hover:border-[#dce3e8] hover:shadow-[0_10px_28px_rgba(37,51,65,0.08)] max-md:grid-cols-[52px_minmax(0,1fr)] max-md:gap-3 max-md:px-4 ${
          discussion.muted ? "opacity-55 hover:opacity-100" : ""
        }`}
      >
        <div className="relative self-start pt-1">
          <Image
            src={discussion.authorAvatar}
            alt={discussion.author}
            width={50}
            height={50}
            className="size-[50px] rounded-full border border-[#e7eaed] object-cover"
          />
          {discussion.featured ? (
            <span className="absolute -right-1 top-0 grid size-[18px] place-items-center rounded-full bg-[#f4bf3f] text-white ring-2 ring-white">
              <Star className="size-[10px] fill-current" strokeWidth={1.5} />
            </span>
          ) : null}
        </div>

        <div className="min-w-0 self-center">
          <h2 className="truncate text-[17px] font-medium tracking-[-0.018em] text-[#273445]">
            {discussion.title}
          </h2>
          <p className="mt-1 text-[10.5px] text-[#a0a9b3]">
            Publicado por <span className="text-[#7d8894]">{discussion.author}</span> · {discussion.publishedAt}
          </p>
          <p className="mt-2 line-clamp-2 max-w-[570px] text-[11.5px] leading-[1.65] text-[#8c97a3]">
            {discussion.excerpt}
          </p>
        </div>

        <div className="flex h-full flex-col items-end justify-between py-0.5 max-md:col-span-2 max-md:ml-[64px] max-md:flex-row max-md:items-center">
          <div className="flex items-center gap-2 text-[10px] font-medium text-[#8b96a1]">
            <span className="size-[6px] rounded-full" style={{ backgroundColor: category.color }} />
            {category.label}
          </div>

          <div className="flex flex-col items-end gap-2 max-md:flex-row max-md:items-center">
            <AvatarStack participants={discussion.participants} />
            <div className="flex items-center gap-1.5 text-[11px] text-[#77838f]">
              <MessageCircle className="size-[15px]" strokeWidth={1.55} />
              <span>{discussion.comments} comentários</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
