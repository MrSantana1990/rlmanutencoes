type Env = ImportMetaEnv;

function envUrl(env: Env, key: keyof Env): string | undefined {
  const value = env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function localAsset(path: string) {
  if (!path.startsWith("/")) return path;
  if (import.meta.env.DEV) {
    const sep = path.includes("?") ? "&" : "?";
    return `${path}${sep}t=${Date.now()}`;
  }
  const version = envUrl(import.meta.env, "VITE_ASSET_VERSION");
  if (!version) return path;
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}v=${encodeURIComponent(version)}`;
}

export const SITE_IMAGES = {
  hero:
    envUrl(import.meta.env, "VITE_HERO_IMAGE_URL") ??
    localAsset("/images/hero.jpg"),
  team:
    envUrl(import.meta.env, "VITE_TEAM_IMAGE_URL") ??
    localAsset("/images/team.jpg"),
  mechanical:
    envUrl(import.meta.env, "VITE_MECHANICAL_IMAGE_URL") ??
    localAsset("/images/mechanical.jpg"),
  hydraulic:
    envUrl(import.meta.env, "VITE_HYDRAULIC_IMAGE_URL") ??
    localAsset("/images/hydraulic.jpg"),
  pneumatic:
    envUrl(import.meta.env, "VITE_PNEUMATIC_IMAGE_URL") ??
    localAsset("/images/pneumatic.jpg"),
  electrical:
    envUrl(import.meta.env, "VITE_ELECTRICAL_IMAGE_URL") ??
    localAsset("/images/electrical.jpg"),
} as const;
