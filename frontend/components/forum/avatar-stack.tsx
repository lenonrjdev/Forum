import Image from "next/image";

import type { ForumParticipant } from "@/types/forum";

type AvatarStackProps = {
  participants: ForumParticipant[];
};

export function AvatarStack({ participants }: AvatarStackProps) {
  return (
    <div className="flex items-center justify-end" aria-label="Discussion participants">
      {participants.slice(0, 4).map((participant, index) => (
        <Image
          key={`${participant.name}-${index}`}
          src={participant.avatar}
          alt={participant.name}
          width={28}
          height={28}
          className="size-[27px] rounded-full border-2 border-white object-cover shadow-[0_1px_4px_rgba(32,45,58,0.12)]"
          style={{ marginLeft: index === 0 ? 0 : -8 }}
        />
      ))}
    </div>
  );
}
