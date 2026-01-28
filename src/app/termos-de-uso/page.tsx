import { Container } from "@/components/ui/Container";

export default function TermosDeUsoPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <Container size="md">
        <h1 className="text-4xl font-bold text-text-light mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text-muted-dark">
          <p className="text-lg">
            Última atualização: Janeiro de 2025
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e usar os serviços da NeoSale AI, você concorda em
            cumprir e estar vinculado a estes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, não poderá acessar o
            serviço.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            2. Descrição do Serviço
          </h2>
          <p>
            A NeoSale AI é uma plataforma de automação de vendas e atendimento
            via WhatsApp que utiliza agentes de inteligência artificial para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Qualificar leads automaticamente</li>
            <li>Realizar follow-up inteligente</li>
            <li>Agendar reuniões</li>
            <li>Gerenciar relacionamento com clientes</li>
            <li>Fornecer métricas e relatórios</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            3. Cadastro e Conta
          </h2>
          <p>Para usar nossos serviços, você deve:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ter pelo menos 18 anos de idade</li>
            <li>Fornecer informações verdadeiras e completas</li>
            <li>Manter suas credenciais de acesso em sigilo</li>
            <li>Notificar imediatamente sobre uso não autorizado</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            4. Uso Aceitável
          </h2>
          <p>Você concorda em NÃO usar o serviço para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enviar spam ou mensagens não solicitadas</li>
            <li>Violar leis ou regulamentos aplicáveis</li>
            <li>Infringir direitos de terceiros</li>
            <li>Transmitir conteúdo ilegal, ofensivo ou prejudicial</li>
            <li>Tentar acessar sistemas sem autorização</li>
            <li>Interferir no funcionamento do serviço</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            5. Conformidade com WhatsApp
          </h2>
          <p>
            Ao usar nossa plataforma, você concorda em cumprir os Termos de
            Serviço e Políticas do WhatsApp, incluindo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obter consentimento antes de enviar mensagens</li>
            <li>Respeitar solicitações de opt-out</li>
            <li>Não enviar conteúdo proibido</li>
            <li>Manter práticas de mensagens responsáveis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            6. Pagamento e Faturamento
          </h2>
          <p>
            Os planos são cobrados conforme a periodicidade contratada. O não
            pagamento pode resultar em suspensão ou cancelamento do serviço.
            Não há reembolso para períodos parciais de uso.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            7. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo, software, design e materiais da NeoSale AI são
            protegidos por direitos autorais e outras leis de propriedade
            intelectual. Você não pode copiar, modificar, distribuir ou criar
            obras derivadas sem autorização.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            8. Limitação de Responsabilidade
          </h2>
          <p>
            A NeoSale AI não se responsabiliza por danos indiretos, incidentais
            ou consequenciais decorrentes do uso do serviço. Nossa
            responsabilidade total está limitada ao valor pago pelo serviço nos
            últimos 12 meses.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            9. Disponibilidade do Serviço
          </h2>
          <p>
            Nos esforçamos para manter o serviço disponível 24/7, mas não
            garantimos disponibilidade ininterrupta. Manutenções programadas
            serão comunicadas com antecedência quando possível.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            10. Rescisão
          </h2>
          <p>
            Você pode cancelar sua conta a qualquer momento. Reservamo-nos o
            direito de suspender ou encerrar contas que violem estes termos,
            sem aviso prévio.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            11. Alterações nos Termos
          </h2>
          <p>
            Podemos modificar estes termos a qualquer momento. Alterações
            significativas serão comunicadas por email ou através do serviço.
            O uso continuado após as alterações constitui aceitação dos novos
            termos.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            12. Lei Aplicável
          </h2>
          <p>
            Estes termos são regidos pelas leis da República Federativa do
            Brasil. Qualquer disputa será resolvida nos tribunais da cidade de
            São Paulo, SP.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            13. Contato
          </h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
          </p>
          <ul className="list-none space-y-2">
            <li>
              <strong className="text-text-light">Email:</strong>{" "}
              legal@neosaleai.com.br
            </li>
            <li>
              <strong className="text-text-light">WhatsApp:</strong> +55 11
              99999-9999
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
