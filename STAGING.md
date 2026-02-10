# Staging / Ambiente de Teste

## Variáveis de ambiente (Vite)
Defina antes do build (ex.: no pipeline) ou via arquivo `.env.production` (não commitar).

- Se não definir `VITE_*_IMAGE_URL`, o site usa imagens locais em `client/public/images`.

- `VITE_HERO_IMAGE_URL`
- `VITE_TEAM_IMAGE_URL`
- `VITE_MECHANICAL_IMAGE_URL`
- `VITE_HYDRAULIC_IMAGE_URL`
- `VITE_PNEUMATIC_IMAGE_URL`
- `VITE_ELECTRICAL_IMAGE_URL`
- `VITE_ASSET_VERSION` (opcional; força refresh de `/images/*` em produção)

Analytics (opcional):
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

## Build
```bash
pnpm install
pnpm build
```

## Run (Node/Express)
```bash
pnpm start
```

Variáveis do servidor:
- `PORT` (padrão: `3000`)
- `NODE_ENV=production`

## Checklist rápido
- Homepage carrega sem erros no console.
- Seção Hero renderiza (se `VITE_HERO_IMAGE_URL` falhar, cai para fundo gradiente).
- Imagens de “Sobre” e “Serviços” aparecem (se falharem, cai para placeholder).
- Links de WhatsApp abrem com a mensagem correta.

Checagem rápida dos URLs (antes do build), exemplo:
```bash
curl -I "$VITE_HERO_IMAGE_URL"
curl -I "$VITE_TEAM_IMAGE_URL"
```
