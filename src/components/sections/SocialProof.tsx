"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Users, Calendar, Clock, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: MessageCircle,
    value: "+10.000",
    label: "Leads atendidos",
  },
  {
    icon: Calendar,
    value: "+2.500",
    label: "Reuniões agendadas",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilidade",
  },
  {
    icon: Users,
    value: "+50",
    label: "Empresas ativas",
  },
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-border-dark bg-bg-card-dark/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-text-muted-dark text-lg">
            Empresas que confiam na NeoSale AI
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary-light mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-text-light mb-1">
                {stat.value}
              </p>
              <p className="text-text-muted-dark text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
