import React from 'react';
import Section from '@/components/ui/Section';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Link from 'next/link';

export default function ProdutosPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Produtos NeoSale</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções de automação com inteligência artificial para diversos nichos de mercado
          </p>
        </div>
      </Section>

      {/* Categorias de Produtos */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nossas Categorias de Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções especializadas para diferentes setores e necessidades
          </p>
        </div>
        
        {/* Agentes de IA por Nicho */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Agentes de IA por Nicho</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/produtos/juridico" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Jurídico</h4>
              <p className="text-gray-600 mb-4">Automação para escritórios de advocacia e departamentos jurídicos</p>
              <span className="text-[#403CCF] font-medium text-sm">Ver detalhes →</span>
            </Link>
            
            <Link href="/produtos/imobiliaria" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Imobiliária</h4>
              <p className="text-gray-600 mb-4">Qualificação de leads e agendamento de visitas automatizado</p>
              <span className="text-[#403CCF] font-medium text-sm">Ver detalhes →</span>
            </Link>
            
            <Link href="/produtos" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Financeira</h4>
              <p className="text-gray-600 mb-4">Automação para instituições financeiras e fintechs</p>
              <span className="text-[#403CCF] font-medium text-sm">Em breve →</span>
            </Link>
            
            <Link href="/produtos" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Mais Nichos</h4>
              <p className="text-gray-600 mb-4">Varejo, Ensino, Saúde, Construtoras, RH e outros</p>
              <span className="text-[#403CCF] font-medium text-sm">Ver todos →</span>
            </Link>
          </div>
        </div>
        
        {/* Marketing Digital */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Marketing Digital</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/produtos/trafego-pago" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Tráfego Pago</h4>
              <p className="text-gray-600 mb-4">Automação de campanhas e otimização de anúncios</p>
              <span className="text-[#403CCF] font-medium text-sm">Ver detalhes →</span>
            </Link>
            
            <Link href="/produtos" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Social Media</h4>
              <p className="text-gray-600 mb-4">Gestão de redes sociais e criação de conteúdo</p>
              <span className="text-[#403CCF] font-medium text-sm">Em breve →</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Ferramentas Complementares */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ferramentas Complementares</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções que potencializam seus resultados em qualquer segmento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* NeoFollow */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">NeoFollow</h3>
            <p className="text-gray-600 mb-6">
              Sistema de pós-atendimento e fidelização que mantém contato com seus clientes, garantindo satisfação e incentivando retornos.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Acompanhamento automático pós-venda</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Pesquisas de satisfação personalizadas</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Campanhas de fidelização automatizadas</span>
              </li>
            </ul>
            
            <PrimaryButton href="/produtos" className="w-full justify-center">Ver detalhes</PrimaryButton>
          </div>
          
          {/* NeoCalendar */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">NeoCalendar</h3>
            <p className="text-gray-600 mb-6">
              Sistema inteligente de agendamento que otimiza sua agenda, reduz faltas e maximiza o aproveitamento do tempo dos profissionais.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Agendamento online 24/7</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Lembretes automáticos por WhatsApp</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Otimização inteligente de agenda</span>
              </li>
            </ul>
            
            <PrimaryButton href="/produtos" className="w-full justify-center">Ver detalhes</PrimaryButton>
          </div>
          
          {/* NeoAI */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#403CCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">NeoAI</h3>
            <p className="text-gray-600 mb-6">
              Solução de inteligência artificial que analisa dados e gera insights valiosos para otimizar processos e melhorar resultados.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Análise preditiva de resultados</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Recomendações personalizadas</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#403CCF] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Dashboards e relatórios inteligentes</span>
              </li>
            </ul>
            
            <PrimaryButton href="/produtos" className="w-full justify-center">Ver detalhes</PrimaryButton>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Transforme seu negócio com a NeoSale</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Nossas soluções de inteligência artificial trabalham para otimizar suas operações, melhorar a experiência dos clientes e aumentar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Falar com um especialista" large className="sm:px-8" />
            <PrimaryButton href="/planos" size="lg">
              Conhecer planos
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
