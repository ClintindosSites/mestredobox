import ModelCard from "./ModeloCard";

const models = [
  {
    image: "/models/box-frontal.webp",
    title: "Box Frontal",
    description: "Praticidade e elegância para o seu dia a dia.",
    href: "/box-frontal",
  },
  {
    image: "/models/box-de-canto.webp",
    title: "Box de Canto",
    description: "Aproveite melhor o espaço do seu banheiro.",
    href: "/box-de-canto",
  },
  {
    image: "/models/box-ate-o-teto.webp",
    title: "Box Até o Teto",
    description: "Mais sofisticação e modernidade para o ambiente.",
    href: "/box-ate-o-teto",
  },
  {
    image: "/models/box-sob-medida.webp",
    title: "Box Sob Medida",
    description: "Uma solução feita exatamente para o seu projeto.",
    href: "/box-sob-medida",
  },
];

const Models = () => {
  return (
    <section id="modelos" className="bg-[#f7f8f6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-xl">
          {" "}
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00a86b]">
            Nossos modelos
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-[#17201c] md:text-5xl">
            O box ideal para o seu banheiro
          </h2>
          <p className="mt-4 leading-relaxed text-[#65716b]">
            Trabalhamos com diferentes modelos de box, sempre com foco na
            qualidade, no design e no melhor aproveitamento do seu espaço.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map(model => (
            <ModelCard
              key={model.title}
              image={model.image}
              title={model.title}
              description={model.description}
              href={model.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
