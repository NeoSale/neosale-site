"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Clock, UserX, MessageSquareOff, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Demora na resposta",
    description:
      "Lead chega e demora horas para receber resposta. Enquanto isso, ele já fechou com o concorrente.",
  },
  {
    icon: MessageSquareOff,
    title: "Sem follow-up",
    description:
      "Lead demonstra interesse, mas ninguém faz acompanhamento. Ele esfria e some para sempre.",
  },
  {
    icon: UserX,
    title: "Leads ignorados",
    description:
      "Vendedor ocupado não consegue atender todos. Leads ficam sem resposta e você perde vendas.",
  },
  {
    icon: AlertTriangle,
    title: "Atendimento inconsistente",
    description:
      "Cada vendedor responde de um jeito. Experiência ruim e falta de padrão prejudicam as vendas.",
  },
];

export function Problems() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="Você está perdendo vendas agora mesmo"
          subtitle="Esses problemas estão custando dinheiro para sua empresa todos os dias"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-red/20 text-accent-red flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-light mb-2">
                  {problem.title}
                </h3>
                <p className="text-text-muted-dark text-sm">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
