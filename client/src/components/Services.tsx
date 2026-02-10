import type { CSSProperties } from "react";
import { Droplet, Wind, Wrench, Zap } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { getWhatsAppUrlWithMessage } from "@/siteConfig";
import { SITE_IMAGES } from "@/siteImages";

export default function Services() {
  const services = [
    {
      id: "mecanica",
      icon: Wrench,
      title: "Mecânica Industrial",
      description:
        "Diagnóstico, preventiva e corretiva para reduzir falhas e manter as máquinas operando com segurança.",
      image: SITE_IMAGES.mechanical,
    },
    {
      id: "hidraulica",
      icon: Droplet,
      title: "Hidráulica",
      description:
        "Manutenção e reparo de cilindros, bombas e válvulas com foco em confiabilidade e redução de vazamentos.",
      image: SITE_IMAGES.hydraulic,
    },
    {
      id: "pneumatica",
      icon: Wind,
      title: "Pneumática",
      description:
        "Revisão preventiva e corretiva de compressores, cilindros e válvulas para evitar perda de pressão e paradas.",
      image: SITE_IMAGES.pneumatic,
    },
    {
      id: "eletrica",
      icon: Zap,
      title: "Elétrica Industrial",
      description:
        "Reparo e manutenção de painéis, motores e circuitos para aumentar uptime e reduzir riscos operacionais.",
      image: SITE_IMAGES.electrical,
    },
  ] as const;

  return (
    <section id="services" className="section section-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Serviços que oferecemos
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Mecânica, hidráulica, pneumática e elétrica com foco em uptime, segurança e
            redução de paradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            const message = `Olá! Quero um orçamento para ${service.title}. Podemos conversar?`;

            return (
              <div key={service.id} className="service-card" data-service={service.id}>
                <div
                  className="service-card-media"
                  style={{ "--service-media-bg": `url("${service.image}")` } as CSSProperties}
                >
                  <SafeImage
                    className="service-card-media-img"
                    src={service.image}
                    alt={service.title}
                    fallbackLabel={service.title}
                  />
                </div>

                <div className="service-card-content">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon size={32} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => window.open(getWhatsAppUrlWithMessage(message), "_blank")}
                      className="btn-cta w-full sm:w-auto"
                    >
                      Solicitar orçamento
                    </button>
                    <a
                      href="#contact"
                      className="btn-cta-outline w-full sm:w-auto text-center"
                    >
                      Falar com a equipe
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

