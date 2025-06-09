import React from 'react';
import Section from '@/components/ui/Section';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Image from 'next/image';

export default function ImobiliariaPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Agente de IA para Imobiliária</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solução especializada para imobiliárias e corretores de imóveis
          </p>
        </div>
      </Section>

      {/* Main Product Section */}
      <Section background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#403CCF]/10 text-[#403CCF] font-medium px-4 py-2 rounded-full mb-4">
              Agente de IA para Nicho Imobiliário
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Automatize o atendimento imobiliário com IA</h2>
            <p className="text-gray-700 mb-6 text-lg">
              O Agente Imobiliário da NeoSale é uma solução completa para imobiliárias 
              que desejam automatizar o atendimento, qualificar leads e agendar visitas 
              sem intervenção humana.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Principais funcionalidades:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integração com portais imobiliários (VivaReal, ZAP, etc.)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Atendimento automatizado via WhatsApp 24/7</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Qualificação de leads com perguntas inteligentes</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Agendamento automático de visitas com corretores</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integração com CRM imobiliário e Google Calendar</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar demonstração" phoneNumber="5511992761075" />
              <PrimaryButton href="/planos">Ver planos</PrimaryButton>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#403CCF]/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p>Demonstração do Agente Imobiliário</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Como funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso agente imobiliário automatiza o atendimento e qualificação de leads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Atendimento</h3>
            <p className="text-gray-600">
              O agente recebe leads dos portais imobiliários e inicia o atendimento via WhatsApp 24 horas por dia, 7 dias por semana.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Qualificação</h3>
            <p className="text-gray-600">
              Através de perguntas inteligentes, o agente qualifica o interesse do cliente e identifica suas necessidades imobiliárias.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Agendamento</h3>
            <p className="text-gray-600">
              Para leads qualificados, o agente agenda visitas automaticamente com o corretor disponível e envia lembretes para ambas as partes.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefícios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Por que escolher o Agente Imobiliário da NeoSale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Atendimento 24/7</h3>
                <p className="text-gray-600">
                  Nunca perca um lead por falta de atendimento. O agente está sempre disponível, mesmo fora do horário comercial.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Aumento de conversão</h3>
                <p className="text-gray-600">
                  Aumente em até 40% a taxa de conversão de leads em visitas com atendimento imediato e qualificação eficiente.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Qualificação inteligente</h3>
                <p className="text-gray-600">
                  Corretores recebem apenas leads qualificados, economizando tempo e aumentando a produtividade da equipe.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Dados organizados</h3>
                <p className="text-gray-600">
                  Todas as interações são registradas no CRM, criando um histórico completo de cada cliente e suas preferências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Transforme sua imobiliária com IA</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            Agende uma demonstração e veja como o Agente Imobiliário pode aumentar suas vendas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Agendar demonstração" phoneNumber="5511992761075" large className="sm:px-8" />
            <PrimaryButton href="/planos" size="lg">
              Conhecer planos
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
