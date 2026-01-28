import { Container } from "@/components/ui/Container";

export default function PoliticaPrivacidadePage() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <Container size="md">
        <h1 className="text-4xl font-bold text-text-light mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text-muted-dark">
          <p className="text-lg">
            Última atualização: Janeiro de 2025
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            1. Introdução
          </h2>
          <p>
            A NeoSale AI (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) está comprometida em proteger
            sua privacidade. Esta Política de Privacidade explica como coletamos,
            usamos, divulgamos e protegemos suas informações quando você utiliza
            nossos serviços.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            2. Informações que Coletamos
          </h2>
          <p>Podemos coletar as seguintes informações:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-light">Informações de contato:</strong> nome, email,
              telefone, empresa
            </li>
            <li>
              <strong className="text-text-light">Dados de uso:</strong> como você interage com
              nossos serviços
            </li>
            <li>
              <strong className="text-text-light">Informações técnicas:</strong> endereço IP, tipo
              de navegador, dispositivo
            </li>
            <li>
              <strong className="text-text-light">Conversas:</strong> mensagens trocadas através da
              plataforma para fins de prestação do serviço
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            3. Como Usamos suas Informações
          </h2>
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer e manter nossos serviços</li>
            <li>Processar transações e enviar notificações relacionadas</li>
            <li>Responder a solicitações e fornecer suporte</li>
            <li>Melhorar nossos serviços e desenvolver novos recursos</li>
            <li>Enviar comunicações de marketing (com seu consentimento)</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            4. Compartilhamento de Informações
          </h2>
          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar dados
            com:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestadores de serviços que nos auxiliam na operação</li>
            <li>Parceiros de negócios (com seu consentimento)</li>
            <li>Autoridades legais quando exigido por lei</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            5. Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger suas informações, incluindo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Backups regulares</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            6. Seus Direitos (LGPD)
          </h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
            direito a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
            <li>Solicitar portabilidade dos dados</li>
            <li>Revogar consentimento a qualquer momento</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            7. Retenção de Dados
          </h2>
          <p>
            Mantemos suas informações pelo tempo necessário para cumprir as
            finalidades descritas nesta política, a menos que um período de
            retenção mais longo seja exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            8. Cookies
          </h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua
            experiência, analisar o uso do site e personalizar conteúdo. Você
            pode gerenciar suas preferências de cookies nas configurações do
            navegador.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            9. Alterações nesta Política
          </h2>
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos sobre
            mudanças significativas através do site ou por email.
          </p>

          <h2 className="text-2xl font-semibold text-text-light mt-8">
            10. Contato
          </h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
            entre em contato:
          </p>
          <ul className="list-none space-y-2">
            <li>
              <strong className="text-text-light">Email:</strong>{" "}
              privacidade@neosaleai.com.br
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
