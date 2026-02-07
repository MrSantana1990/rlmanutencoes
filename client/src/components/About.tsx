import { CheckCircle2, Users, Zap } from 'lucide-react';
import { SITE_IMAGES } from '@/siteImages';
import SafeImage from '@/components/SafeImage';

export default function About() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Qualidade Garantida',
      description: 'Todos os serviços executados com garantia de qualidade e precisão técnica.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Técnicos experientes e engenheiros qualificados para análises e projetos de manutenção detalhados.',
    },
    {
      icon: Zap,
      title: 'Atendimento Rápido',
      description: 'Resposta ágil e suporte técnico especializado para resolver problemas rapidamente.',
    },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <SafeImage
              src={SITE_IMAGES.team}
              alt="Equipe RL Manutenções"
              className="w-full rounded-lg shadow-lg"
              fallbackLabel="Equipe RL Manutenções"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Sobre a RL Manutenções</h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              A RL Manutenções é uma empresa especializada em manutenção industrial integrada, oferecendo uma gama completa de serviços para garantir a máxima performance e segurança de suas operações.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                      <p className="text-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
