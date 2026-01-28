"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  MessageSquare,
  RefreshCw,
  Calendar,
  LayoutDashboard,
  Send,
  BarChart3,
  Building2,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    id: "spin",
    icon: MessageSquare,
    title: "Qualificação SPIN Selling",
    description:
      "Metodologia de vendas consultivas automatizada. A IA faz as perguntas certas para identificar Situação, Problema, Implicação e Necessidade do lead.",
    benefits: [
      "Perguntas estratégicas automáticas",
      "Identificação de dor real",
      "Qualificação consistente",
      "Aumento na taxa de conversão",
    ],
  },
  {
    id: "followup",
    icon: RefreshCw,
    title: "Follow-up Automático",
    description:
      "Nunca mais perca um lead por falta de acompanhamento. O sistema reativa automaticamente leads que pararam de responder.",
    benefits: [
      "Sequências programadas",
      "Reativação por inatividade",
      "Mensagens personalizadas",
      "Timing inteligente",
    ],
  },
  {
    id: "calendar",
    icon: Calendar,
    title: "Agendamento Google Calendar",
    description:
      "Integração nativa com Google Calendar. A IA verifica disponibilidade, agenda reuniões e envia lembretes automaticamente.",
    benefits: [
      "Verificação de disponibilidade",
      "Agendamento automático",
      "Lembretes por WhatsApp",
      "Reagendamento fácil",
    ],
  },
  {
    id: "crm",
    icon: LayoutDashboard,
    title: "CRM Integrado",
    description:
      "Pipeline de vendas completo com histórico de todas as conversas. Visualize o status de cada lead em tempo real.",
    benefits: [
      "Pipeline visual",
      "Histórico completo",
      "Status em tempo real",
      "Filtros avançados",
    ],
  },
  {
    id: "metrics",
    icon: BarChart3,
    title: "Métricas e Relatórios",
    description:
      "Dashboards com KPIs de vendas, conversão, ciclo de venda e performance por agente. Relatórios automáticos.",
    benefits: [
      "Dashboard em tempo real",
      "Taxa de conversão",
      "Ciclo de venda",
      "Relatórios por email",
    ],
  },
  {
    id: "multitenant",
    icon: Building2,
    title: "Multi-tenant (Agências)",
    description:
      "Ideal para agências e revendedores. Gerencie múltiplos clientes com configurações isoladas e billing separado.",
    benefits: [
      "Múltiplos clientes",
      "Configs isoladas",
      "Billing por cliente",
      "White-label",
    ],
  },
  {
    id: "lgpd",
    icon: Shield,
    title: "Compliance LGPD",
    description:
      "Totalmente adequado à Lei Geral de Proteção de Dados. Criptografia, controle de acesso e direito ao esquecimento.",
    benefits: [
      "Criptografia de dados",
      "Controle de acesso",
      "Logs de auditoria",
      "Opt-out disponível",
    ],
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="Funcionalidades completas para vender mais"
          subtitle="Tudo que você precisa para automatizar suas vendas pelo WhatsApp"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature tabs */}
          <div className="lg:col-span-1 space-y-2">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                  activeFeature.id === feature.id
                    ? "bg-primary/20 border border-primary/30 text-text-light"
                    : "bg-bg-card-dark border border-border-dark text-text-muted-dark hover:bg-bg-card-dark/80 hover:text-text-light"
                }`}
              >
                <feature.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Feature content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card-dark border border-border-dark rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary-light flex items-center justify-center">
                    <activeFeature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-light">
                    {activeFeature.title}
                  </h3>
                </div>

                <p className="text-text-muted-dark text-lg mb-8">
                  {activeFeature.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeFeature.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-3 rounded-lg bg-bg-dark/50"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                      <span className="text-text-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
