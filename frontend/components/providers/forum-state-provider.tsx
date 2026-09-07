"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import { initialNotifications } from "@/content/forum-home.content";
import type { ForumNotification } from "@/types/forum";

type ForumStateContextValue = {
  savedDiscussions: Set<string>;
  followedDiscussions: Set<string>;
  followedCategories: Set<string>;
  notifications: ForumNotification[];
  unreadNotifications: number;
  toggleSaved: (slug: string) => void;
  toggleDiscussionFollow: (slug: string) => void;
  toggleCategoryFollow: (categoryId: string) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
};

const ForumStateContext = createContext<ForumStateContextValue | null>(null);

function toggleSet(current: Set<string>, value: string) {
  const next = new Set(current);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export function ForumStateProvider({ children }: { children: ReactNode }) {
  const [savedDiscussions, setSavedDiscussions] = useState(() => new Set<string>(["nestjs-prisma-base-solida"]));
  const [followedDiscussions, setFollowedDiscussions] = useState(() => new Set<string>(["arquitetura-nextjs-escalavel"]));
  const [followedCategories, setFollowedCategories] = useState(() => new Set<string>(["frontend", "ai"]));
  const [notifications, setNotifications] = useState<ForumNotification[]>(initialNotifications);

  const value: ForumStateContextValue = {
    savedDiscussions,
    followedDiscussions,
    followedCategories,
    notifications,
    unreadNotifications: notifications.filter((notification) => !notification.read).length,
    toggleSaved: (slug) => setSavedDiscussions((current) => toggleSet(current, slug)),
    toggleDiscussionFollow: (slug) => setFollowedDiscussions((current) => toggleSet(current, slug)),
    toggleCategoryFollow: (categoryId) => setFollowedCategories((current) => toggleSet(current, categoryId)),
    markNotificationRead: (id) =>
      setNotifications((current) => current.map((notification) => notification.id === id ? { ...notification, read: true } : notification)),
    markAllNotificationsRead: () => setNotifications((current) => current.map((notification) => ({ ...notification, read: true }))),
  };

  return <ForumStateContext.Provider value={value}>{children}</ForumStateContext.Provider>;
}

export function useForumState() {
  const context = useContext(ForumStateContext);
  if (!context) throw new Error("useForumState must be used inside ForumStateProvider");
  return context;
}
