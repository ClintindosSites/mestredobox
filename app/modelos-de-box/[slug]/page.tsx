import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages } from "@/data/service-pages";
import ServicePageLayout from "./components/ServicePageLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(servicePages).map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages[slug];

  if (!service) {
    return {
      title: "Serviço não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `https://www.mestredobox.com.br/modelos-de-box/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: canonical,
      siteName: "Mestre do Box",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function PageService({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePages[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}
