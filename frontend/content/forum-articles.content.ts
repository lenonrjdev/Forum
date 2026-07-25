import type { ForumArticle } from "@/types/article";

const sharedComments = [
  {
    id: "comment-1",
    author: "Marina Costa",
    avatar: "/avatars/maya.svg",
    publishedAt: "há 18 minutos",
    content:
      "A separação por domínio fez bastante diferença no nosso projeto. O ponto principal foi manter os componentes próximos da funcionalidade sem transformar cada pasta em um pequeno framework.",
    likes: 12,
  },
  {
    id: "comment-2",
    author: "Rafael Mendes",
    avatar: "/avatars/noah.svg",
    publishedAt: "há 42 minutos",
    content:
      "Gostei da ideia de tratar o backend como fonte oficial dos dados. Isso evita que o frontend acumule regras que depois ficam difíceis de sincronizar com o painel administrativo.",
    likes: 8,
  },
];

export const forumArticles: ForumArticle[] = [
  {
    slug: "arquitetura-nextjs-escalavel",
    kind: "Artigo",
    title: "Como organizar um projeto Next.js para escalar sem perder clareza",
    description:
      "Uma arquitetura prática para separar páginas, domínios, conteúdo e integrações sem transformar o projeto em uma estrutura difícil de manter.",
    categoryId: "frontend",
    author: {
      name: "Equipe Ateliux",
      role: "Engenharia de Produto",
      avatar: "/avatars/sarah.svg",
    },
    publishedAt: "24 de julho de 2026",
    updatedAt: "24 de julho de 2026",
    readingTime: "8 min",
    difficulty: "Intermediário",
    views: 1240,
    commentsCount: 25,
    tags: ["Next.js", "React", "TypeScript", "Arquitetura"],
    lead:
      "Projetos Next.js costumam começar simples e crescer rapidamente. O problema aparece quando páginas, componentes, regras de negócio e chamadas de API passam a dividir o mesmo espaço sem uma direção clara.",
    sections: [
      {
        id: "artigo",
        eyebrow: "01 — Estrutura",
        title: "Organize o projeto por responsabilidade, não por acaso",
        paragraphs: [
          "Uma boa estrutura não existe para deixar a árvore de arquivos bonita. Ela existe para reduzir o tempo necessário para localizar uma regra, entender uma tela e modificar uma funcionalidade sem afetar áreas que não fazem parte daquela mudança.",
          "No Fórum Ateliux, as páginas continuam dentro de app, enquanto componentes específicos permanecem próximos do domínio ao qual pertencem. Conteúdo estático, tipagens, serviços e validações recebem espaços próprios e previsíveis.",
        ],
        bullets: [
          "app define rotas, layouts e composição de páginas;",
          "components concentra blocos visuais reutilizáveis;",
          "content mantém textos e dados editoriais fora da interface;",
          "services centraliza a comunicação com o backend;",
          "types e schemas formalizam contratos e validações.",
        ],
      },
      {
        id: "fluxo",
        eyebrow: "02 — Fluxo",
        title: "Mantenha o backend como fonte oficial dos dados",
        paragraphs: [
          "O frontend deve apresentar estados e interações, mas não assumir sozinho decisões que pertencem ao domínio. Permissões, publicação, moderação, autoria e status de uma discussão devem ser validados pelo backend.",
          "Essa separação permite que o frontend público e o painel administrativo consumam a mesma regra. Também reduz divergências quando novas permissões, categorias privadas ou fluxos de aprovação forem adicionados.",
        ],
      },
    ],
    codeExample: {
      id: "codigo",
      title: "Uma estrutura inicial por domínio",
      description:
        "O exemplo abaixo mantém a composição da rota pequena e transfere cada responsabilidade para uma área previsível.",
      language: "text",
      filename: "frontend/",
      code: `frontend/\n├── app/\n│   ├── discussions/[slug]/page.tsx\n│   └── categories/[slug]/page.tsx\n├── components/\n│   ├── forum/\n│   ├── article/\n│   └── ui/\n├── content/\n├── services/\n├── schemas/\n└── types/`,
    },
    insight: {
      id: "insight",
      eyebrow: "Insight Ateliux",
      title: "Escalabilidade também é velocidade de compreensão",
      description:
        "Um projeto não está organizado apenas quando suporta mais usuários. Ele também precisa permitir que uma pessoa encontre rapidamente o lugar certo para implementar uma mudança.",
    },
    discussionQuestion:
      "Qual parte da estrutura de um projeto Next.js costuma gerar mais confusão na sua equipe?",
    comments: sharedComments,
  },
  {
    slug: "nestjs-prisma-base-solida",
    kind: "Tutorial",
    title: "NestJS e Prisma: uma base sólida para APIs modernas",
    description:
      "Como combinar módulos, serviços, contratos e persistência para construir uma API que possa evoluir junto com o produto.",
    categoryId: "backend",
    author: {
      name: "Equipe Ateliux",
      role: "Backend e Infraestrutura",
      avatar: "/avatars/mike.svg",
    },
    publishedAt: "23 de julho de 2026",
    updatedAt: "24 de julho de 2026",
    readingTime: "10 min",
    difficulty: "Intermediário",
    views: 982,
    commentsCount: 16,
    tags: ["NestJS", "Prisma", "PostgreSQL", "API"],
    lead:
      "NestJS oferece uma estrutura modular clara, enquanto o Prisma simplifica o acesso tipado ao PostgreSQL. O resultado fica realmente sólido quando cada camada possui uma responsabilidade bem definida.",
    sections: [
      {
        id: "artigo",
        eyebrow: "01 — Domínio",
        title: "Módulos devem representar capacidades do produto",
        paragraphs: [
          "Em vez de criar módulos genéricos demais, prefira nomes que expressem o domínio: discussions, comments, moderation, notifications e users. Isso aproxima a estrutura técnica da linguagem utilizada pelo produto.",
          "Controllers recebem a entrada, services coordenam regras e repositories ou serviços de persistência isolam o acesso ao Prisma quando a complexidade justificar essa divisão.",
        ],
        bullets: [
          "DTOs validam entradas e saídas;",
          "guards controlam autenticação e autorização;",
          "services aplicam regras do domínio;",
          "Prisma persiste dados sem espalhar consultas pela aplicação.",
        ],
      },
      {
        id: "fluxo",
        eyebrow: "02 — Banco",
        title: "Modele estados importantes de forma explícita",
        paragraphs: [
          "Uma discussão pode ser rascunho, pendente, publicada, fechada ou arquivada. Esses estados devem existir no modelo e nas regras do backend, evitando inferências frágeis feitas apenas pela interface.",
          "O mesmo princípio vale para papéis, permissões, denúncias e histórico de moderação.",
        ],
      },
    ],
    codeExample: {
      id: "codigo",
      title: "Serviço de publicação com regra explícita",
      description:
        "O backend valida a transição antes de persistir o novo estado da discussão.",
      language: "typescript",
      filename: "discussions.service.ts",
      code: `async publish(id: string, actorId: string) {\n  const discussion = await this.findOwnedDraft(id, actorId);\n\n  return this.prisma.discussion.update({\n    where: { id: discussion.id },\n    data: {\n      status: 'PUBLISHED',\n      publishedAt: new Date(),\n    },\n  });\n}`,
    },
    insight: {
      id: "insight",
      eyebrow: "Insight Ateliux",
      title: "A API deve proteger o produto, não apenas transportar dados",
      description:
        "Quando regras importantes vivem somente no frontend, qualquer outro cliente da API pode ignorá-las. A validação definitiva precisa permanecer no backend.",
    },
    discussionQuestion:
      "Você prefere acessar o Prisma diretamente nos serviços ou adicionar uma camada de repositório?",
    comments: sharedComments,
  },
  {
    slug: "agentes-ia-valor-produtos",
    kind: "Insight",
    title: "Agentes de IA: onde realmente geram valor em produtos digitais",
    description:
      "Uma visão prática sobre automação, contexto, ferramentas e os limites necessários para transformar IA em uma capacidade confiável do produto.",
    categoryId: "ai",
    author: {
      name: "Equipe Ateliux",
      role: "IA e Automação",
      avatar: "/avatars/simon.svg",
    },
    publishedAt: "22 de julho de 2026",
    updatedAt: "22 de julho de 2026",
    readingTime: "7 min",
    difficulty: "Iniciante",
    views: 764,
    commentsCount: 4,
    tags: ["IA", "Agentes", "Automação", "Produto"],
    lead:
      "Um agente de IA gera valor quando recebe um objetivo claro, contexto suficiente, ferramentas limitadas e critérios objetivos para decidir quando agir, perguntar ou parar.",
    sections: [
      {
        id: "artigo",
        eyebrow: "01 — Aplicação",
        title: "Comece por tarefas repetitivas com resultado verificável",
        paragraphs: [
          "Resumos, classificação, extração de dados e preparação de rascunhos costumam ser bons pontos de entrada. Nesses cenários, o resultado pode ser comparado com critérios claros antes de afetar uma operação importante.",
          "Quanto maior a autonomia, maior deve ser a observabilidade: logs, histórico de decisões, limites de ação e aprovação humana para etapas sensíveis.",
        ],
        bullets: [
          "defina o objetivo em uma frase;",
          "restrinja as ferramentas disponíveis;",
          "registre entradas, decisões e resultados;",
          "estabeleça quando a intervenção humana é obrigatória.",
        ],
      },
      {
        id: "fluxo",
        eyebrow: "02 — Confiança",
        title: "Autonomia sem rastreabilidade cria risco",
        paragraphs: [
          "O usuário precisa entender o que o agente fez e por quê. Uma boa experiência permite revisar ações, desfazer alterações e identificar claramente quando uma resposta foi produzida por IA.",
          "A confiança cresce quando o sistema comunica seus limites em vez de esconder incertezas.",
        ],
      },
    ],
    codeExample: {
      id: "codigo",
      title: "Contrato mínimo para uma execução",
      description:
        "Uma execução rastreável registra objetivo, ferramentas permitidas e resultado final.",
      language: "typescript",
      filename: "agent-run.ts",
      code: `type AgentRun = {\n  objective: string;\n  allowedTools: string[];\n  requiresApproval: boolean;\n  status: 'queued' | 'running' | 'completed' | 'failed';\n  output?: unknown;\n};`,
    },
    insight: {
      id: "insight",
      eyebrow: "Insight Ateliux",
      title: "O melhor agente nem sempre é o mais autônomo",
      description:
        "Em muitos produtos, o maior ganho está em acelerar decisões humanas com contexto bem organizado, não em remover completamente a pessoa do processo.",
    },
    discussionQuestion:
      "Qual atividade repetitiva do seu trabalho seria uma boa candidata para um agente supervisionado?",
    comments: sharedComments,
  },
  {
    slug: "design-system-momento-certo",
    kind: "Artigo",
    title: "Design systems: quando um projeto deve criar o seu",
    description:
      "Sinais de que a interface precisa deixar de ser um conjunto de telas isoladas e começar a operar como um sistema visual compartilhado.",
    categoryId: "design",
    author: {
      name: "Equipe Ateliux",
      role: "Design de Produto",
      avatar: "/avatars/lena.svg",
    },
    publishedAt: "21 de julho de 2026",
    updatedAt: "21 de julho de 2026",
    readingTime: "6 min",
    difficulty: "Iniciante",
    views: 639,
    commentsCount: 12,
    tags: ["UI", "UX", "Design System", "Frontend"],
    lead:
      "Um design system passa a fazer sentido quando inconsistências visuais começam a atrasar decisões, criar retrabalho e dificultar a evolução simultânea de diferentes áreas do produto.",
    sections: [
      {
        id: "artigo",
        eyebrow: "01 — Sinais",
        title: "Repetição não controlada é o primeiro alerta",
        paragraphs: [
          "Botões semelhantes com alturas diferentes, espaçamentos decididos em cada tela e estados de formulário que mudam entre módulos indicam que a interface já precisa de regras compartilhadas.",
          "O primeiro passo não é criar uma biblioteca enorme. É documentar tokens, componentes fundamentais e padrões que aparecem com maior frequência.",
        ],
        bullets: [
          "cores e tipografia;",
          "espaçamento e grid;",
          "botões e campos;",
          "feedback, estados vazios e carregamento;",
          "regras de acessibilidade.",
        ],
      },
      {
        id: "fluxo",
        eyebrow: "02 — Evolução",
        title: "O sistema deve acompanhar o produto",
        paragraphs: [
          "Um design system não é um projeto paralelo congelado. Cada nova necessidade real pode gerar uma melhoria no componente ou uma nova variação documentada.",
          "Design e desenvolvimento precisam compartilhar o mesmo vocabulário para evitar divergência entre o arquivo de design e o código em produção.",
        ],
      },
    ],
    codeExample: {
      id: "codigo",
      title: "Tokens simples como ponto de partida",
      description:
        "Mesmo uma base pequena já reduz decisões repetidas e ajuda a manter consistência.",
      language: "css",
      filename: "tokens.css",
      code: `:root {\n  --space-2: 0.5rem;\n  --space-4: 1rem;\n  --radius-control: 0.5rem;\n  --color-text: #1f2933;\n  --color-accent: #45b8ef;\n}`,
    },
    insight: {
      id: "insight",
      eyebrow: "Insight Ateliux",
      title: "Consistência reduz escolhas desnecessárias",
      description:
        "Quando padrões básicos já estão resolvidos, a equipe pode concentrar energia nas decisões que realmente diferenciam o produto.",
    },
    discussionQuestion:
      "Qual inconsistência visual aparece com mais frequência nos projetos em que você trabalha?",
    comments: sharedComments,
  },
];

export function getForumArticleBySlug(slug: string) {
  return forumArticles.find((article) => article.slug === slug);
}
