function nonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function initAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!nonEmpty(endpoint) || !nonEmpty(websiteId)) {
    return;
  }

  const normalizedEndpoint = endpoint.replace(/\/+$/, "");

  const existing = document.querySelector(
    `script[src^="${normalizedEndpoint}/umami"]`,
  );
  if (existing) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${normalizedEndpoint}/umami`;
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}

