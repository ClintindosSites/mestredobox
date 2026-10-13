import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[--foreground] text-white border-b-[#00c77b] border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
        <Link href="/">
          <Image
            src="/logo-desktop.webp"
            alt="Logomarca de Mestre do Box"
            loading="eager"
            width={300}
            height={100}
            className="h-auto w-45"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/box-frontal">Box Frontal</Link>
          <Link href="/box-de-canto">Box de Canto</Link>
          <Link href="/box-ate-o-teto">Box Até o Teto</Link>
          <Link href="/box-sob-medida">Box Sob Medida</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
