import React from 'react';
import Section from '@/components/ui/Section';
import PrimaryButton from '@/components/ui/PrimaryButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function PlanosPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Planos</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Soluções flexíveis para clínicas de estética de todos os tamanhos
          </p>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Escolha o plano ideal para sua clínica</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Oferecemos planos flexíveis que crescem junto com seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Básico</h3>
              <p className="text-gray-600 mb-4">Ideal para clínicas iniciantes</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$299</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <PrimaryButton href="#" className="w-full mb-6">Começar agora</PrimaryButton>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>NeoCalendar (funcionalidades básicas)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Até 2 profissionais</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lembretes automáticos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte por e-mail</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary relative transform scale-105">
            <div className="bg-primary text-white py-2 px-4 text-center text-sm font-bold">
              MAIS POPULAR
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Profissional</h3>
              <p className="text-gray-600 mb-4">Para clínicas em crescimento</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$599</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <PrimaryButton href="#" className="w-full mb-6">Escolher plano</PrimaryButton>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>NeoCalendar (completo)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>NeoFollow (básico)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Até 5 profissionais</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios básicos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte prioritário</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Empresarial</h3>
              <p className="text-gray-600 mb-4">Para clínicas estabelecidas</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$999</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <PrimaryButton href="#" className="w-full mb-6">Falar com consultor</PrimaryButton>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todas as soluções completas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>NeoAI com análises avançadas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Profissionais ilimitados</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gerente de conta dedicado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comparativo de Planos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja em detalhes o que cada plano oferece
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#FBFAFF]">
                <th className="py-4 px-6 text-left font-bold text-gray-800">Recursos</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800">Básico</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800">Profissional</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800">Empresarial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">NeoCalendar</td>
                <td className="py-4 px-6 text-center">Básico</td>
                <td className="py-4 px-6 text-center">Completo</td>
                <td className="py-4 px-6 text-center">Completo</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">NeoFollow</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">Básico</td>
                <td className="py-4 px-6 text-center">Completo</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">NeoAI</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">Completo</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">Profissionais</td>
                <td className="py-4 px-6 text-center">Até 2</td>
                <td className="py-4 px-6 text-center">Até 5</td>
                <td className="py-4 px-6 text-center">Ilimitados</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">Lembretes automáticos</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">Relatórios</td>
                <td className="py-4 px-6 text-center">Básicos</td>
                <td className="py-4 px-6 text-center">Intermediários</td>
                <td className="py-4 px-6 text-center">Avançados</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-800">Suporte</td>
                <td className="py-4 px-6 text-center">E-mail</td>
                <td className="py-4 px-6 text-center">Prioritário</td>
                <td className="py-4 px-6 text-center">Gerente dedicado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Perguntas Frequentes</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos planos e serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Posso mudar de plano depois?</h3>
            <p className="text-gray-800">
              Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
              As mudanças entram em vigor no próximo ciclo de faturamento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Existe período mínimo de contrato?</h3>
            <p className="text-gray-800">
              Não exigimos contratos de longo prazo. Nossos planos são mensais, 
              mas oferecemos descontos para pagamentos anuais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Como funciona o suporte técnico?</h3>
            <p className="text-gray-800">
              Todos os planos incluem suporte técnico. O nível de prioridade e os canais 
              disponíveis variam conforme o plano escolhido.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Oferecem treinamento para a equipe?</h3>
            <p className="text-gray-800">
              Sim, todos os planos incluem treinamento inicial. Os planos Profissional e 
              Empresarial incluem sessões adicionais de treinamento e materiais exclusivos.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua clínica?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco para uma demonstração personalizada ou para tirar qualquer dúvida sobre nossos planos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Falar com um consultor" large className="sm:px-8" />
            <PrimaryButton href="/contato" size="lg">
              Entre em contato
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
