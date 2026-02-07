import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5519974064876';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de conhecer mais sobre os serviços de manutenção industrial da RL Manutenções.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="font-bold">RL</span>
              </div>
              <h3 className="text-xl font-bold">RL Manutenções</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Especializada em manutenção industrial integrada com soluções completas para máxima performance e segurança.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#differentials" className="text-white/80 hover:text-accent transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/80 text-sm mb-2">WhatsApp / Telefone:</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="text-accent font-semibold hover:underline"
                >
                  (19) 97406-4876
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} RL Manutenções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
