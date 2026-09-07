import type { ForumCategory, ForumDiscussion, ForumNotification, ForumProfile } from "@/types/forum";

export const forumBrand = {
  name: "Ateliux Forum",
  logoUrl:
    "https://res.cloudinary.com/df4wjugxk/image/upload/v1784326320/AteliuxObsidian_nvue3u.png",
};

export const forumCategories: ForumCategory[] = [
  {
    id: "frontend",
    slug: "desenvolvimento-web",
    label: "Desenvolvimento Web",
    description: "Next.js, React, TypeScript, interfaces, performance e arquitetura frontend.",
    color: "#55c5d0",
    discussionsCount: 128,
    followersCount: 2840,
  },
  {
    id: "backend",
    slug: "backend-banco-de-dados",
    label: "Backend e Banco de Dados",
    description: "APIs, NestJS, Node.js, Prisma, PostgreSQL, Redis, segurança e arquitetura.",
    color: "#dd6bb0",
    discussionsCount: 94,
    followersCount: 2210,
  },
  {
    id: "ai",
    slug: "inteligencia-artificial",
    label: "Inteligência Artificial",
    description: "Agentes, automações, integrações, modelos e IA aplicada a produtos digitais.",
    color: "#a99ae9",
    discussionsCount: 76,
    followersCount: 3120,
  },
  {
    id: "design",
    slug: "design-ux",
    label: "Design e UX",
    description: "Produto, UI, UX, design systems, acessibilidade e experiências digitais.",
    color: "#f1bd53",
    discussionsCount: 53,
    followersCount: 1480,
  },
  {
    id: "solutions",
    slug: "codigo-solucoes",
    label: "Código e Soluções",
    description: "Snippets, correções, padrões, exemplos práticos e resolução de problemas.",
    color: "#72d8c5",
    discussionsCount: 112,
    followersCount: 1980,
  },
  {
    id: "ateliux",
    slug: "projetos-ateliux",
    label: "Projetos Ateliux",
    description: "Bastidores, estudos de caso, decisões técnicas e aprendizados da Equipe Ateliux.",
    color: "#e26e84",
    discussionsCount: 28,
    followersCount: 920,
  },
  {
    id: "support",
    slug: "suporte-duvidas",
    label: "Suporte e Dúvidas",
    description: "Perguntas técnicas, integrações, configurações e dúvidas da comunidade.",
    color: "#b9d2dc",
    discussionsCount: 67,
    followersCount: 760,
  },
  {
    id: "career",
    slug: "carreira-mercado",
    label: "Carreira e Mercado",
    description: "Portfólio, carreira, freelancing, produto, mercado e trabalho em tecnologia.",
    color: "#c9c89c",
    discussionsCount: 41,
    followersCount: 1360,
  },
];

const participants = [
  { name: "Usuário Ateliux 01", avatar: "/avatars/user-01.svg" },
  { name: "Usuário Ateliux 02", avatar: "/avatars/user-02.svg" },
  { name: "Usuário Ateliux 03", avatar: "/avatars/user-03.svg" },
  { name: "Usuário Ateliux 04", avatar: "/avatars/user-04.svg" },
];

