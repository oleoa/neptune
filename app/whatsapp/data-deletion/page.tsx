import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminação de Dados Pessoais",
  description: "Pedido de eliminação de dados pessoais da Strutura.",
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-background pb-16 pt-32 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 px-14 py-14 max-sm:px-6 max-sm:py-10">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Eliminação de Dados Pessoais
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: Fevereiro de 2026
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
          Tens o direito de solicitar a eliminação dos teus dados pessoais que a
          Strutura possa ter recolhido através das nossas plataformas, incluindo
          o WhatsApp Business.
        </p>

        <hr className="border-zinc-100 dark:border-zinc-800 my-8" />

        <Section title="Como solicitar a eliminação">
          <p>
            Para exerceres este direito, envia um email para{" "}
            <a
              href="mailto:leonardo@strutura.ai"
              className="underline underline-offset-4"
            >
              leonardo@strutura.ai
            </a>{" "}
            com o assunto{" "}
            <strong>&ldquo;Pedido de Eliminação de Dados&rdquo;</strong> e
            indica:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>O teu nome completo</li>
            <li>O número de telefone associado à tua conta WhatsApp</li>
          </ul>
          <p>
            Processamos todos os pedidos no prazo máximo de{" "}
            <strong>30 dias úteis</strong>, em conformidade com o RGPD.
          </p>
        </Section>

        <Section title="O que eliminamos">
          <p>Ao processar o teu pedido, eliminamos os seguintes dados:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Histórico de mensagens trocadas pelo WhatsApp</li>
            <li>Número de telefone e nome de perfil</li>
            <li>
              Qualquer outra informação pessoal associada à tua comunicação
              connosco
            </li>
          </ul>
        </Section>

        <Section title="Confirmação">
          <p>
            Após processar o teu pedido, enviaremos uma confirmação por email.
            Se não recebermos resposta tua em{" "}
            <strong>5 dias úteis</strong> após o envio da confirmação,
            consideramos o pedido concluído.
          </p>
        </Section>

        <Section title="Contacto alternativo">
          <p>
            Se preferires, podes também contactar-nos através de{" "}
            <a
              href="https://strutura.ai"
              className="underline underline-offset-4"
            >
              strutura.ai
            </a>
            .
          </p>
        </Section>

        <hr className="border-zinc-100 dark:border-zinc-800 my-8" />

        <p className="text-xs text-muted-foreground">
          © 2026 Strutura. Todos os direitos reservados. &nbsp;·&nbsp;
          <a
            href="/whatsapp/privacy"
            className="underline underline-offset-4"
          >
            Política de Privacidade
          </a>
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
