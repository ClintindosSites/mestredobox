"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/box-frontal", label: "Box Frontal" },
  { href: "/box-de-canto", label: "Box de Canto" },
  { href: "/box-ate-o-teto", label: "Box Até o Teto" },
  { href: "/box-sob-medida", label: "Box Sob Medida" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const previousScrollY = useRef(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuOpenRef = useRef(false);

  const closeMenu = () => {
    menuOpenRef.current = false;
    setMenuOpen(false);
  };

  const openMenu = () => {
    menuOpenRef.current = true;
    setHeaderVisible(true);
    setMenuOpen(true);
  };

  // Esconde o cabeçalho ao rolar para baixo e mostra ao subir.
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const difference = currentY - previousScrollY.current;

      if (menuOpenRef.current || currentY < 80) {
        setHeaderVisible(true);
      } else if (difference > 5) {
        setHeaderVisible(false);
      } else if (difference < -5) {
        setHeaderVisible(true);
      }

      previousScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll de fundo e permite fechar com Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* CABEÇALHO */}
      <header
        className={`sticky top-0 z-40 w-full border-b border-[#00c77b] bg-[#111815] text-white transition-transform duration-300 ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
          <Link
            href="/"
            aria-label="Mestre do Box - Página inicial"
            className="min-w-0 shrink"
          >
            <Image
              src="/logo-desktop.webp"
              alt="Logomarca Mestre do Box"
              width={256}
              height={94}
              priority
              className="h-auto w-32 sm:w-40 lg:w-45"
              sizes="(max-width: 640px) 128px, (max-width: 1023px) 160px, 180px"
            />
          </Link>

          {/* Navegação desktop */}
          <nav
            aria-label="Menu principal"
            className="hidden items-center gap-5 lg:flex xl:gap-6"
          >
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium transition-colors hover:text-[#00c77b] xl:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botão mobile e tablet */}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/20 transition-colors hover:border-[#00c77b] hover:text-[#00c77b] lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* OVERLAY: FORA DO HEADER */}
      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Fechar menu"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-black/65 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* PAINEL LATERAL: FORA DO HEADER */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal={menuOpen ? "true" : undefined}
        aria-label="Navegação do Mestre do Box"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-y-0 right-0 z-[60] flex h-[100dvh] w-[min(70%,360px)] max-w-full flex-col overflow-y-auto border-l border-[#00c77b]/30 bg-[#111815] text-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-5">
          <Link
            href="/"
            aria-label="Mestre do Box - Página inicial"
            className="min-w-0 shrink"
          >
            <Image
              src="/logo-desktop.webp"
              alt="Logomarca Mestre do Box"
              width={256}
              height={94}
              priority
              className="h-auto w-32 sm:w-40 lg:w-45"
              sizes="(max-width: 640px) 128px, (max-width: 1023px) 160px, 180px"
            />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            aria-label="Fechar menu lateral"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 hover:border-[#00c77b] hover:text-[#00c77b]"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Navegação mobile"
          className="flex flex-1 flex-col gap-2 p-5"
        >
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Nossos modelos
          </p>

          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-transparent px-4 py-3 text-sm font-medium transition-colors hover:border-[#00c77b]/25 hover:bg-[#00c77b]/10 hover:text-[#00c77b] sm:text-base"
            >
              <span>{link.label}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#00c77b]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          <div className="mt-auto border-t border-white/10 px-3 pt-6">
            <p className="text-sm leading-relaxed text-white/60">
              Encontre o modelo de box ideal para o seu banheiro.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}
