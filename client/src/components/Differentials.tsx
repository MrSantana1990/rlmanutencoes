import { Shield, Lightbulb, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/siteConfig';

export default function Differentials() {
  const differentials = [
    {
      icon: Shield,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Todos os procedimentos seguem rigorosos padrões de segurança industrial e conformidade com normas, com treinamentos e inspeções regulares para proteger sua equipe e equipamentos.',
    },
    {
      icon: Lightbulb,
      title: 'Soluções Personalizadas',
      description: 'Análise individualizada de cada cliente para oferecer soluções e planos de manutenção adequados às suas necessidades.',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Resposta ágil com suporte técnico especializado disponível para resolver problemas rapidamente e minimizar paradas.',
    },
  ];

  return (
    <section id="differentials" className="section section-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por que escolher a {SITE_CONFIG.companyName}</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Estratégia + execução: planejamento de manutenção, suporte técnico e foco em produtividade com segurança.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Icon size={40} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{diff.title}</h3>
                <p className="text-foreground text-lg leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
