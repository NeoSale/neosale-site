"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Star } from "lucide-react";

const plans = [
  {
    name: "START",
    description: "Ideal: Pequenas empresas",
    price: "R$ 2.000",
    period: "/mês",
    setup: "R$ 3.000",
    features: [
      "Agente IA SDR",
      "NeoCRM básico",
      "Follow-up básico",
      "Relatórios básicos",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    popular: false,
  },
  {
    name: "PRO",
    description: "Ideal: PMEs em crescimento",
    price: "R$ 3.000",
    period: "/mês",
    setup: "R$ 5.000",
    features: [
      "Agente IA SDR",
      "Agente IA Closer",
      "NeoCRM completo",
      "Follow-up avançado",
      "Agendamento Google Calendar",
      "Relatórios avançados por e-mail diariamente",
      "Suporte prioritário WhatsApp",
      "Call mensal",
    ],
    cta: "Escolher Pro",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    description: "Ideal: Empresas escalando",
    price: "R$ 5.000",
    period: "/mês",
    setup: "R$ 10.000",
    features: [
      "Agentes IA ilimitados",
      "NeoCRM Completo + customizações",
      "Follow-up avançado",
      "Multi-calendário",
      "Relatórios avançados por e-mail diariamente",
      "BI dedicado",
      "Suporte prioritário WhatsApp",
      "Call semanal",
    ],
    cta: "Falar com vendas",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="Escolha o plano ideal"
          subtitle="Escolha o plano ideal para o tamanho da sua operação"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Mais popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-6 lg:p-8 ${
                  plan.popular
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-bg-card-dark border border-border-dark"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-text-light mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-text-muted-dark text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-text-light">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-muted-dark">{plan.period}</span>
                  )}
                  {plan.setup && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-accent-yellow/20 text-accent-yellow text-sm font-medium">
                        🔒 Setup: {plan.setup}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://lp.neosaleai.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
