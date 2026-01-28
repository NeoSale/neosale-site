"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Bot, Target, Headphones, CheckCircle } from "lucide-react";

const agents = [
  {
    icon: Bot,
    title: "SDR IA",
    subtitle: "Qualificação Inteligente",
    description:
      "Prospecta e qualifica leads automaticamente usando metodologia SPIN Selling. Identifica oportunidades reais e descarta curiosos.",
    features: [
      "SPIN Selling automatizado",
      "Qualificação em tempo real",
      "Identificação de dor e necessidade",
      "Transferência inteligente para Closer",
    ],
  },
  {
    icon: Target,
    title: "Closer IA",
    subtitle: "Fechamento com Contexto",
    description:
      "Assume leads qualificados com todo o contexto da conversa. Foca em fechar a venda com informações completas do cliente.",
    features: [
      "Recebe contexto completo",
      "Foco em conversão",
      "Agendamento automático",
      "Integração com calendário",
    ],
  },
  {
    icon: Headphones,
    title: "Atendimento IA",
    subtitle: "Suporte 24/7",
    description:
      "Suporte pós-venda, relacionamento e abertura de tickets. Mantém o cliente satisfeito e resolve problemas rapidamente.",
    features: [
      "Suporte 24 horas",
      "Abertura de tickets",
      "Relacionamento contínuo",
      "Escalação inteligente",
    ],
  },
];

export function Solution() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-bg-card-dark/30">
      <Container>
        <SectionTitle
          title="A NeoSale AI resolve isso com 3 agentes especializados"
          subtitle="Cada agente é treinado para uma etapa específica do funil de vendas"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card variant="bordered" hover className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary-light flex items-center justify-center mb-5">
                  <agent.icon className="w-7 h-7" />
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-text-light">
                    {agent.title}
                  </h3>
                  <p className="text-primary-light font-medium">
                    {agent.subtitle}
                  </p>
                </div>

                <p className="text-text-muted-dark mb-6">{agent.description}</p>

                <ul className="space-y-3">
                  {agent.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
