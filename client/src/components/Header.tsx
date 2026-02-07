import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '5519974064876';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de conhecer mais sobre os serviços de manutenção industrial da RL Manutenções.';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">RL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary">RL Manutenções</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Industrial Integrada</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center gap-2 btn-cta"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
