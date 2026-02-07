import { Wrench, Droplet, Wind, Zap } from 'lucide-react';
import { SITE_IMAGES } from '@/siteImages';
import SafeImage from '@/components/SafeImage';

export default function Services() {
  const services = [
    {
      id: 'mecanica',
      icon: Wrench,
      title: 'Mecânica Industrial',
      description: 'Manutenção preventiva e corretiva de máquinas e equipamentos industriais, incluindo pontes rolantes.',
      image: SITE_IMAGES.mechanical,
    },
    {
      id: 'hidraulica',
      icon: Droplet,
      title: 'Hidráulica',
      description: 'Serviços de reparo e manutenção de sistemas hidráulicos, incluindo cilindros, bombas e válvulas.',
      image: SITE_IMAGES.hydraulic,
    },
    {
      id: 'pneumatica',
      icon: Wind,
      title: 'Pneumática',
      description: 'Manutenção de sistemas pneumáticos, incluindo compressores, cilindros e válvulas.',
      image: SITE_IMAGES.pneumatic,
    },
    {
      id: 'eletrica',
      icon: Zap,
      title: 'Elétrica Industrial',
      description: 'Instalação, manutenção e reparo de sistemas elétricos industriais, incluindo painéis de controle e motores.',
      image: SITE_IMAGES.electrical,
    },
  ];

  return (
    <section id="services" className="section section-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nossos Serviços</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Oferecemos soluções especializadas em manutenção industrial para garantir a máxima performance de suas operações.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  fallbackLabel={service.title}
                />
                <div className="service-card-content">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon size={32} className="text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
