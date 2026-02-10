import { MessageCircle, ShieldCheck, Zap, Timer, ArrowDown } from 'lucide-react';
import { SITE_IMAGES } from '@/siteImages';
import { useEffect, useState } from 'react';
import { getWhatsAppUrl, SITE_CONFIG } from '@/siteConfig';

export default function Hero() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = SITE_IMAGES.hero;
    img.onload = () => setBgUrl(SITE_IMAGES.hero);
    img.onerror = () => setBgUrl(null);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 md:py-16 lg:py-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 text-sm md:text-base mb-6 backdrop-blur-sm">
              <ShieldCheck size={18} />
              Conformidade, segurança e agilidade
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Reduza paradas de produção com manutenção industrial ágil
            </h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
              {SITE_CONFIG.tagline}. Preventiva e corretiva com foco em uptime, segurança e entrega rápida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="btn-cta flex items-center justify-center gap-2 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </button>
              <a
                href="#services"
                className="btn-cta-outline flex items-center justify-center gap-2 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
              >
                Ver serviços
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
              <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                <Zap size={20} className="text-accent mt-0.5" />
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">Resposta rápida</p>
                  <p className="text-sm text-white/75">Menos tempo parado, mais produção.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                <Timer size={20} className="text-accent mt-0.5" />
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">Orçamento ágil</p>
                  <p className="text-sm text-white/75">Atendimento em 1 clique no WhatsApp.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                <ShieldCheck size={20} className="text-accent mt-0.5" />
                <div>
                  <p className="text-sm md:text-base font-semibold text-white">Segurança</p>
                  <p className="text-sm text-white/75">Padrões, inspeções e treinamentos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="rounded-2xl bg-white/10 p-2 backdrop-blur-sm shadow-2xl">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={SITE_IMAGES.hero}
                  alt={`${SITE_CONFIG.companyName} - manutenção industrial`}
                  className="w-full h-[420px] object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown size={32} className="text-white" />
      </div>
    </section>
  );
}
