import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const phone = "5531984362710";
const message = encodeURIComponent(
  "Olá, gostaria de solicitar um orçamento de um box para meu banheiro."
);
const link = `https://wa.me/${phone}?text=${message}`;
const Hero = () => {
  return (
    <section
      className="
    relative min-h-180
    bg-cover bg-center bg-no-repeat
    bg-[linear-gradient(90deg,rgba(7,16,14,0.97)_0%,rgba(7,16,14,0.88)_30%,rgba(7,16,14,0.40)_60%,rgba(7,16,14,0.05)_100%),url('/box-hero.webp')]
  "
      id="hero"
    >
      <div className="mx-auto flex min-h-180 max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl text-white">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
            Atendimento na Grande BH
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Box para banheiro{" "}
            <span className="text-[#00c77b]">com qualidade</span> e segurança
            <span className="text-[#00c77b]">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Transforme seu banheiro com um box moderno, seguro e sob medida para
            o seu espaço, unindo design, praticidade e excelente
            custo-benefício.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={link}
              className="
            rounded-xl
            bg-[#00c77b]
            px-6 py-4
            font-semibold
            uppercase
            text-[#fefefe]
            transition
            hover:bg-[#00a86b] flex items-center gap-2 justify-center hover:text-white
          "
            >
              Solicite seu orçamento <BsWhatsapp />
            </Link>

            <Link
              href="#modelos"
              className="
            rounded-xl
            border border-white/20
            bg-white/10
            px-7 py-4
            uppercase
            text-white
            backdrop-blur-sm
            transition
            hover:bg-white/15
          "
            >
              Conheça nossos modelos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
