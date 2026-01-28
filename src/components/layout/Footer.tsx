import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Mail, Instagram, Linkedin, Shield } from "lucide-react";

const footerLinks = {
  produto: [
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#precos", label: "Preços" },
    { href: "https://crm.neosaleai.com.br", label: "Acessar NeoCRM", external: true },
  ],
  empresa: [
    { href: "#", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreiras" },
  ],
  legal: [
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
  ],
};

const socialLinks = [
  {
    href: "https://wa.me/5511947224356",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    href: "mailto:neosaleai@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.instagram.com/neosaleai/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/neosaleai",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/icone-azul.png"
                  alt="NeoSale AI"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-text-light tracking-tight">
                  NeoSale <span className="text-primary-light">AI</span>
                </span>
              </Link>
              <p className="text-text-muted-dark mb-6 max-w-sm">
                Transforme seu WhatsApp em uma máquina de vendas 24/7 com
                agentes de IA especializados.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-bg-card-dark hover:bg-primary/20 text-text-muted-dark hover:text-primary-light transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Produto */}
            <div>
              <h4 className="text-text-light font-semibold mb-4">Produto</h4>
              <ul className="space-y-3">
                {footerLinks.produto.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-text-muted-dark hover:text-text-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-text-light font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted-dark hover:text-text-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-text-light font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted-dark hover:text-text-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* LGPD Badge */}
              <div className="mt-6 flex items-center gap-2 text-accent-green">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">LGPD Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-dark">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted-dark text-sm">
              © {new Date().getFullYear()} NeoSale AI. Todos os direitos
              reservados.
            </p>
            <p className="text-text-muted-dark text-sm">
              Feito com 💜 para empresas que vendem pelo WhatsApp
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
