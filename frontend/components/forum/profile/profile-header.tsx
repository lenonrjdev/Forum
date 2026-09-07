import Image from "next/image";
import { BadgeCheck, CalendarDays, MessageCircle, Sparkles } from "lucide-react";

import type { ForumProfile } from "@/types/forum";

export function ProfileHeader({ profile }: { profile: ForumProfile }) {
  return (
    <section className="border-b border-[#edf0f3] pb-9">
      <div className="flex items-start justify-between gap-8 max-md:flex-col">
        <div className="flex items-start gap-5 max-sm:flex-col">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={88}
            height={88}
            className="size-[88px] rounded-full border border-[#e3e7ea] object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-serif text-[36px] leading-tight tracking-[-0.03em] text-[#263241]">{profile.name}</h1>
              {profile.official ? <BadgeCheck className="size-5 text-[#42aee0]" aria-label="Perfil oficial" /> : null}
            </div>
            <p className="mt-1 text-sm font-medium text-[#66727e]">{profile.role}</p>
            <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#7e8994]">{profile.bio}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-[#909aa4]">
              <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />Membro desde {profile.joinedAt}</span>
              {profile.official ? <span className="flex items-center gap-1.5"><Sparkles className="size-3.5" />Conta oficial Ateliux</span> : null}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 max-sm:w-full">
          {[
            { label: "Discussões", value: profile.discussions },
            { label: "Comentários", value: profile.comments },
            { label: "Úteis", value: profile.helpfulAnswers },
          ].map((item) => (
            <div key={item.label} className="min-w-[92px] rounded-lg border border-[#e7ebee] px-4 py-3 text-center max-sm:min-w-0">
              <strong className="block text-lg font-semibold text-[#34414d]">{item.value}</strong>
              <span className="mt-1 block text-[10px] text-[#9aa3ad]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
