import Image from "next/image";
import Link from "next/link";

import { forumBrand } from "@/content/forum-home.content";

export function ForumBrand() {
  return (
    <Link
      href="/"
      aria-label={forumBrand.name}
      className="flex min-w-0 items-center justify-start"
    >
      <Image
        src={forumBrand.logoUrl}
        alt="Logo Ateliux"
        width={114}
        height={63}
        priority
        className="h-[51px] w-[108px] object-contain object-left max-md:h-[42px] max-md:w-[89px]"
      />
    </Link>
  );
}
