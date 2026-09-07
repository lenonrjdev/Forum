"use client";

import Link from "next/link";
import { Bell, CheckCheck } from "lucide-react";
import { useState } from "react";

import { useForumState } from "@/components/providers/forum-state-provider";

export function NotificationsView() {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useForumState();
  const [filter, setFilter] = useState<"all" | "unread" | "mentions">("all");

  const visible = notifications.filter((notification) => {
    if (filter === "unread") return !notification.read;
    if (filter === "mentions") return notification.type === "mention";
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#edf0f3] pb-5">
        <div className="flex gap-2">
          {[
            ["all", "Todas"],
            ["unread", "Não lidas"],
            ["mentions", "Menções"],
          ].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setFilter(id as typeof filter)} className={`rounded-md px-3 py-2 text-xs font-medium transition ${filter === id ? "bg-[#263241] text-white" : "bg-[#f5f7f8] text-[#6d7883] hover:bg-[#edf1f3]"}`}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" onClick={markAllNotificationsRead} className="flex items-center gap-2 text-xs font-medium text-[#65727d] hover:text-[#263241]"><CheckCheck className="size-4" />Marcar todas como lidas</button>
      </div>

      <div className="mt-6 divide-y divide-[#edf0f3] rounded-xl border border-[#e7ebee]">
        {visible.length ? visible.map((notification) => (
          <Link
            key={notification.id}
            href={notification.href}
            onClick={() => markNotificationRead(notification.id)}
            className={`flex gap-4 p-5 transition hover:bg-[#fafbfc] ${notification.read ? "bg-white" : "bg-[#f8fcfe]"}`}
          >
            <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full ${notification.read ? "bg-[#f2f4f6] text-[#7f8a94]" : "bg-[#e9f7fd] text-[#359bc9]"}`}><Bell className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4"><p className="text-sm font-medium text-[#3e4a56]">{notification.title}</p><span className="whitespace-nowrap text-[10px] text-[#a0a9b2]">{notification.time}</span></div>
              <p className="mt-1.5 text-xs leading-5 text-[#7f8a95]">{notification.description}</p>
            </div>
            {!notification.read ? <span className="mt-2 size-2 shrink-0 rounded-full bg-[#42afe0]" aria-label="Não lida" /> : null}
          </Link>
        )) : <div className="px-6 py-14 text-center text-sm text-[#8d97a1]">Nenhuma notificação neste filtro.</div>}
      </div>
    </div>
  );
}
