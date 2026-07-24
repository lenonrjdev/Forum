import type { ForumCategory, ForumDiscussion } from "@/types/forum";

export const forumBrand = {
  name: "Ateliux Forum",
  logoUrl:
    "https://res.cloudinary.com/df4wjugxk/image/upload/v1784326320/AteliuxObsidian_nvue3u.png",
};

export const forumCategories: ForumCategory[] = [
  { id: "faqs", label: "FAQ's", color: "#f6c856" },
  { id: "off-topic", label: "Off-Topic Chatter", color: "#76d9c6" },
  { id: "feedback", label: "Feedback", color: "#a99ae9" },
  { id: "member-spotlight", label: "Member Spotlight", color: "#e16b83" },
  { id: "introductions", label: "Introductions", color: "#56c8c8" },
  { id: "announcements", label: "Announcements", color: "#dc6ab0" },
  { id: "showcase", label: "Showcase", color: "#bfd4dc" },
  { id: "jobs", label: "Jobs", color: "#c9c89c" },
];

export const forumDiscussions: ForumDiscussion[] = [
  {
    id: "introduce-yourself",
    title: "Introduce Yourself!",
    author: "Sarah",
    authorAvatar: "/avatars/sarah.svg",
    publishedAt: "5 minutes ago",
    excerpt:
      "Hey Everyone, new member alert here! Thought I'd write a bit about myself and why I'm here. First of my name is Sarah and I'm 31 years old, married, fan of...",
    categoryId: "introductions",
    comments: 25,
    featured: true,
    participants: [
      { name: "Maya", avatar: "/avatars/maya.svg" },
      { name: "Noah", avatar: "/avatars/noah.svg" },
      { name: "Lena", avatar: "/avatars/lena.svg" },
      { name: "Kai", avatar: "/avatars/kai.svg" },
    ],
  },
  {
    id: "member-programme",
    title: "The 12 month member programme",
    author: "Mike",
    authorAvatar: "/avatars/mike.svg",
    publishedAt: "30 minutes ago",
    excerpt:
      "This is looking great! Quick question, if I already have a membership, can I upgrade it to include the new member perks?",
    categoryId: "announcements",
    comments: 16,
    featured: true,
    participants: [
      { name: "Nina", avatar: "/avatars/nina.svg" },
      { name: "Kai", avatar: "/avatars/kai.svg" },
      { name: "Maya", avatar: "/avatars/maya.svg" },
      { name: "Noah", avatar: "/avatars/noah.svg" },
    ],
  },
  {
    id: "what-are-you-working-on",
    title: "What are you working on?",
    author: "Simon",
    authorAvatar: "/avatars/simon.svg",
    publishedAt: "1 hour ago",
    excerpt:
      "Right now I'm working with this fantastic client who are looking to re-design their forum, currently we've just completed our research phase and moved into...",
    categoryId: "off-topic",
    comments: 4,
    participants: [
      { name: "Sarah", avatar: "/avatars/sarah.svg" },
      { name: "Nina", avatar: "/avatars/nina.svg" },
      { name: "Lena", avatar: "/avatars/lena.svg" },
      { name: "Mike", avatar: "/avatars/mike.svg" },
    ],
  },
  {
    id: "airline-app",
    title: "UI of a new airline app, help needed!",
    author: "Lena",
    authorAvatar: "/avatars/lena.svg",
    publishedAt: "3 hours ago",
    excerpt:
      "We're shaping a new airline experience and would love feedback on the latest interface direction before the next design review.",
    categoryId: "feedback",
    comments: 12,
    muted: true,
    participants: [
      { name: "Kai", avatar: "/avatars/kai.svg" },
      { name: "Maya", avatar: "/avatars/maya.svg" },
      { name: "Noah", avatar: "/avatars/noah.svg" },
    ],
  },
];
