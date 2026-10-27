export type ServicePageData = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: {
    title: string;
    description: string;
  }[];
  steps: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePages: Record<string, ServicePageData> = {
  "box-frontal": {
    slug: "box-frontal",
    name: "Box Frontal",
    seoTitle: "Box Frontal para Banheiro em Belo Horizonte",
    seoDescription:
      "Solicite um orçamento de box frontal para banheiro em Belo Horizonte e região. Consulte opções sob medida com a Mestre do Box.",
    eyebrow: "Box de banheiro em Belo Horizonte",
    headline: "Mais praticidade e elegância para seu banheiro",
    highlight: "Box Frontal",
    description:
      "Encontre uma solução para o seu banheiro com um box frontal que combine com o espaço e o estilo do ambiente. Solicite seu orçamento.",
    image: "/box-hero.webp",
    imageAlt: "Box frontal de vidro para banheiro",
    ctaLabel: "Solicitar orçamento de box frontal",
    benefitsTitle: "Vantagens do box frontal",
    benefitsDescription:
      "Uma solução funcional para aproveitar o espaço do banheiro com praticidade e um visual moderno.",
    benefits: [
      {
        title: "Visual moderno",
        description:
          "Um acabamento que valoriza o ambiente e combina com diferentes estilos de banheiro.",
      },
      {
        title: "Aproveitamento do espaço",
        description: "Uma opção funcional para delimitar a área do banho.",
      },
      {
        title: "Projeto adequado ao ambiente",
        description:
          "Consulte as opções disponíveis para as medidas e características do seu banheiro.",
      },
    ],
    steps: [
      {
        title: "Conte o que você precisa",
        description:
          "Informe as características do banheiro e o modelo desejado.",
      },
      {
        title: "Solicite seu orçamento",
        description:
          "Converse pelo WhatsApp para verificar as opções para seu projeto.",
      },
      {
        title: "Combine os detalhes",
        description:
          "Confirme as medidas, o acabamento, os valores e as condições do serviço.",
      },
    ],
    faqs: [
      {
        question: "O box frontal pode ser feito sob medida?",
        answer:
          "As opções dependem das características do banheiro. Entre em contato para consultar as possibilidades para seu espaço.",
      },
      {
        question: "Como solicitar um orçamento?",
        answer:
          "Clique no botão de WhatsApp desta página e informe que deseja um orçamento de box frontal.",
      },
      {
        question: "A Mestre do Box atende Belo Horizonte?",
        answer:
          "O atendimento é voltado para Belo Horizonte e região. Consulte a disponibilidade para seu endereço.",
      },
    ],
  },

  "box-de-canto": {
    slug: "box-de-canto",
    name: "Box de Canto",
    seoTitle: "Box de Canto para Banheiro em Belo Horizonte",
    seoDescription:
      "Conheça as opções de box de canto para banheiro em Belo Horizonte e região. Solicite um orçamento para seu ambiente.",
    eyebrow: "Soluções para seu banheiro",
    headline: "Aproveite melhor cada espaço do banheiro",
    highlight: "Box de Canto",
    description:
      "Uma opção para banheiros com área de banho posicionada no canto. Consulte modelos, medidas e acabamentos para seu projeto.",
    image: "/box-hero.webp",
    imageAlt: "Box de canto de vidro para banheiro",
    ctaLabel: "Solicitar orçamento de box de canto",
    benefitsTitle: "Por que escolher um box de canto?",
    benefitsDescription:
      "Planeje a área do banho considerando o espaço disponível e a disposição dos elementos do banheiro.",
    benefits: [
      {
        title: "Uso inteligente do espaço",
        description:
          "Uma configuração pensada para a área de banho localizada no canto.",
      },
      {
        title: "Estilo para o ambiente",
        description:
          "O vidro ajuda a manter uma aparência leve e contemporânea.",
      },
      {
        title: "Opções para seu projeto",
        description:
          "Consulte medidas e configurações compatíveis com seu banheiro.",
      },
    ],
    steps: [
      {
        title: "Apresente seu banheiro",
        description:
          "Informe as dimensões aproximadas e a disposição da área de banho.",
      },
      {
        title: "Converse com a equipe",
        description:
          "Consulte os modelos e as opções disponíveis para seu espaço.",
      },
      {
        title: "Defina o projeto",
        description:
          "Alinhe medidas, acabamento, preço e condições antes de confirmar.",
      },
    ],
    faqs: [
      {
        question: "O box de canto serve para banheiro pequeno?",
        answer:
          "Pode ser uma alternativa dependendo da disposição e das medidas do banheiro. Consulte a equipe para avaliar seu espaço.",
      },
      {
        question: "Posso solicitar um modelo personalizado?",
        answer:
          "Entre em contato para verificar as opções de medidas e configurações disponíveis.",
      },
      {
        question: "Como recebo meu orçamento?",
        answer:
          "Solicite o atendimento pelo WhatsApp e informe as características do seu banheiro.",
      },
    ],
  },

  "box-ate-o-teto": {
    slug: "box-ate-o-teto",
    name: "Box Até o Teto",
    seoTitle: "Box Até o Teto em Belo Horizonte",
    seoDescription:
      "Solicite um orçamento de box até o teto para banheiro em Belo Horizonte e região. Consulte as opções para seu ambiente.",
    eyebrow: "Design para seu banheiro",
    headline: "Um visual marcante para sua área de banho",
    highlight: "Box Até o Teto",
    description:
      "Conheça a proposta de box até o teto para seu banheiro. Avalie as características do ambiente e consulte as opções de instalação.",
    image: "/box-hero.webp",
    imageAlt: "Box de banheiro instalado até o teto",
    ctaLabel: "Solicitar orçamento de box até o teto",
    benefitsTitle: "Conheça essa opção para seu banheiro",
    benefitsDescription:
      "Uma configuração que pode transformar a aparência da área de banho, conforme as condições do ambiente.",
    benefits: [
      {
        title: "Estética diferenciada",
        description:
          "Uma solução visualmente marcante para projetos contemporâneos.",
      },
      {
        title: "Projeto planejado",
        description:
          "A instalação deve considerar ventilação, dimensões e condições do banheiro.",
      },
      {
        title: "Avaliação do ambiente",
        description:
          "Consulte a equipe para verificar a viabilidade da solução para seu espaço.",
      },
    ],
    steps: [
      {
        title: "Explique seu projeto",
        description:
          "Informe as dimensões e as características da área de banho.",
      },
      {
        title: "Consulte as possibilidades",
        description:
          "Verifique os detalhes técnicos e as opções disponíveis para o ambiente.",
      },
      {
        title: "Solicite o orçamento",
        description:
          "Confirme os valores, os materiais e as condições de instalação.",
      },
    ],
    faqs: [
      {
        question: "É possível instalar box até o teto em qualquer banheiro?",
        answer:
          "A viabilidade depende das características do ambiente, especialmente da ventilação e das condições de instalação.",
      },
      {
        question: "Esse modelo precisa de avaliação prévia?",
        answer:
          "Sim. É importante avaliar o espaço e as condições técnicas antes de definir o projeto.",
      },
      {
        question: "Como consultar valores?",
        answer:
          "Entre em contato pelo WhatsApp para apresentar seu projeto e solicitar um orçamento.",
      },
    ],
  },

  "box-sob-medida": {
    slug: "box-sob-medida",
    name: "Box Sob Medida",
    seoTitle: "Box de Banheiro Sob Medida em Belo Horizonte",
    seoDescription:
      "Encontre opções de box de banheiro sob medida em Belo Horizonte e região. Solicite um orçamento para seu projeto.",
    eyebrow: "Projeto personalizado",
    headline: "Uma solução pensada para o seu banheiro",
    highlight: "Sob Medida",
    description:
      "Consulte opções de box de banheiro de acordo com as dimensões, a configuração e as necessidades do seu ambiente.",
    image: "/box-hero.webp",
    imageAlt: "Box de vidro sob medida para banheiro",
    ctaLabel: "Solicitar orçamento sob medida",
    benefitsTitle: "Um projeto adequado ao seu espaço",
    benefitsDescription:
      "Cada banheiro tem suas particularidades. O projeto deve considerar as medidas e as condições reais do ambiente.",
    benefits: [
      {
        title: "Adequação às medidas",
        description:
          "Considere as dimensões disponíveis para definir a solução mais adequada.",
      },
      {
        title: "Escolha de acabamento",
        description:
          "Consulte as opções de acabamento e configuração disponíveis.",
      },
      {
        title: "Atendimento personalizado",
        description:
          "Converse com a equipe para apresentar suas necessidades e dúvidas.",
      },
    ],
    steps: [
      {
        title: "Apresente suas necessidades",
        description:
          "Informe como é o banheiro e qual resultado deseja alcançar.",
      },
      {
        title: "Verifique as medidas",
        description:
          "Confirme as dimensões necessárias e as possibilidades para o projeto.",
      },
      {
        title: "Receba as condições",
        description:
          "Consulte o orçamento e alinhe os detalhes antes de contratar.",
      },
    ],
    faqs: [
      {
        question: "Posso solicitar um box para medidas específicas?",
        answer:
          "Entre em contato para verificar as possibilidades de fabricação ou instalação para as medidas do seu banheiro.",
      },
      {
        question: "Preciso saber as medidas antes de pedir orçamento?",
        answer:
          "Ter medidas aproximadas pode ajudar na conversa inicial. Confirme com a equipe quais informações serão necessárias.",
      },
      {
        question: "Como começo meu projeto?",
        answer:
          "Clique no botão de WhatsApp e explique como é seu banheiro e o que você procura.",
      },
    ],
  },

  "manutencao-box-de-banheiro": {
    slug: "manutencao-box-de-banheiro",
    name: "Manutenção em Box",
    seoTitle: "Manutenção de Box de Banheiro em Belo Horizonte",
    seoDescription:
      "Consulte serviços de manutenção de box de banheiro em Belo Horizonte e região. Entre em contato para avaliar seu problema.",
    eyebrow: "Manutenção de box de banheiro",
    headline: "Seu box precisa de reparo?",
    highlight: "Conte com ajuda especializada",
    description:
      "Se o box apresenta dificuldades para abrir ou fechar, ruídos ou desgaste nas peças, entre em contato para consultar as opções de manutenção.",
    image: "/box-hero.webp",
    imageAlt: "Box de banheiro de vidro",
    ctaLabel: "Solicitar manutenção pelo WhatsApp",
    benefitsTitle: "Cuide do funcionamento do seu box",
    benefitsDescription:
      "Identificar o problema ajuda a entender quais reparos podem ser necessários.",
    benefits: [
      {
        title: "Avaliação do problema",
        description:
          "Descreva os sintomas para que a equipe entenda sua necessidade.",
      },
      {
        title: "Atenção aos componentes",
        description:
          "Consulte a possibilidade de verificar roldanas, puxadores e outros componentes.",
      },
      {
        title: "Orientação para o reparo",
        description:
          "Receba informações sobre as opções de atendimento para seu caso.",
      },
    ],
    steps: [
      {
        title: "Descreva o defeito",
        description:
          "Informe o que está acontecendo e, se possível, envie fotos ou um vídeo pelo WhatsApp.",
      },
      {
        title: "Consulte o atendimento",
        description:
          "Verifique a disponibilidade de avaliação e o tipo de reparo necessário.",
      },
      {
        title: "Combine o serviço",
        description:
          "Confirme o orçamento e as condições antes de autorizar o reparo.",
      },
    ],
    faqs: [
      {
        question: "Vocês fazem manutenção em box já instalado?",
        answer:
          "Entre em contato para informar o problema e verificar se o serviço pode ser realizado no seu caso.",
      },
      {
        question: "É possível avaliar o problema por fotos?",
        answer:
          "Fotos e vídeos enviados pelo WhatsApp podem ajudar na avaliação inicial, mas pode ser necessária uma verificação presencial.",
      },
      {
        question: "Como solicito um orçamento de manutenção?",
        answer:
          "Clique no botão de WhatsApp e descreva o defeito apresentado pelo seu box.",
      },
    ],
  },
};
