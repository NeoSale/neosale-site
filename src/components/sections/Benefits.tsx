"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TrendingUp, Zap, Shield, Clock, Users, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Taxa de agendamento",
    description: "Aumento médio na conversão de leads em reuniões",
  },
  {
    icon: Zap,
    value: "30s",
    label: "Tempo de resposta",
    description: "Resposta instantânea para cada lead que chega",
  },
  {
    icon: Shield,
    value: "0",
    label: "Leads perdidos",
    description: "Nenhum lead fica sem resposta ou acompanhamento",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilidade",
    description: "Atendimento contínuo, inclusive feriados e madrugadas",
  },
  {
    icon: Users,
    value: "-60%",
    label: "Tempo do vendedor",
    description: "Redução no tempo gasto com tarefas repetitivas",
  },
  {
    icon: BarChart3,
    value: "100%",
    label: "Métricas em tempo real",
    description: "Visibilidade completa do funil de vendas",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-bg-card-dark/30">
      <Container>
        <SectionTitle
          title="Resultados reais em 30 dias"
          subtitle="Números que nossos clientes alcançam após implementar a NeoSale AI"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-bg-card-dark border border-border-dark rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-light mb-1">
                      {benefit.value}
                    </p>
                    <p className="text-text-light font-medium mb-2">
                      {benefit.label}
                    </p>
                    <p className="text-text-muted-dark text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
