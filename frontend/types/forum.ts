export type ForumCategory = {
  id: string;
  label: string;
  color: string;
};

export type ForumParticipant = {
  name: string;
  avatar: string;
};

export type ForumDiscussion = {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  excerpt: string;
  categoryId: ForumCategory["id"];
  comments: number;
  participants: ForumParticipant[];
  featured?: boolean;
  muted?: boolean;
};
