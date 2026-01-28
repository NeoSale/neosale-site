"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Stethoscope,
  Sun,
  Building,
  GraduationCap,
  Sparkles,
  Car,
  Shield,
  MoreHorizontal,
} from "lucide-react";

const segments = [
  {
    icon: Stethoscope,
    title: "Clínicas e Saúde",
    description: "Consultórios, clínicas médicas e profissionais de saúde",
  },
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Empresas de energia solar e sustentabilidade",
  },
  {
    icon: Building,
    title: "Imobiliárias",
    description: "Corretores e imobiliárias de todos os portes",
  },
  {
    icon: GraduationCap,
    title: "Educação e Cursos",
    description: "Escolas, cursos online e treinamentos",
  },
  {
    icon: Sparkles,
    title: "Estética",
    description: "Clínicas de estética e salões de beleza",
  },
  {
    icon: Car,
    title: "Concessionárias",
    description: "Venda de veículos novos e seminovos",
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Corretoras e consultores de seguros",
  },
  {
    icon: MoreHorizontal,
    title: "E muito mais...",
    description: "Qualquer empresa que vende pelo WhatsApp",
  },
];

export function Segments() {
  return (
    <section className="py-20 lg:py-28 bg-bg-card-dark/30">
      <Container>
        <SectionTitle
          title="Perfeito para empresas que vendem pelo WhatsApp"
          subtitle="A NeoSale AI se adapta a diferentes segmentos e modelos de negócio"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-bg-card-dark border border-border-dark rounded-2xl p-5 h-full text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <segment.icon className="w-6 h-6" />
                </div>
                <h3 className="text-text-light font-semibold mb-2">
                  {segment.title}
                </h3>
                <p className="text-text-muted-dark text-sm">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
