"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    id: "1",
    title: "Como funciona a integração com WhatsApp?",
    content:
      "A integração é feita através da Evolution API, uma solução robusta e segura. Você escaneia um QR Code com seu WhatsApp e em poucos minutos está conectado. Não precisa de aprovação do Meta ou WhatsApp Business API oficial.",
  },
  {
    id: "2",
    title: "Preciso de um número novo de WhatsApp?",
    content:
      "Não necessariamente. Você pode usar seu número atual, mas recomendamos um número dedicado para a operação comercial. Isso garante melhor organização e evita misturar conversas pessoais com comerciais.",
  },
  {
    id: "3",
    title: "A IA responde igual a um humano?",
    content:
      "Sim! Nossos agentes de IA são treinados para ter conversas naturais e humanizadas. Eles entendem contexto, respondem perguntas complexas e sabem quando escalar para um humano. A maioria dos leads não percebe que está falando com IA.",
  },
  {
    id: "4",
    title: "Quanto tempo leva para implementar?",
    content:
      "A implementação básica leva de 1 a 3 dias. Isso inclui conexão do WhatsApp, configuração dos agentes e treinamento inicial. Personalizações mais avançadas podem levar até 1 semana.",
  },
  {
    id: "5",
    title: "Tem contrato de fidelidade?",
    content:
      "Sim! Trabalhamos com contrato de 6 meses. Esse período é essencial para que a IA aprenda com seu negócio, otimize as conversas e entregue resultados consistentes. A maioria dos nossos clientes renova automaticamente porque vê o retorno do investimento.",
  },
  {
    id: "6",
    title: "É seguro? Está adequado à LGPD?",
    content:
      "Sim, totalmente! Seguimos todas as diretrizes da LGPD. Seus dados são criptografados, temos controle de acesso rigoroso, logs de auditoria e oferecemos opt-out para os leads. Também temos políticas claras de privacidade e termos de uso.",
  },
  {
    id: "7",
    title: "Posso personalizar as respostas da IA?",
    content:
      "Absolutamente! Você pode configurar o tom de voz, scripts de venda, informações sobre produtos, objeções comuns e muito mais. A IA aprende com o contexto do seu negócio para dar respostas precisas.",
  },
  {
    id: "8",
    title: "E se a IA não souber responder algo?",
    content:
      "A IA é treinada para reconhecer seus limites. Quando não sabe responder ou identifica uma situação complexa, ela automaticamente escala para um atendente humano, garantindo que o lead nunca fique sem resposta adequada.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-bg-card-dark/30">
      <Container size="md">
        <SectionTitle
          title="Perguntas frequentes"
          subtitle="Tire suas dúvidas sobre a NeoSale AI"
        />

        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}
