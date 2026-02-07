# RL Manutenções — Site

Site institucional (one-page) construído com **Vite + React + TypeScript** e um servidor **Express** para servir o build em produção.

## Rodar local (dev)
```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:3000`.

## Build e produção
```bash
pnpm build
pnpm start
```

## Deploy no Netlify
- **Build command:** `pnpm build:netlify`
- **Publish directory:** `dist/public`
- SPA routing já está configurado via `client/public/_redirects`.

## Imagens
Por padrão o projeto usa imagens locais em `client/public/images`.

Para apontar para AWS/CloudFront no staging/produção, defina as variáveis `VITE_*_IMAGE_URL` (veja `.env.example`).
