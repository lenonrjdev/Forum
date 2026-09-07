# Ateliux Forum — Frontend

Frontend do Fórum Ateliux em Next.js 16, React 19, TypeScript e Tailwind CSS 4.

## Estado atual

A interface está preparada para a reta final de integração com o backend. Os fluxos interativos usam estado local/mocks para validar UX antes de autenticação e persistência reais.

### Rotas principais

- `/` — feed do fórum
- `/latest` — discussões recentes
- `/categories` e `/categories/[slug]` — descoberta por categoria
- `/tags/[slug]` — descoberta por tag
- `/search?q=` — pesquisa
- `/discussions/[slug]` — artigo/discussão full width
- `/discussions/[slug]/edit` — edição editorial
- `/write` — nova publicação
- `/login`, `/register`, `/forgot-password`, `/reset-password` — autenticação
- `/u/ateliux`, `/u/usuario-ateliux` — perfis
- `/activity`, `/saved`, `/following` — atividade pessoal
- `/notifications` — notificações
- `/settings` — configurações
- `/about`, `/community-guidelines`, `/privacy`, `/terms` — páginas institucionais

## Ações já representadas no frontend

- busca e filtros
- paginação
- seguir categoria e discussão
- salvar artigos
- compartilhar/copiar link
- comentários e respostas locais
- curtidas locais
- denúncia com modal
- solução aceita
- copiar bloco de código
- preview, rascunho e publicação no editor
- notificações e marcar como lidas
- estados vazios, loading, erro e 404
- navegação mobile

## Dados de teste

Não utilizar nomes pessoais do usuário em mocks, seeds ou exemplos. Os dados de demonstração usam apenas nomenclaturas neutras como `Equipe Ateliux`, `Usuário Ateliux` e `Usuário Ateliux 01`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run validate:names
npm run typecheck
npm run lint
npm run build
```

O script `validate:names` impede a reintrodução de nomenclaturas pessoais proibidas no frontend.

## Git

O repositório principal deve continuar sendo `./Blog`. Não crie um `.git` dentro de `frontend`, pois isso transformaria a pasta em um repositório aninhado.

Para esta atualização, a mensagem de commit recomendada no repositório principal é:

```text
feat(frontend): complete Ateliux forum frontend experience
```
