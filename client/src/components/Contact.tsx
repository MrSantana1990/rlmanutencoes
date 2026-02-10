import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { getWhatsAppUrl, SITE_CONFIG } from '@/siteConfig';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${SITE_CONFIG.whatsappNumber.replace(/\D/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${SITE_CONFIG.email}`;
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Entre em Contato</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Paradas custam caro. Fale conosco agora mesmo e receba um atendimento técnico rápido para reduzir riscos e recuperar a produção.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 text-white/80 mb-10">
          <MapPin size={18} className="text-accent" />
          <p className="text-sm md:text-base">{SITE_CONFIG.serviceArea}</p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent rounded-full">
                <MessageCircle size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
            <p className="text-white/80 mb-6 text-lg">{SITE_CONFIG.phoneDisplay}</p>
            <button
              onClick={handleWhatsAppClick}
              className="btn-cta w-full flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Enviar Mensagem
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent rounded-full">
                <Phone size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Telefone</h3>
            <p className="text-white/80 mb-6 text-lg">{SITE_CONFIG.phoneDisplay}</p>
            <button
              onClick={handlePhoneClick}
              className="btn-cta w-full flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Ligar Agora
            </button>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent rounded-full">
                <Mail size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
            <p className="text-white/80 mb-6 text-lg">{SITE_CONFIG.email}</p>
            <button
              onClick={handleEmailClick}
              className="btn-cta w-full flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Enviar Email
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={28} />
            Fale no WhatsApp Agora
          </button>
        </div>
      </div>
    </section>
  );
}
