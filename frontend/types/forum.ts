export type ForumCategory = {
  id: string;
  slug: string;
  label: string;
  description: string;
  color: string;
  discussionsCount: number;
  followersCount: number;
};

export type ForumParticipant = {
  name: string;
  avatar: string;
};

export type DiscussionStatus = "open" | "resolved" | "closed";

export type ForumDiscussion = {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  excerpt: string;
  categoryId: ForumCategory["id"];
  comments: number;
  views: number;
  tags: string[];
  participants: ForumParticipant[];
  featured?: boolean;
  muted?: boolean;
  status?: DiscussionStatus;
};

export type ForumNotification = {
  id: string;
  type: "reply" | "mention" | "article" | "system";
  title: string;
  description: string;
  time: string;
  read: boolean;
  href: string;
};

export type ForumProfile = {
  username: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  official?: boolean;
  joinedAt: string;
  discussions: number;
  comments: number;
  helpfulAnswers: number;
};
