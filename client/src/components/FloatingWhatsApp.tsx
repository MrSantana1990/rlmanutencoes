import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5519974064876';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de conhecer mais sobre os serviços de manutenção industrial da RL Manutenções.';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
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
