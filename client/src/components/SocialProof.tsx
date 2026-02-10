import { BadgeCheck, ClipboardList, HardHat, ShieldCheck } from "lucide-react";

export default function SocialProof() {
  const items = [
    {
      icon: HardHat,
      title: "Equipe técnica",
      description: "Profissionais experientes para diagnóstico, execução e suporte.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança e conformidade",
      description: "Procedimentos com foco em normas, treinamentos e inspeções.",
    },
    {
      icon: ClipboardList,
      title: "Plano de manutenção",
      description: "Preventiva e corretiva para reduzir falhas e custos de parada.",
    },
    {
      icon: BadgeCheck,
      title: "Atendimento ágil",
      description: "Contato rápido e alinhamento do escopo com objetividade.",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Confiança para operar sem sustos
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            O que você ganha na prática: mais previsibilidade, mais segurança e menos paradas inesperadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

