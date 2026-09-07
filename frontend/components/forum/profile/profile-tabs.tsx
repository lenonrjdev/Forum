import Link from "next/link";

export function ProfileTabs({ username }: { username: string }) {
  const tabs = [
    { label: "Atividade", href: `/u/${username}` },
    { label: "Discussões", href: `/u/${username}?tab=discussions` },
    { label: "Comentários", href: `/u/${username}?tab=comments` },
    { label: "Respostas úteis", href: `/u/${username}?tab=helpful` },
  ];
  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-[#edf0f3] py-4">
      {tabs.map((tab, index) => (
        <Link key={tab.href} href={tab.href} className={`whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium transition ${index === 0 ? "bg-[#f2f5f7] text-[#263241]" : "text-[#78838e] hover:bg-[#f7f9fa] hover:text-[#34414d]"}`}>
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
