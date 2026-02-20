import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da Strutura.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pb-16 pt-32 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 px-14 py-14 max-sm:px-6 max-sm:py-10">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: Fevereiro de 2026
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
          A Strutura (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;) respeita a tua
          privacidade. Esta política explica como tratamos os dados pessoais
          recolhidos através do nosso canal de comunicação via{" "}
          <strong>WhatsApp Business</strong>.
        </p>

        <hr className="border-zinc-100 dark:border-zinc-800 my-8" />

        <Section title="1. Responsável pelo Tratamento">
          <p>
            Strutura — Automação com Inteligência Artificial
            <br />
            Website:{" "}
            <a
              href="https://strutura.ai"
              className="underline underline-offset-4"
            >
              strutura.ai
            </a>
            <br />
            Contacto:{" "}
            <a
              href="mailto:leonardo@strutura.ai"
              className="underline underline-offset-4"
            >
              leonardo@strutura.ai
            </a>
          </p>
        </Section>

        <Section title="2. Que dados recolhemos">
          <p>
            Quando interages connosco pelo WhatsApp, podemos recolher os
            seguintes dados:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Número de telefone associado à tua conta WhatsApp</li>
            <li>Nome de perfil que optares por partilhar</li>
            <li>Conteúdo das mensagens trocadas no âmbito do nosso serviço</li>
          </ul>
        </Section>

        <Section title="3. Para que usamos os teus dados">
          <p>Os dados recolhidos são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder às tuas questões e pedidos de informação</li>
            <li>Gerir a comunicação comercial entre as partes</li>
            <li>
              Enviar informações sobre os nossos serviços, caso o tenhas
              solicitado
            </li>
          </ul>
        </Section>

        <Section title="4. Base legal">
          <p>
            O tratamento dos teus dados baseia-se no teu consentimento expresso
            ao iniciar a conversa connosco, e/ou na execução de um contrato ou
            pré-contrato a teu pedido, nos termos do Regulamento Geral sobre a
            Proteção de Dados (RGPD).
          </p>
        </Section>

        <Section title="5. Partilha de dados com terceiros">
          <p>
            Não vendemos nem partilhamos os teus dados pessoais com terceiros
            para fins comerciais. Os dados podem ser processados por:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Meta Platforms (WhatsApp)</strong> — enquanto fornecedor
              da plataforma de mensagens, sujeito à sua própria política de
              privacidade
            </li>
            <li>
              Ferramentas de automação utilizadas internamente para gerir as
              comunicações (e.g., plataformas de workflow como n8n), sob acordos
              de confidencialidade
            </li>
          </ul>
        </Section>

        <Section title="6. Retenção dos dados">
          <p>
            Os dados são conservados pelo tempo necessário para o cumprimento da
            finalidade para a qual foram recolhidos, ou pelo prazo legalmente
            exigido. Podes solicitar a eliminação dos teus dados a qualquer
            momento.
          </p>
        </Section>

        <Section title="7. Os teus direitos">
          <p>Ao abrigo do RGPD, tens direito a:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Aceder aos dados que temos sobre ti</li>
            <li>Corrigir dados incorretos</li>
            <li>Solicitar a eliminação dos teus dados</li>
            <li>Opor-te ao tratamento dos teus dados</li>
            <li>
              Apresentar reclamação à Comissão Nacional de Proteção de Dados
              (CNPD)
            </li>
          </ul>
          <p className="mt-2">
            Para exerceres qualquer um destes direitos, contacta-nos em{" "}
            <a
              href="mailto:leonardo@strutura.ai"
              className="underline underline-offset-4"
            >
              leonardo@strutura.ai
            </a>
            .
          </p>
        </Section>

        <Section title="8. Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger
            os teus dados contra acesso não autorizado, perda ou divulgação
            indevida.
          </p>
        </Section>

        <Section title="9. Alterações a esta política">
          <p>
            Podemos atualizar esta política periodicamente. A versão mais
            recente estará sempre disponível em{" "}
            <a
              href="https://strutura.ai/whatsapp/privacy"
              className="underline underline-offset-4"
            >
              strutura.ai/whatsapp/privacy
            </a>
            .
          </p>
        </Section>

        <hr className="border-zinc-100 dark:border-zinc-800 my-8" />

        <p className="text-xs text-muted-foreground">
          © 2026 Strutura. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      {children}
    </div>
  );
}
