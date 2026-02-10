type Env = ImportMetaEnv;

function envString(env: Env, key: keyof Env): string | undefined {
  const value = env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export const SITE_CONFIG = {
  companyName: envString(import.meta.env, "VITE_COMPANY_NAME") ?? "RL Manutenções",
  tagline: envString(import.meta.env, "VITE_TAGLINE") ?? "Manutenção Industrial Integrada",
  whatsappNumber: envString(import.meta.env, "VITE_WHATSAPP_NUMBER") ?? "5519974064876",
  whatsappMessage:
    envString(import.meta.env, "VITE_WHATSAPP_MESSAGE") ??
    "Olá! Quero um orçamento para manutenção industrial. Podemos conversar?",
  phoneDisplay: envString(import.meta.env, "VITE_PHONE_DISPLAY") ?? "(19) 97406-4876",
  email: envString(import.meta.env, "VITE_CONTACT_EMAIL") ?? "contato@rlmanutencoes.com.br",
  serviceArea:
    envString(import.meta.env, "VITE_SERVICE_AREA") ??
    "Atendimento industrial sob demanda — preventiva, corretiva e suporte técnico.",
} as const;

export function getWhatsAppUrl() {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage,
  )}`;
}

