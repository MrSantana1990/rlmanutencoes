import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/siteConfig';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="floating-btn"
      title="Enviar mensagem no WhatsApp"
      aria-label="Enviar mensagem no WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}
