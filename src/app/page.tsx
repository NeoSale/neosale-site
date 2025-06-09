import Image from "next/image";
import Section from "@/components/ui/Section";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/banner.png" 
            alt="Dashboard NeoSale Background" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="mb-6">
              <Image 
                src="/images/logo.png" 
                alt="NeoSale Logo" 
                width={300} 
                height={100} 
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-white font-bold">
              Venda IA como se fosse sua. <span className="text-white/80">Automatize tudo com NeoSale.</span>
            </h1>
            <p className="text-white text-lg mb-8">
              Soluções white label com inteligência artificial para agências, nichos e 
              empresas que querem escalar com leveza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="/contato" large>
                Quero vender IA com minha marca
              </PrimaryButton>
              <WhatsAppButton text="Conhecer a Clara Nutri" phoneNumber="5511945222550" large className="bg-green-500 hover:bg-green-600 text-white" />
            </div>
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Soluções que cabem no seu modelo de negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha a melhor forma de utilizar nossa tecnologia para impulsionar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Agentes por Nicho */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Agentes de IA por Nicho <span className="text-sm font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">Produtos</span></h3>
            <p className="text-gray-600 mb-6 text-lg">
              Soluções especializadas para setores específicos: Jurídico, Imobiliário, Financeiro e mais. Cada agente é treinado para resolver desafios únicos do seu setor.
            </p>
            <PrimaryButton href="/produtos" size="lg">Ver soluções por nicho</PrimaryButton>
          </div>

          {/* Marketing Digital */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Marketing Digital <span className="text-sm font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">Produtos</span></h3>
            <p className="text-gray-600 mb-6 text-lg">
              Agentes de IA para tráfego pago e social media. Otimização de campanhas, criação de conteúdo para redes sociais e relatórios automáticos com controle via WhatsApp.
            </p>
            <PrimaryButton href="/produtos" size="lg">Ver soluções de marketing</PrimaryButton>
          </div>
          
          {/* Ferramentas Complementares */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Ferramentas Complementares <span className="text-sm font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">Produtos</span></h3>
            <p className="text-gray-600 mb-6 text-lg">
              Soluções que potencializam seus resultados: NeoFollow para pós-atendimento, NeoCalendar para agendamentos e NeoAI para análise de dados e insights.
            </p>
            <PrimaryButton href="/produtos" size="lg">Ver ferramentas</PrimaryButton>
          </div>
        </div>
      </Section>
      
      {/* How it Works Section */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Três passos simples para começar a utilizar nossa tecnologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="h-20 w-20 bg-[#403CCF] rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Escolha o modelo</h3>
            <p className="text-gray-600">
              White Label, Clara Nutri ou Consultoria personalizada para seu negócio
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="h-20 w-20 bg-[#403CCF] rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Personalize com sua marca</h3>
            <p className="text-gray-600">
              Adicione seu logo, cores e identidade visual para uma experiência totalmente personalizada
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="h-20 w-20 bg-[#403CCF] rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Comece a vender ou automatizar</h3>
            <p className="text-gray-600">
              Implemente a solução e comece a colher os resultados imediatamente
            </p>
          </div>
        </div>
      </Section>

      {/* Case Study - ClaraNutri */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Case de Sucesso: Clara Nutri</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os resultados reais da nossa solução para nutricionistas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="mx-auto w-full max-w-[400px] md:max-w-none order-2 md:order-1">
            <PlaceholderImage 
              text="Clara Nutri Dashboard Preview" 
              aspectRatio="3/2"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sobre o Clara Nutri</h3>
              <p className="text-gray-600 mb-4 text-lg">
                O Clara Nutri é uma assistente de IA personalizada para nutricionistas oferecerem aos seus pacientes, 
                ajudando no acompanhamento nutricional e na adesão aos planos alimentares.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Aumento de 78% na adesão aos planos alimentares</h4>
                  <p className="text-gray-600">Pacientes com acesso ao ClaraNutri seguem as recomendações nutricionais com muito mais consistência.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Redução de 45% no tempo de atendimento</h4>
                  <p className="text-gray-600">Nutricionistas economizam tempo com a automação de dúvidas frequentes e acompanhamento diário.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Aumento de 92% na satisfação dos pacientes</h4>
                  <p className="text-gray-600">Pacientes relatam maior satisfação com o acompanhamento nutricional personalizado e instantâneo.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <PrimaryButton href="/produtos#claraNutri" size="lg" className="bg-green-600 hover:bg-green-700">Conhecer o Clara Nutri</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Who We Are Section */}
      <Section background="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Quem Somos</h2>
            <p className="text-gray-600 text-lg mb-6">
              A NeoSale nasceu da prática, com experiência sólida em automação, vendas e inteligência aplicada.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Nossa missão é democratizar o acesso à tecnologia de IA e automação, permitindo que empresas de todos os tamanhos possam utilizar essas ferramentas para crescer e se destacar no mercado.
            </p>
            <p className="text-gray-600 text-lg">
              Com soluções white label e produtos prontos por nicho, tornamos a tecnologia acessível e personalizável para diferentes modelos de negócio.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#FBFAFF] p-8 rounded-xl border border-[#403CCF]/10 max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Nossos Diferenciais</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#403CCF] mr-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tecnologia avançada com implementação simplificada</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#403CCF] mr-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Personalização completa para sua marca</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#403CCF] mr-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Suporte especializado e treinamento completo</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#403CCF] mr-3">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Resultados comprovados em diferentes nichos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Você não precisa criar tudo do zero.</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            A tecnologia está pronta. A marca é sua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Agendar apresentação" phoneNumber="5511992761075" large className="sm:px-8" />
          </div>
        </div>
      </Section>
    </>
  );
}
