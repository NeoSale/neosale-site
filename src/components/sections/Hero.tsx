"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Clock, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const badges = [
  { icon: TrendingUp, text: "+40% agendamentos" },
  { icon: Clock, text: "24/7 disponível" },
  { icon: Zap, text: "30s resposta" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default" className="mb-6 text-white">
              🚀 Automação de Vendas com IA
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light leading-tight mb-6">
              Transforme seu WhatsApp em uma{" "}
              <span className="gradient-text">máquina de vendas 24/7</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-muted-dark mb-8 max-w-xl">
              Agentes de IA que respondem em 30 segundos, qualificam leads com
              SPIN Selling e agendam reuniões automaticamente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="https://lp.neosaleai.com.br" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Agendar Demo Gratuita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#como-funciona">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Ver como funciona
                </Button>
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card-dark border border-border-dark"
                >
                  <badge.icon className="w-4 h-4 text-primary-light" />
                  <span className="text-sm font-medium text-text-light">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-bg-card-dark rounded-[3rem] p-3 shadow-2xl shadow-primary/20 border border-border-dark">
                {/* Screen */}
                <div className="bg-[#0b141a] rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                    <Image
                      src="/maya.jpeg"
                      alt="Maya - NeoSale AI"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium text-sm">Maya - NeoSale AI</p>
                      <p className="text-[#8696a0] text-xs">online</p>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="p-4 space-y-3 min-h-[400px]">
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#005c4b] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                        <p className="text-white text-sm">
                          Olá, gostaria de saber mais sobre o produto
                        </p>
                        <p className="text-[#8696a0] text-xs text-right mt-1">10:30</p>
                      </div>
                    </motion.div>

                    {/* AI Response */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                        <p className="text-white text-sm">
                          Olá! 👋 Que bom ter você aqui! Sou a Maya, assistente da NeoSale AI.
                        </p>
                        <p className="text-white text-sm mt-2">
                          Para te ajudar melhor, qual é o principal desafio que você enfrenta hoje nas vendas pelo WhatsApp?
                        </p>
                        <p className="text-[#8696a0] text-xs text-right mt-1">10:30</p>
                      </div>
                    </motion.div>

                    {/* Typing indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#1f2c34] rounded-lg px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-4 top-20 bg-accent-green text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                ⚡ Resposta em 30s
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
