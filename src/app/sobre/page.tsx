import React from 'react';
import Section from '@/components/ui/Section';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a NeoSale</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Transformando clínicas de estética com automação inteligente
          </p>
        </div>
      </Section>

      {/* About Section */}
      <Section background="light" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa História</h2>
            <p className="text-gray-800 mb-6">
              A NeoSale nasceu da visão de transformar o setor de estética através da tecnologia. 
              Fundada por especialistas em tecnologia e profissionais do setor de estética, 
              nossa empresa combina conhecimento técnico e prático para criar soluções que realmente 
              atendem às necessidades específicas das clínicas de estética.
            </p>
            <p className="text-gray-800 mb-6">
              Desde o início, nosso foco tem sido desenvolver ferramentas que não apenas automatizam 
              processos, mas que também melhoram a experiência do cliente e potencializam os resultados 
              dos tratamentos através da inteligência artificial e análise de dados.
            </p>
            <p className="text-gray-800">
              Hoje, atendemos centenas de clínicas em todo o Brasil, ajudando-as a se destacarem 
              em um mercado cada vez mais competitivo através de nossas soluções inovadoras.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Imagem da equipe NeoSale
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission and Vision Section */}
      <Section background="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-[#FBFAFF] p-8 rounded-xl">
            <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Nossa Missão</h3>
            <p className="text-gray-800">
              Transformar o setor de estética através de soluções tecnológicas inovadoras que 
              otimizem a gestão das clínicas, melhorem a experiência dos clientes e potencializem 
              os resultados dos tratamentos.
            </p>
          </div>
          
          <div className="bg-[#FBFAFF] p-8 rounded-xl">
            <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Nossa Visão</h3>
            <p className="text-gray-800">
              Ser reconhecida como a principal referência em soluções tecnológicas para o setor de estética, 
              contribuindo para a evolução e profissionalização do mercado através da inovação constante 
              e do compromisso com a excelência.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Princípios que guiam nossas ações e decisões todos os dias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inovação</h3>
            <p className="text-gray-600">
              Buscamos constantemente novas formas de resolver problemas e melhorar nossas soluções, 
              mantendo-nos na vanguarda tecnológica do setor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path fillRule="evenodd" d="M4.688 15.36a8.25 8.25 0 01-3.44-1.668 2.25 2.25 0 00-2.12 0 8.25 8.25 0 01-3.44 1.668 2.25 2.25 0 00-2.12 0 8.25 8.25 0 01-3.44-1.668 2.25 2.25 0 00-2.12 0 8.25 8.25 0 01-3.44 1.668 2.25 2.25 0 00-2.12 0A2.25 2.25 0 013 15.75a8.25 8.25 0 013.44 1.668 2.25 2.25 0 002.12 0 8.25 8.25 0 013.44-1.668 2.25 2.25 0 002.12 0 8.25 8.25 0 013.44 1.668 2.25 2.25 0 002.12 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Excelência</h3>
            <p className="text-gray-600">
              Comprometemo-nos com a qualidade em tudo o que fazemos, desde o desenvolvimento 
              de nossos produtos até o atendimento aos nossos clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.437-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Colaboração</h3>
            <p className="text-gray-600">
              Trabalhamos em parceria com nossos clientes e entre nossas equipes, 
              acreditando que as melhores soluções surgem do trabalho conjunto.
            </p>
          </div>
        </div>
      </Section>

      {/* Differentials Section */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O que nos torna a escolha ideal para sua clínica de estética
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Especialização no Setor de Estética</h3>
              <p className="text-gray-600">
                Nossas soluções são desenvolvidas especificamente para clínicas de estética, 
                atendendo às necessidades particulares deste mercado.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M16.5 7.5h-9v9h9v-9z" />
                <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos as mais avançadas tecnologias de IA e análise de dados para 
                oferecer soluções que realmente fazem a diferença.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resultados Mensuráveis</h3>
              <p className="text-gray-600">
                Nossas soluções proporcionam resultados concretos e mensuráveis, 
                como redução de faltas, aumento de fidelização e otimização de processos.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">
                Nossa equipe de suporte é composta por especialistas que entendem 
                não apenas de tecnologia, mas também do mercado de estética.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Conheça a NeoSale de perto</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Agende uma conversa com nossa equipe e descubra como podemos transformar sua clínica de estética.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Agendar uma conversa" large className="sm:px-8" />
            <PrimaryButton href="/produtos" size="lg">
              Conhecer produtos
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
