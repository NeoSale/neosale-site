import Image from "next/image";
import Section from "@/components/ui/Section";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              Automação de IA para <span className="font-bold">Clínicas de Estética</span>
            </h1>
            <p className="text-white text-lg mb-8">
              Transforme sua clínica com nossas soluções inteligentes de agendamento, 
              acompanhamento de clientes e automação de marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton text="Agendar demonstração" large />
              <PrimaryButton href="/produtos" large>
                Conhecer produtos
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">Soluções Completas para sua Clínica</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossas ferramentas inteligentes ajudam a otimizar processos, melhorar a experiência do cliente e aumentar seus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* NeoCalendar */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-600">NeoCalendar</h3>
            <p className="text-gray-600 mb-4">
              Sistema inteligente de agendamento que otimiza sua agenda e reduz faltas com lembretes automáticos.
            </p>
            <PrimaryButton href="/produtos#neocalendar">Saiba mais</PrimaryButton>
          </div>

          {/* NeoFollow */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-600">NeoFollow</h3>
            <p className="text-gray-600 mb-4">
              Acompanhamento personalizado de clientes com comunicação automatizada e relatórios de progresso.
            </p>
            <PrimaryButton href="/produtos#neofollow">Saiba mais</PrimaryButton>
          </div>

          {/* NeoAI */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M16.5 7.5h-9v9h9v-9z" />
                <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-600">NeoAI</h3>
            <p className="text-gray-600 mb-4">
              Inteligência artificial que analisa dados e gera insights para otimizar seus tratamentos e resultados.
            </p>
            <PrimaryButton href="/produtos#neoai">Saiba mais</PrimaryButton>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como nossas soluções estão transformando clínicas de estética por todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#FBFAFF] p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">Foto</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Dra. Camila Santos</h4>
                <p className="text-gray-500 text-sm">Clínica Estética Beleza</p>
              </div>
            </div>
            <p className="text-gray-800">
              &ldquo;Desde que implementamos o NeoCalendar, reduzimos nossas faltas em mais de 60%. 
              O sistema de lembretes automáticos é fantástico e nossos clientes adoram a facilidade 
              de confirmar ou reagendar pelo WhatsApp.&rdquo;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#FBFAFF] p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">Foto</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Dr. Ricardo Oliveira</h4>
                <p className="text-gray-500 text-sm">Clínica Dermatológica RO</p>
              </div>
            </div>
            <p className="text-gray-800">
              &quot;O NeoFollow revolucionou nosso pós-atendimento. Conseguimos acompanhar 
              os resultados dos tratamentos de forma automatizada e nossos pacientes 
              se sentem muito mais cuidados e valorizados.&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#FBFAFF] p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">Foto</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Dra. Amanda Ferreira</h4>
                <p className="text-gray-500 text-sm">Estética Avançada</p>
              </div>
            </div>
            <p className="text-gray-800">
              &quot;A inteligência artificial do NeoAI nos ajudou a otimizar nossos protocolos 
              de tratamento. Conseguimos resultados melhores em menos sessões, o que 
              aumentou significativamente a satisfação dos nossos clientes.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-600">Pronto para transformar sua clínica?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Agende uma demonstração gratuita e descubra como nossas soluções podem ajudar seu negócio a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Agendar demonstração" large className="sm:px-8" />
            <PrimaryButton href="/planos" large>
              Ver planos e preços
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
