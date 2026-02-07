type Env = ImportMetaEnv;

function envUrl(env: Env, key: keyof Env): string | undefined {
  const value = env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export const SITE_IMAGES = {
  hero:
    envUrl(import.meta.env, "VITE_HERO_IMAGE_URL") ??
    "/images/hero.jpg",
  team:
    envUrl(import.meta.env, "VITE_TEAM_IMAGE_URL") ??
    "/images/team.jpg",
  mechanical:
    envUrl(import.meta.env, "VITE_MECHANICAL_IMAGE_URL") ??
    "/images/mechanical.jpg",
  hydraulic:
    envUrl(import.meta.env, "VITE_HYDRAULIC_IMAGE_URL") ??
    "/images/hydraulic.jpg",
  pneumatic:
    envUrl(import.meta.env, "VITE_PNEUMATIC_IMAGE_URL") ??
    envUrl(import.meta.env, "VITE_HYDRAULIC_IMAGE_URL") ??
    "/images/pneumatic.jpg",
  electrical:
    envUrl(import.meta.env, "VITE_ELECTRICAL_IMAGE_URL") ??
    "/images/electrical.jpg",
} as const;
