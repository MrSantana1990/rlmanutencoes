# RL Manutenções — Site

Site institucional (one-page) da RL Manutenções.

- Frontend: **Vite + React + TypeScript**
- Produção (opcional): **Express** servindo o build (`dist/`)

## Rodar local (dev)
```bash
pnpm install
pnpm dev
```

Abrir: `http://localhost:3000`

## Build e produção (Node/Express)
```bash
pnpm build
pnpm start
```

## Deploy no Netlify
Este repositório já inclui `netlify.toml`.

- **Build command:** `pnpm run build:netlify`
- **Publish directory:** `dist/public`
- SPA routing: `client/public/_redirects`

## Variáveis de ambiente (imagens/WhatsApp)
- Ver `.env.example` e `STAGING.md`
- Por padrão o projeto usa imagens locais em `client/public/images`

## Git (subir atualizações)
```bash
git status
git add -A
git commit -m "Seu commit aqui"
git push
```

Primeira vez no repositório remoto:
```bash
git remote add origin https://github.com/MrSantana1990/rlmanutencoes.git
git push -u origin main
```
