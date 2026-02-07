import { MessageCircle, ArrowDown } from 'lucide-react';
import { SITE_IMAGES } from '@/siteImages';
import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '5519974064876';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de conhecer mais sobre os serviços de manutenção industrial da RL Manutenções.';

export default function Hero() {
  const [bgUrl, setBgUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = SITE_IMAGES.hero;
    img.onload = () => setBgUrl(SITE_IMAGES.hero);
    img.onerror = () => setBgUrl(null);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Manutenção Industrial Integrada
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Sua produção não pode parar! Oferecemos soluções completas em manutenção industrial com máxima performance e segurança.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="btn-cta flex items-center gap-2 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
          >
            <MessageCircle size={24} />
            Fale no WhatsApp
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown size={32} className="text-white" />
      </div>
    </section>
  );
}
