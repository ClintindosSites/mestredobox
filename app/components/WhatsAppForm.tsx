"use client";

import { useState } from "react";
import styles from "./LeadForm.module.css";
import { reportGoogleAdsConversion } from "@/app/lib/google-ads";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [box, setBox] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = [
      "Olá, Mestre do Box! Gostaria de solicitar um orçamento.",
      "",
      `*Nome:* ${nome}`,
      `*Endereço da obra:* ${endereco}`,
      `*Box desejado:* ${box}`,
      `*Mensagem:* ${mensagem.trim() || "Não informado"}`,
    ].join("\n");

    const url = `https://wa.me/5531984362710?text=${encodeURIComponent(texto)}`;

    // Abre o WhatsApp imediatamente para evitar bloqueio do navegador.
    window.open(url, "_blank", "noopener,noreferrer");

    // Registra a conversão de contato no Google Ads.
    reportGoogleAdsConversion();
  }

  return (
    <section className={styles.section} id="solicitar-orcamento">
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.dot} />
            ORÇAMENTO PERSONALIZADO
          </span>

          <h2>Vamos transformar seu banheiro?</h2>

          <p>
            Conte um pouco sobre seu projeto. Nossa equipe receberá sua
            solicitação pelo WhatsApp para dar continuidade ao atendimento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="nome">Seu nome *</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Como podemos te chamar?"
              autoComplete="name"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="endereco">Endereço da obra *</label>
            <input
              id="endereco"
              name="endereco"
              type="text"
              placeholder="Cidade, bairro e endereço"
              autoComplete="street-address"
              value={endereco}
              onChange={e => setEndereco(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="box">Qual modelo de box você deseja? *</label>
            <select
              id="box"
              name="box"
              value={box}
              onChange={e => setBox(e.target.value)}
              required
            >
              <option value="" disabled>
                Selecione o modelo
              </option>
              <option value="Box convencional / frontal">
                Box convencional / frontal
              </option>
              <option value="Box de canto">Box de canto</option>
              <option value="Box até o teto">Box até o teto</option>
              <option value="Box de correr">Box de correr</option>
              <option value="Box em L">Box em L</option>

              <option value="Outro modelo">Outro modelo</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="mensagem">Conte mais sobre seu projeto</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Medidas aproximadas, tipo de vidro, dúvidas ou outros detalhes..."
              rows={4}
              value={mensagem}
              onChange={e => setMensagem(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4Z" />
            </svg>
            Solicitar orçamento pelo WhatsApp
          </button>

          <p className={styles.privacy}>
            Ao continuar, você abrirá o WhatsApp para enviar sua solicitação ao
            Mestre do Box.
          </p>
        </form>
      </div>
    </section>
  );
}
