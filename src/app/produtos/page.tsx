import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function ProdutosPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Produtos</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Conheça nossas soluções de automação com IA para clínicas de estética
          </p>
        </div>
      </Section>

      {/* NeoCalendar Section */}
      <Section id="neocalendar" background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
              Agendamento Inteligente
            </div>
            <h2 className="text-3xl font-bold mb-6">NeoCalendar</h2>
            <p className="text-gray-700 mb-6">
              O NeoCalendar é um sistema inteligente de agendamento projetado especificamente para clínicas de estética. 
              Utilizando IA, ele otimiza sua agenda, reduz faltas e maximiza o aproveitamento do tempo dos profissionais.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Principais funcionalidades:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Agendamento online 24/7 para seus clientes</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lembretes automáticos por WhatsApp e e-mail</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Otimização inteligente de agenda com base em histórico</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integração com sistemas de pagamento</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar demonstração" />
              <Button href="/planos" variant="primary">Ver planos</Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Imagem do NeoCalendar
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* NeoFollow Section */}
      <Section id="neofollow" background="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-[#FBFAFF] p-6 rounded-xl shadow-lg">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Imagem do NeoFollow
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
              Acompanhamento de Clientes
            </div>
            <h2 className="text-3xl font-bold mb-6">NeoFollow</h2>
            <p className="text-gray-700 mb-6">
              O NeoFollow é um sistema de acompanhamento personalizado que mantém o contato com seus clientes 
              de forma automatizada, mas com um toque humano. Aumente a fidelização e os resultados dos tratamentos.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Principais funcionalidades:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comunicação personalizada e automatizada</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acompanhamento de progresso dos tratamentos</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Alertas para recontato em momentos estratégicos</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pesquisas de satisfação e feedback automatizados</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar demonstração" />
              <Button href="/planos" variant="primary">Ver planos</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* NeoAI Section */}
      <Section id="neoai" background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
              Inteligência Artificial
            </div>
            <h2 className="text-3xl font-bold mb-6">NeoAI</h2>
            <p className="text-gray-700 mb-6">
              O NeoAI é nossa solução de inteligência artificial que analisa dados de sua clínica e clientes 
              para gerar insights valiosos, otimizar protocolos de tratamento e melhorar resultados.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Principais funcionalidades:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Análise preditiva de resultados de tratamentos</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Recomendações personalizadas para cada cliente</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Otimização de protocolos com base em dados reais</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dashboards e relatórios inteligentes</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar demonstração" />
              <Button href="/planos" variant="primary">Ver planos</Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Imagem do NeoAI
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua clínica com a NeoSale</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Nossas soluções trabalham em conjunto para otimizar sua operação, melhorar a experiência dos clientes e aumentar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Falar com um consultor" large className="sm:px-8" />
            <Button href="/planos" variant="primary" size="lg">
              Conhecer planos
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
