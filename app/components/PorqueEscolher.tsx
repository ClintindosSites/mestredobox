import Image from "next/image";

const benefits = [
  {
    title: "Vidro temperado",
    description: "Alta resistência e segurança para o seu banheiro.",
    icon: "✓",
  },
  {
    title: "Perfis de qualidade",
    description: "Acabamento sofisticado e feito para durar.",
    icon: "◆",
  },
  {
    title: "Instalação especializada",
    description: "Montagem cuidadosa para um resultado impecável.",
    icon: "↗",
  },
  {
    title: "Atendimento personalizado",
    description: "Acompanhamento desde o orçamento até a instalação.",
    icon: "◎",
  },
];

const PorqueEscolher = () => {
  return (
    <section className="bg-[#003c2d] text-white" role="porqueescolher">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Imagem */}
        <div className="relative min-h-125 overflow-hidden">
          <Image
            src="/images/box-de-canto.webp"
            alt="Box de banheiro instalado em ambiente moderno"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#003c2d]/30" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00c77b]">
            Por que escolher a Mestre do Box
          </span>

          <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight md:text-5xl">
            Mais que um box,
            <br />
            é um investimento
            <br />
            no seu bem-estar.
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-white/70">
            Trabalhamos para entregar soluções que combinam segurança, estética
            e funcionalidade. Cada projeto é pensado para valorizar o seu
            banheiro e aproveitar melhor o seu espaço.
          </p>

          {/* Benefícios */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map(benefit => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00c77b]/30 bg-[#00c77b]/10 text-lg text-[#00c77b]">
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>

                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueEscolher;
