import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import type { ServicePageData } from "@/data/service-pages";

const phone = "5531984362710";

function getWhatsAppLink(serviceName: string) {
  const message = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para ${serviceName}.`
  );

  return `https://wa.me/${phone}?text=${message}`;
}

interface ServicePageLayoutProps {
  service: ServicePageData;
}

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const whatsappLink = getWhatsAppLink(service.name);

  return (
    <main>
      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-155 items-center bg-cover bg-center bg-no-repeat py-24 md:min-h-180"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,16,14,0.97) 0%, rgba(7,16,14,0.86) 45%, rgba(7,16,14,0.35) 100%), url("${service.image}")`,
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl text-white">
            <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
              {service.eyebrow}
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              {service.headline}{" "}
              <span className="text-[#00c77b]">{service.highlight}</span>
              <span className="text-[#00c77b]">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#00c77b] px-6 py-4 font-semibold text-[#010101] transition hover:bg-[#00a86b] hover:text-white"
              >
                {service.ctaLabel}
                <BsWhatsapp size={20} />
              </Link>

              <Link
                href="#beneficios"
                className="flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Conheça as vantagens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="bg-[#0d1511] px-6 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
              {service.name}
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              {service.benefitsTitle}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/65">
              {service.benefitsDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-7 transition hover:border-[#00c77b]/50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#00c77b]/10 text-lg font-bold text-[#00c77b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 leading-relaxed text-white/65">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#00c77b] px-7 py-4 font-semibold text-[#010101] transition hover:bg-[#00a86b] hover:text-white"
            >
              Solicitar orçamento
              <BsWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[#111815] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
              Atendimento
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Como solicitar seu orçamento
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {service.steps.map((step, index) => (
              <article
                key={step.title}
                className="border-l-2 border-[#00c77b] py-2 pl-6"
              >
                <span className="text-sm font-bold text-[#00c77b]">
                  ETAPA {index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-relaxed text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="bg-[#0d1511] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00c77b]">
              Tire suas dúvidas
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map(faq => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-white/3 p-5 open:border-[#00c77b]/40"
              >
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}

                    <span className="text-xl text-[#00c77b] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-white/65">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#003c2d] px-6 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Vamos conversar sobre seu projeto?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Entre em contato para consultar opções, condições de atendimento e
            solicitar seu orçamento de {service.name.toLowerCase()}.
          </p>

          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#00c77b] px-7 py-4 font-bold text-[#010101] transition hover:bg-[#00a86b] hover:text-white"
          >
            Falar pelo WhatsApp
            <BsWhatsapp size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
