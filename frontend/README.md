# Ateliux Forum — Frontend

Réplica em Next.js + React + TypeScript + Tailwind CSS do layout de fórum enviado como referência.

## Estrutura

```text
frontend/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── forum/
│   │   ├── avatar-stack.tsx
│   │   ├── discussion-card.tsx
│   │   ├── discussion-list.tsx
│   │   ├── forum-header.tsx
│   │   ├── forum-home.tsx
│   │   ├── forum-sidebar.tsx
│   │   └── forum-toolbar.tsx
│   └── ui/
│       └── icon-button.tsx
├── content/
│   └── forum-home.content.ts
├── public/
│   ├── avatars/
│   └── brand/
├── types/
│   └── forum.ts
└── ...arquivos de configuração
```

## Instalação

Copie o conteúdo desta pasta para `C:\Projetos\Blog\frontend`, preservando seu `.git` da raiz do projeto.

```powershell
cd C:\Projetos\Blog\frontend
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Observações

- A logo principal usa a URL Cloudinary informada no conteúdo.
- Os avatares são placeholders locais e podem ser substituídos depois.
- Os textos, categorias e discussões ficam centralizados em `content/forum-home.content.ts`.
- A UI está pronta para conexão futura com o backend NestJS.
