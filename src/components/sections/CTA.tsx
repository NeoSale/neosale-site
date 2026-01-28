"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para parar de perder vendas?
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Agende uma demo gratuita e veja a NeoSale AI em ação. Sem
            compromisso, sem cartão de crédito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://lp.neosaleai.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                Agendar Demo Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/70">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Resposta em até 24 horas</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