export const forumDiscussions: ForumDiscussion[] = [
  {
    id: "arquitetura-nextjs-escalavel",
    title: "Como organizar um projeto Next.js para escalar sem perder clareza",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 5 minutos",
    excerpt:
      "Uma arquitetura prática para separar páginas, domínios, conteúdo e integrações sem transformar o projeto em uma estrutura difícil de manter.",
    categoryId: "frontend",
    comments: 25,
    views: 1240,
    tags: ["Next.js", "React", "TypeScript", "Arquitetura"],
    featured: true,
    participants,
  },
  {
    id: "nestjs-prisma-base-solida",
    title: "NestJS e Prisma: uma base sólida para APIs modernas",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 30 minutos",
    excerpt:
      "Como combinar módulos, serviços, contratos e persistência para construir uma API que possa evoluir junto com o produto.",
    categoryId: "backend",
    comments: 16,
    views: 982,
    tags: ["NestJS", "Prisma", "PostgreSQL", "API"],
    featured: true,
    participants: participants.slice().reverse(),
  },
  {
    id: "agentes-ia-valor-produtos",
    title: "Agentes de IA: onde realmente geram valor em produtos digitais",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 1 hora",
    excerpt:
      "Uma visão prática sobre automação, contexto, ferramentas e limites para transformar IA em uma capacidade confiável do produto.",
    categoryId: "ai",
    comments: 14,
    views: 764,
    tags: ["IA", "Agentes", "Automação", "Produto"],
    participants,
  },
  {
    id: "design-system-momento-certo",
    title: "Design systems: quando um projeto deve criar o seu",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 3 horas",
    excerpt:
      "Sinais de que a interface precisa deixar de ser um conjunto de telas isoladas e começar a operar como um sistema visual compartilhado.",
    categoryId: "design",
    comments: 12,
    views: 639,
    tags: ["UI", "UX", "Design System", "Frontend"],
    muted: true,
    participants: participants.slice(0, 3),
  },
  {
    id: "autenticacao-jwt-nestjs",
    title: "Autenticação JWT no NestJS sem espalhar regra pela aplicação",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "ontem",
    excerpt:
      "Uma divisão limpa entre autenticação, autorização, guards, refresh tokens e contexto do usuário.",
    categoryId: "solutions",
    comments: 9,
    views: 530,
    tags: ["NestJS", "JWT", "Auth", "Segurança"],
    status: "resolved",
    participants: participants.slice(1),
  },
  {
    id: "postgres-indices-pratica",
    title: "Índices no PostgreSQL: o que observar antes de adicionar mais um",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "ontem",
    excerpt:
      "Como analisar consultas, cardinalidade e padrões de acesso antes de criar índices que só aumentam o custo de escrita.",
    categoryId: "backend",
    comments: 18,
    views: 811,
    tags: ["PostgreSQL", "Performance", "Banco de Dados"],
    participants,
  },
  {
    id: "produto-ai-humano-no-loop",
    title: "Human-in-the-loop: onde a aprovação humana ainda faz diferença em IA",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 2 dias",
    excerpt:
      "Critérios simples para decidir quando automatizar, quando sugerir e quando exigir confirmação antes de uma ação importante.",
    categoryId: "ai",
    comments: 21,
    views: 1090,
    tags: ["IA", "Produto", "Automação", "Segurança"],
    participants: participants.slice().reverse(),
  },
  {
    id: "acessibilidade-interface-pratica",
    title: "Acessibilidade no frontend: pequenas decisões que evitam grandes problemas",
    author: "Equipe Ateliux",
    authorAvatar: "/avatars/team.svg",
    publishedAt: "há 3 dias",
    excerpt:
      "Foco, contraste, semântica, navegação por teclado e feedback de estado aplicados desde a construção dos componentes.",
    categoryId: "frontend",
    comments: 7,
    views: 448,
    tags: ["Acessibilidade", "React", "UX", "HTML"],
    participants: participants.slice(0, 2),
    status: "closed",
  },
];

export const currentForumProfile: ForumProfile = {
  username: "usuario-ateliux",
  name: "Usuário Ateliux",
  role: "Membro da comunidade",
  bio: "Perfil de demonstração usado para validar a experiência do Fórum Ateliux.",
  avatar: "/avatars/current.svg",
  joinedAt: "setembro de 2026",
  discussions: 3,
  comments: 18,
  helpfulAnswers: 4,
};

export const officialForumProfile: ForumProfile = {
  username: "ateliux",
  name: "Equipe Ateliux",
  role: "Equipe oficial",
  bio: "Conteúdo, engenharia, design e tecnologia publicados pela Equipe Ateliux.",
  avatar: "/avatars/team.svg",
  official: true,
  joinedAt: "julho de 2026",
  discussions: 48,
  comments: 216,
  helpfulAnswers: 84,
};

export const initialNotifications: ForumNotification[] = [
  {
    id: "notification-1",
    type: "reply",
    title: "Nova resposta em uma discussão seguida",
    description: "A Equipe Ateliux respondeu uma discussão que você acompanha.",
    time: "há 4 min",
    read: false,
    href: "/discussions/arquitetura-nextjs-escalavel#discussao",
  },
  {
    id: "notification-2",
    type: "article",
    title: "Novo artigo em Inteligência Artificial",
    description: "Um novo insight sobre human-in-the-loop foi publicado.",
    time: "há 2 h",
    read: false,
    href: "/discussions/produto-ai-humano-no-loop",
  },
  {
    id: "notification-3",
    type: "mention",
    title: "Você recebeu uma menção",
    description: "Usuário Ateliux 02 mencionou seu perfil em uma resposta.",
    time: "ontem",
    read: true,
    href: "/notifications",
  },
  {
    id: "notification-4",
    type: "system",
    title: "Diretrizes da comunidade atualizadas",
    description: "Revise as orientações de participação e moderação.",
    time: "há 3 dias",
    read: true,
    href: "/community-guidelines",
  },
];

export function getCategoryById(id: string) {
  return forumCategories.find((category) => category.id === id);
}

export function getCategoryBySlug(slug: string) {
  return forumCategories.find((category) => category.slug === slug);
}

export function getDiscussionById(id: string) {
  return forumDiscussions.find((discussion) => discussion.id === id);
}
