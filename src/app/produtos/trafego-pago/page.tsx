import React from 'react';
import Section from '@/components/ui/Section';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Image from 'next/image';

export default function TrafegoPagoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Agente de IA para Tráfego Pago</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Otimize suas campanhas de marketing digital com inteligência artificial
          </p>
        </div>
      </Section>

      {/* Main Product Section */}
      <Section background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#403CCF]/10 text-[#403CCF] font-medium px-4 py-2 rounded-full mb-4">
              Marketing Digital
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Revolucione suas campanhas de tráfego pago</h2>
            <p className="text-gray-700 mb-6 text-lg">
              O Agente de Tráfego Pago da NeoSale utiliza inteligência artificial para criar, 
              otimizar e gerenciar campanhas em Google Ads, Meta Ads e outras plataformas, 
              maximizando seu ROI e reduzindo custos.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Principais funcionalidades:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Criação automática de anúncios para Google e Meta Ads</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Otimização contínua de campanhas com base em dados</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Geração de imagens e banners personalizados com IA</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Relatórios automáticos via WhatsApp com métricas-chave</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integração com Google Analytics, Meta Business e Google Ads</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <p>Demonstração do Agente de Tráfego Pago</p>
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
            Nosso agente de tráfego pago automatiza a criação e otimização de campanhas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Criação</h3>
            <p className="text-gray-600">
              O agente cria anúncios otimizados para diferentes plataformas, incluindo textos persuasivos e imagens geradas por IA.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Otimização</h3>
            <p className="text-gray-600">
              Análise contínua de desempenho e ajustes automáticos de lances, segmentação e orçamento para maximizar resultados.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10">
            <div className="h-12 w-12 bg-[#403CCF] rounded-full flex items-center justify-center text-white font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Relatórios</h3>
            <p className="text-gray-600">
              Envio automático de relatórios via WhatsApp com métricas-chave, insights e recomendações para melhorias.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefícios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Por que escolher o Agente de Tráfego Pago da NeoSale
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Redução de custos</h3>
                <p className="text-gray-600">
                  Reduza em até 30% o custo por aquisição (CPA) com otimização contínua baseada em dados.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Aumento de conversão</h3>
                <p className="text-gray-600">
                  Melhore suas taxas de conversão com anúncios altamente relevantes e segmentados para seu público-alvo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Criatividade aprimorada</h3>
                <p className="text-gray-600">
                  Gere dezenas de variações criativas de anúncios com IA para testar e identificar as mais eficazes.
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Transparência total</h3>
                <p className="text-gray-600">
                  Receba relatórios claros e objetivos diretamente no WhatsApp, com métricas que realmente importam para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ROI Calculator Section */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Calculadora de ROI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja quanto você pode economizar e aumentar seus resultados com nosso agente de tráfego pago
          </p>
        </div>

        <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Sem o Agente NeoSale</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Investimento mensal em anúncios</p>
                  <p className="text-lg font-medium">R$ 10.000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Custo por aquisição médio</p>
                  <p className="text-lg font-medium">R$ 120</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Clientes adquiridos por mês</p>
                  <p className="text-lg font-medium">83</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Valor médio por cliente</p>
                  <p className="text-lg font-medium">R$ 300</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Receita total</p>
                  <p className="text-lg font-medium">R$ 24.900</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">ROI</p>
                  <p className="text-lg font-medium">149%</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Com o Agente NeoSale</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Investimento mensal em anúncios</p>
                  <p className="text-lg font-medium">R$ 10.000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Custo por aquisição médio</p>
                  <p className="text-lg font-medium text-green-600">R$ 84 (-30%)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Clientes adquiridos por mês</p>
                  <p className="text-lg font-medium text-green-600">119 (+43%)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Valor médio por cliente</p>
                  <p className="text-lg font-medium">R$ 300</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Receita total</p>
                  <p className="text-lg font-medium text-green-600">R$ 35.700</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">ROI</p>
                  <p className="text-lg font-medium text-green-600">257%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Aumento de receita mensal</p>
                <p className="text-xl font-semibold text-green-600">+ R$ 10.800</p>
              </div>
              <WhatsAppButton text="Calcular seu ROI personalizado" phoneNumber="5511992761075" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Potencialize seus anúncios com IA</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            Agende uma demonstração e veja como o Agente de Tráfego Pago pode transformar suas campanhas
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
