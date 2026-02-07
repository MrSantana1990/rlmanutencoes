import { useEffect, useMemo, useState } from "react";

function fallbackSvgDataUrl(label: string) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#0ea5e9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <rect x="40" y="40" width="1120" height="595" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"/>
  <text x="600" y="338" text-anchor="middle" dominant-baseline="middle" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="40" fill="rgba(255,255,255,0.92)">
    ${label}
  </text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

type SafeImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  src: string;
  fallbackLabel?: string;
};

export default function SafeImage({
  src,
  alt,
  fallbackLabel = "Imagem indisponível",
  onError,
  ...props
}: SafeImageProps) {
  const fallbackSrc = useMemo(() => fallbackSvgDataUrl(fallbackLabel), [fallbackLabel]);
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    setResolvedSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      alt={alt}
      src={resolvedSrc}
      loading={props.loading ?? "lazy"}
      decoding={props.decoding ?? "async"}
      onError={(e) => {
        if (resolvedSrc !== fallbackSrc) {
          setResolvedSrc(fallbackSrc);
        }
        onError?.(e);
      }}
    />
  );
}

