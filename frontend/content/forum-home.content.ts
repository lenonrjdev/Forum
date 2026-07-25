import type { ForumCategory, ForumDiscussion } from "@/types/forum";

export const forumBrand = {
  name: "Ateliux Forum",
  logoUrl:
    "https://res.cloudinary.com/df4wjugxk/image/upload/v1784326320/AteliuxObsidian_nvue3u.png",
};

export const forumCategories: ForumCategory[] = [
  { id: "frontend", label: "Desenvolvimento Web", color: "#55c5d0" },
  { id: "backend", label: "Backend e Banco", color: "#dd6bb0" },
  { id: "ai", label: "Inteligência Artificial", color: "#a99ae9" },
  { id: "design", label: "Design e UX", color: "#f1bd53" },
  { id: "solutions", label: "Código e Soluções", color: "#72d8c5" },
  { id: "ateliux", label: "Projetos Ateliux", color: "#e26e84" },
  { id: "support", label: "Suporte e Dúvidas", color: "#b9d2dc" },
  { id: "career", label: "Carreira e Mercado", color: "#c9c89c" },
];

export const forumDiscussions: ForumDiscussion[] = [
  {
    id: "arquitetura-nextjs-escalavel",
    title: "Como organizar um projeto Next.js para escalar sem perder clareza",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/sarah.svg",
    publishedAt: "há 5 minutos",
    excerpt:
      "Uma arquitetura prática para separar páginas, domínios, conteúdo e integrações sem transformar o projeto em uma estrutura difícil de manter.",
    categoryId: "frontend",
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
    id: "nestjs-prisma-base-solida",
    title: "NestJS e Prisma: uma base sólida para APIs modernas",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/mike.svg",
    publishedAt: "há 30 minutos",
    excerpt:
      "Como combinar módulos, serviços, contratos e persistência para construir uma API que possa evoluir junto com o produto.",
    categoryId: "backend",
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
    id: "agentes-ia-valor-produtos",
    title: "Agentes de IA: onde realmente geram valor em produtos digitais",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/simon.svg",
    publishedAt: "há 1 hora",
    excerpt:
      "Uma visão prática sobre automação, contexto, ferramentas e os limites necessários para transformar IA em uma capacidade confiável do produto.",
    categoryId: "ai",
    comments: 4,
    participants: [
      { name: "Sarah", avatar: "/avatars/sarah.svg" },
      { name: "Nina", avatar: "/avatars/nina.svg" },
      { name: "Lena", avatar: "/avatars/lena.svg" },
      { name: "Mike", avatar: "/avatars/mike.svg" },
    ],
  },
  {
    id: "design-system-momento-certo",
    title: "Design systems: quando um projeto deve criar o seu",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/lena.svg",
    publishedAt: "há 3 horas",
    excerpt:
      "Sinais de que a interface precisa deixar de ser um conjunto de telas isoladas e começar a operar como um sistema visual compartilhado.",
    categoryId: "design",
    comments: 12,
    muted: true,
    participants: [
      { name: "Kai", avatar: "/avatars/kai.svg" },
      { name: "Maya", avatar: "/avatars/maya.svg" },
      { name: "Noah", avatar: "/avatars/noah.svg" },
    ],
  },
];
