import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#171717]">
      {" "}
      <div className="max-w-300 text-center flex items-center flex-col my-15 justify-center">
        <h3 className="text-5xl font-bold text-[#00c77b]">Mestre do Box</h3>
        <p className="text-xl">&copy; Todos os direitos reservados</p>
        <p className="text-xl">Belo Horizonte - MG - 2026</p>
        <p className="text-xl my-5">
          Desenvolvido por <br />
          <Link
            href={"https://clintindossites.com.br"}
            target="_blank"
            className="text-[#00c77b] font-bold"
          >
            Clintin dos Sites
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
