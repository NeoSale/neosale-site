"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+55 11 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contato@neosaleai.com.br",
    href: "mailto:contato@neosaleai.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP - Brasil",
    href: null,
  },
];

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">
            Entre em contato
          </h1>
          <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre a NeoSale AI? Preencha o
            formulário ou entre em contato diretamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="bordered" className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-light mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-text-muted-dark">
                    Entraremos em contato em até 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-dark border border-border-dark text-text-light placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-dark border border-border-dark text-text-light placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-dark border border-border-dark text-text-light placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-bg-dark border border-border-dark text-text-light placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-bg-dark border border-border-dark text-text-light placeholder-text-muted-dark focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-text-light mb-4">
                Outras formas de contato
              </h2>
              <p className="text-text-muted-dark mb-8">
                Prefere falar diretamente? Entre em contato pelo WhatsApp ou
                email. Respondemos em até 24 horas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} variant="bordered" className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted-dark">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-light font-medium hover:text-primary-light transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-light font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="p-6 gradient-bg mt-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Quer ver a NeoSale em ação?
              </h3>
              <p className="text-white/80 mb-4">
                Agende uma demo gratuita e descubra como automatizar suas vendas.
              </p>
              <a
                href="https://lp.neosaleai.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-primary hover:bg-white/90">
                  Agendar Demo Gratuita
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
