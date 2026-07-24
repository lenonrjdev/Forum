import Image from "next/image";
import { Activity, ChevronDown, Mail } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";

export function ForumActions() {
  return (
    <div className="flex min-w-0 items-center justify-end gap-1.5">
      <IconButton label="Activity" className="relative max-sm:hidden">
        <Activity className="size-[18px]" strokeWidth={1.65} />
        <span className="absolute right-[7px] top-[6px] size-[5px] rounded-full bg-[#e66d84] ring-2 ring-white" />
      </IconButton>

      <IconButton label="Messages" className="max-sm:hidden">
        <Mail className="size-[18px]" strokeWidth={1.65} />
      </IconButton>

      <button
        type="button"
        aria-label="Open profile menu"
        className="ml-1 flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-[#f5f7f9]"
      >
        <Image
          src="/avatars/nina.svg"
          alt="Profile"
          width={32}
          height={32}
          className="size-8 rounded-full border border-[#e7e9ed] object-cover"
        />
        <ChevronDown className="size-3.5 text-[#66717d]" strokeWidth={1.75} />
      </button>
    </div>
  );
}
