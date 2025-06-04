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
          {/* White Label para Agências */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">White Label para Agências</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Ofereça soluções de IA e automação com sua própria marca. Cadastramento de clientes, automações prontas e personalização completa.
            </p>
            <PrimaryButton href="/produtos#white-label" size="lg">Conhecer solução</PrimaryButton>
          </div>

          {/* ClaraNutri */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Clara Nutri <span className="text-sm font-normal bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">Case Real</span></h3>
            <p className="text-gray-600 mb-6 text-lg">
              Assistente com IA para nutricionistas oferecerem aos pacientes. Já em operação e com resultados comprovados.
            </p>
            <PrimaryButton href="/produtos#claraNutri" size="lg">Ver case</PrimaryButton>
          </div>

          {/* Consultoria em IA */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-[#403CCF]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#403CCF]">
                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Consultoria em IA</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Projeto sob medida com estratégia, automação e execução para pequenas e médias empresas que querem automatizar processos.
            </p>
            <PrimaryButton href="/produtos#consultoria" size="lg">Ver detalhes</PrimaryButton>
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
