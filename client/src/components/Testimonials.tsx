import { MessageCircle, Quote } from "lucide-react";
import { getWhatsAppUrlWithMessage, SITE_CONFIG, TESTIMONIALS } from "@/siteConfig";

export default function Testimonials() {
  const years =
    typeof SITE_CONFIG.sinceYear === "number"
      ? Math.max(0, new Date().getFullYear() - SITE_CONFIG.sinceYear)
      : null;

  return (
    <section id="testimonials" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Prova social e credibilidade
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Paradas custam caro. Por isso, transparência e referências importam.
            {typeof SITE_CONFIG.sinceYear === "number" ? ` Desde ${SITE_CONFIG.sinceYear}.` : ""}
            {years !== null && years > 0 ? ` (${years}+ anos de atuação)` : ""}
          </p>
        </div>

        {TESTIMONIALS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Quote className="text-accent" size={22} />
                </div>
                <p className="text-foreground leading-relaxed">“{t.text}”</p>
                <div className="mt-5">
                  <p className="font-bold text-primary">{t.name}</p>
                  {t.company ? (
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white shadow-md p-8 md:p-10 text-center">
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Quer ver referências, fotos reais de serviços e escopos similares ao seu? Peça pelo
              WhatsApp e enviamos o que fizer sentido para sua operação.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <button
                onClick={() =>
                  window.open(
                    getWhatsAppUrlWithMessage(
                      "Olá! Pode me enviar referências/fotos de serviços e um orçamento?",
                    ),
                    "_blank",
                  )
                }
                className="btn-cta flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar referências
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

