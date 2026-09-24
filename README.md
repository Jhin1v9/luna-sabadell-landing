# Luna · Sabadell Landing

Landing page de Luna (agente de IA da Nexo Digital) para o mercado de Sabadell / Barcelona.

**Preview:** https://jhin1v9.github.io/luna-sabadell-landing/

## Stack (v2 — 2026-09-24)

- React 18 + Vite 5 + Tailwind CSS 3
- Framer Motion (animações) + Lucide React (ícones — sem emojis)
- Mocks animados de WhatsApp e Instagram DM (componente `PhoneMock`)

## Estrutura

- `index.html` + `assets/` — build de produção (servido pelo GitHub Pages, **não editar à mão**)
- `app/` — código-fonte

## Desenvolver

```bash
cd app
pnpm install
pnpm dev        # servidor local
pnpm build      # gera dist/ — copiar para a raiz do repo antes do commit
```

## Configurar número de WhatsApp

Todos os botões usam o link do `wa.me` definido em `app/src/config.js`
(`WA_NUMBER`). Trocar pelo número real da Nexo em formato internacional
sem `+` (ex: `34612345678`) e rodar `pnpm build` + copiar `dist/` para a raiz.
