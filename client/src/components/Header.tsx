import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getWhatsAppUrl, SITE_CONFIG } from "@/siteConfig";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#");

  const navLinks = useMemo(
    () => [
      { label: "Sobre", href: "#about" },
      { label: "Depoimentos", href: "#testimonials" },
      { label: "Serviços", href: "#services" },
      { label: "Diferenciais", href: "#differentials" },
      { label: "Contato", href: "#contact" },
    ],
    [],
  );

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", "")).filter(Boolean);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0]?.target?.id;
        if (top) setActiveHash(`#${top}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.2, 0.35] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">RL</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg md:text-xl font-bold text-primary">
                {SITE_CONFIG.companyName}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {SITE_CONFIG.tagline}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeHash === link.href ? "page" : undefined}
                className={[
                  "text-foreground hover:text-accent font-medium transition-colors",
                  activeHash === link.href ? "text-accent" : "",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors"
              aria-label={`Abrir WhatsApp: ${SITE_CONFIG.phoneDisplay}`}
            >
              WhatsApp: {SITE_CONFIG.phoneDisplay}
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 btn-cta"
            >
              <MessageCircle size={20} />
              Orçamento
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="mx-4 btn-cta flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-4 text-sm font-semibold text-muted-foreground"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
