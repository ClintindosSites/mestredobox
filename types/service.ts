export interface Service {
  slug: string;

  seo: SEO;

  hero: HeroSection;
  form: FormSection;
  pains?: PainSection;
  benefits?: BenefitSection;
  technologies?: TechnologySection;
  portfolio?: PortfolioSection;
  pricing?: PricingSection;
  payment?: PaymentSection;
  faq?: FAQSection;
  clients?: ClientsSection;
  results?: ResultsSection;
  process?: ProcessSection;
  cta?: CTASection;
  finalCTA?: FinalCTA;
}
export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
  ctaBtn: string;
}
export interface TrackingParams {
  url?: string;
  service?: string;
  origin?: string;
  plan?: string;
  value?: number;
}

export interface FormSection {
  title: string;

  subtitle: string;

  button: string;

  whatsappMessage: string;

  servicos: string[];

  orcamentos: string[];
}
export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}
export interface PainSection {
  title: string;
  subtitle: string;
  items: PainItem[];
}

export interface PainItem {
  titulo: string;
  descricao: string;
}
export interface BenefitSection {
  title: string;
  subtitle: string;
  items: BenefitItem[];
  ctaButton: string;
}

export interface BenefitItem {
  titulo: string;
  descricao: string;
}
export interface TechnologySection {
  title: string;
  subtitle: string;
  items: TechnologyItem[];
  ctaButton: string;
}

export interface TechnologyItem {
  nome: string;
  descricao: string;
  image: string;
}
export interface PortfolioSection {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}
export interface PortfolioItem {
  titulo: string;

  img: string;

  link?: string;

  segmento?: string;

  tecnologias?: string[];

  descricao?: string;

  cliente?: string;
}
export interface PricingSection {
  title: string;
  subtitle: string;

  cards: PricingCard[];
}
export interface PricingCard {
  titulo: string;

  condicaoPagamento: string;

  preco: string;

  parcela?: string;

  descricao: string;

  destaque?: boolean;

  promocao?: boolean;

  itens: string[];

  ctaBtn: string;

  href?: string;
}
export interface PaymentSection {
  title: string;

  subtitle: string;

  methods: PaymentMethod[];

  trust: TrustItem[];
}
export interface PaymentMethod {
  titulo: string;
  descricao: string;
  icon: string;
}

export interface TrustItem {
  titulo: string;
  descricao: string;
  icon: string;
}
export interface FAQSection {
  title: string;
  subtitle: string;

  items: FAQItem[];
}

export interface FAQItem {
  pergunta: string;

  resposta: string;
}
export interface ClientsSection {
  title: string;

  subtitle: string;

  items: Client[];
}

export interface Client {
  nome: string;

  segmento: string;

  descricao: string;

  logo: string;

  link: string;
}
export interface ResultsSection {
  title: string;

  subtitle: string;

  items: ResultItem[];
}

export interface ResultItem {
  number: string;

  title: string;

  description: string;
}
export interface ProcessSection {
  title: string;

  subtitle: string;

  items: ProcessItem[];
}

export interface ProcessItem {
  titulo: string;

  descricao: string;

  icon: string;
}
export interface CTASection {
  title: string;

  subtitle: string;

  button: string;

  whatsappMessage: string;
}
export interface FinalCTA {
  badge: string;

  title: string;

  subtitle: string;

  plan: string;

  oldPrice?: string;

  price: string;

  installment: string;

  cta: string;

  whatsapp: string;

  guarantee: string;

  urgency: string;

  benefits: string[];
}
