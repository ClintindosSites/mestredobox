import ModelCard from "./ModeloCard";

const models = [
  {
    image: "/models/box-frontal.webp",
    title: "Box Frontal",
    description: "Praticidade e elegância para o seu dia a dia.",
    href: "/box-de-banheiro/box-frontal",
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
const ModelosBox = () => {
  return (
    <section
      className="
    relative min-h-180
   
  "
      id="modelos"
      role="modelos"
    >
      <div className="mx-auto flex min-h-180 max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl text-white">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
            Nossos modelos
          </span>
          <h2 className="text-3xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            O box ideal para o{" "}
            <span className="text-[#00c77b]">seu banheiro</span> com modernidade
            e segurança
            <span className="text-[#00c77b]">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Trabalhamos com diferentes modelos de box, sempre com foco na
            qualidade, no design e no melhor aproveitamento do seu espaço.
          </p>
        </div>
      </div>
      <div
        className="
  flex
  max-[1023px]:grid
  grid-cols-1
  min-[420px]:max-[599px]:grid-cols-2
  sm:grid-cols-2
  lg:flex
  gap-6
  max-w-7xl
  mx-auto
  min-h-180
  items-center
  px-6
  lg:px-10
  mb-20
"
      >
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
    </section>
  );
};

export default ModelosBox;
