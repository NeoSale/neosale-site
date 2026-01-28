"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Smartphone, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Conecte seu WhatsApp",
    description:
      "Integração simples e rápida. Escaneie o QR Code e conecte seu número em minutos.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure seus agentes",
    description:
      "Personalize os agentes de IA com as informações do seu negócio, produtos e scripts de venda.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Comece a vender 24/7",
    description:
      "Seus agentes começam a atender, qualificar e agendar automaticamente. Você só fecha.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          title="Comece em 3 passos simples"
          subtitle="Implementação rápida e sem complicação. Em poucos dias você já está vendendo mais."
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary-light" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-light mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted-dark max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
