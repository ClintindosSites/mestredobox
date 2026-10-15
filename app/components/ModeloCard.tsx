import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

interface ModelCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const phone = "5531984362710";

const message = encodeURIComponent(
  "Olá, gostaria de solicitar um orçamento para um box de banheiro."
);

const whatsappLink = `https://wa.me/${phone}?text=${message}`;

const ModelCard = ({ image, title, description, href }: ModelCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e8ece9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full">
      {/* Imagem do modelo */}
      <div className="block">
        <div className="relative h-80 aspect-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            loading="eager"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Informações do modelo */}
      <div className="p-5">
        <div className="inline-block">
          <h3 className="text-xl font-bold text-[#17201c] transition-colors group-hover:text-[#008f5a]">
            {title}
          </h3>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[#65716b]">
          {description}
        </p>

        {/* Ações */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#00c77b] px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-[#00a86b] hover:text-white gap-2 uppercase text-[#fefefe]"
          >
            Solicitar orçamento <BsWhatsapp />
          </Link>

          <Link
            href={href}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8ece9] px-4 py-3 text-sm font-medium text-[#17201c] transition-colors hover:border-[#00a86b] hover:text-[#008f5a]"
          >
            Conhecer modelo
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ModelCard;
