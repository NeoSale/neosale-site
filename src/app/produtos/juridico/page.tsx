import React from 'react';
import Section from '@/components/ui/Section';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function JuridicoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Agente de IA para Jurídico</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solução especializada para escritórios de advocacia e departamentos jurídicos
          </p>
        </div>
      </Section>

      {/* Main Product Section */}
      <Section background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#403CCF]/10 text-[#403CCF] font-medium px-4 py-2 rounded-full mb-4">
              Agente de IA para Nicho Jurídico
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Automatize processos jurídicos com IA</h2>
            <p className="text-gray-700 mb-6 text-lg">
              O Agente Jurídico da NeoSale é uma solução completa para escritórios de advocacia 
              que desejam automatizar processos, monitorar movimentações processuais e melhorar 
              o atendimento aos clientes.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Principais funcionalidades:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integração com Escavador para monitoramento de processos</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integração com CRM ClickUp para gestão de clientes e processos</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Monitoramento automático de movimentações processuais</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Atendimento automatizado a clientes via WhatsApp</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Notificações automáticas sobre atualizações de processos</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p>Demonstração do Agente Jurídico</p>
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
            Nosso agente jurídico automatiza tarefas repetitivas e mantém seus clientes informados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Integração</h3>
            <p className="text-gray-600">
              Conectamos o agente com o Escavador e seu CRM ClickUp para monitorar processos e gerenciar clientes automaticamente.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Monitoramento</h3>
            <p className="text-gray-600">
              O agente monitora continuamente as movimentações processuais e atualiza o status no CRM automaticamente.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Comunicação</h3>
            <p className="text-gray-600">
              Quando há atualizações, o agente notifica automaticamente os advogados e clientes via WhatsApp com informações relevantes.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefícios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Por que escolher o Agente Jurídico da NeoSale
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Economia de tempo</h3>
                <p className="text-gray-600">
                  Reduza em até 70% o tempo gasto com monitoramento manual de processos e comunicação com clientes.
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Redução de custos</h3>
                <p className="text-gray-600">
                  Diminua a necessidade de pessoal administrativo para tarefas repetitivas de monitoramento e comunicação.
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Experiência do cliente</h3>
                <p className="text-gray-600">
                  Melhore a satisfação dos clientes com comunicação proativa e respostas rápidas sobre seus processos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Segurança e conformidade</h3>
                <p className="text-gray-600">
                  Todas as comunicações são seguras e em conformidade com a LGPD e regulamentações do setor jurídico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Transforme seu escritório com IA</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            Agende uma demonstração e veja como o Agente Jurídico pode otimizar seus processos
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
