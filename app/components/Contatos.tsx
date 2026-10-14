import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import LeadForm from "./WhatsAppForm";

const Contatos = () => {
  const phone = "5531984362710";
  const message =
    "Olá, gostaria de fazer um orçamento de um box para meu banheiro";
  const link = `https://wa.me/${phone}?text=${message}`;
  return (
    <section
      className="
    relative min-h-180
    bg-cover bg-center bg-no-repeat
    bg-[linear-gradient(90deg,rgba(7,16,14,0.97)_0%,rgba(7,16,14,0.88)_30%,rgba(7,16,14,0.40)_60%,rgba(7,16,14,0.05)_100%),url('/box-hero.webp')] bg-fixed
  "
    >
      <div className="mx-auto flex flex-wrap min-h-180 max-w-7xl items-center px-6 lg:px-10">
        <div className="flex flex-col flex-1 mt-15 gap-10">
          <h2 className="text-3xl font-bold leading-[1.05] md:text-6xl lg:text-7xl ">
            Estamos próximo de você, entre em contato agora mesmo
          </h2>
          <p className="text-2xl">
            Estamos localizados no bairro Pindorama em Belo Horizonte. Atendemos
            toda Grande BH
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2037859185243!2d-44.0231902!3d-19.9158155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6942916b2c623%3A0x44888ce09f03e90c!2sR.%20Fl%C3%B4r%20de%20Alecrim%2C%2041%20-%20Pindorama%2C%20Belo%20Horizonte%20-%20MG%2C%2030865-350!5e0!3m2!1spt-BR!2sbr!4v1791921809332!5m2!1spt-BR!2sbr"
            className="w-full min-h-75"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <Link
            href={link}
            className="
            rounded-xl
            bg-[#00c77b]
            px-7 py-4
            font-semibold
            uppercase
     
            transition
            hover:bg-[#00a86b]
            w-fit text-white flex items-center gap-2
          "
          >
            Solicite seu orçamento <BsWhatsapp />
          </Link>
          <div className="flex gap-5">
            <Link
              href={"https://instagram.com/mestredobox"}
              target="_blank"
              className="hover:bg-[#E4405F] hover:rounded-full h-20 w-20 flex items-center justify-center text-4xl"
            >
              <BsInstagram />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61557937206750"}
              className="hover:bg-[#1877F2] hover:rounded-full h-20 w-20 flex items-center justify-center text-4xl"
              target="_blank"
            >
              <BsFacebook />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="hover:bg-[#25D366]  hover:rounded-full h-20 w-20 flex items-center justify-center text-4xl"
            >
              <BsWhatsapp />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 my-15">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default Contatos;
