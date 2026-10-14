"use client";

import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppFloat() {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const modelos = document.querySelector("#modelos");

    if (!modelos) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setMostrarBotao(
          entry.isIntersecting || entry.boundingClientRect.top < 0
        );
      },
      {
        threshold: 0,
      }
    );

    observer.observe(modelos);

    return () => observer.disconnect();
  }, []);
  const mensagem =
    "Olá, gostaria de fazer um orçamento para um box no meu banheiro";

  const whatsappUrl = `https://wa.me/5531984362710?text=${encodeURIComponent(
    mensagem
  )}`;

  if (!mostrarBotao) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00c77b] text-white shadow-lg shadow-[#003c2d]/30 transition duration-300 hover:scale-110 hover:bg-[#00b86f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c77b] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <BsWhatsapp size={30} />
    </a>
  );
}
