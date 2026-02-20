import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos de serviço do canal WhatsApp da Strutura.",
};

export default function WhatsAppTermsPage() {
  return (
    <main className="min-h-screen bg-background pb-16 pt-32 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 px-14 py-14 max-sm:px-6 max-sm:py-10">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Termos de Serviço
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: Fevereiro de 2026
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
          Ao iniciar uma conversa com a Strutura através do WhatsApp Business,
          aceitas os presentes Termos de Serviço. Lê-os com atenção antes de
          utilizar o nosso canal de comunicação.
        </p>

        <hr className="border-zinc-100 dark:border-zinc-800 my-8" />

        <Section title="1. Sobre a Strutura">
          <p>
            A Strutura é uma agência portuguesa especializada em automação com
            inteligência artificial, que presta serviços a empresas europeias
            nas áreas de geração de leads, suporte ao cliente automatizado e
            otimização de processos internos.
          </p>
          <p>
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

        <Section title="2. Âmbito do canal WhatsApp">
          <p>O nosso canal de WhatsApp Business destina-se exclusivamente a:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responder a pedidos de informação sobre os nossos serviços</li>
            <li>
              Apoiar clientes existentes no âmbito dos projetos contratados
            </li>
            <li>
              Partilhar informações comerciais solicitadas pelo utilizador
            </li>
          </ul>
          <p>
            Este canal não substitui um contrato formal de prestação de
            serviços. Qualquer compromisso comercial deverá ser formalizado por
            escrito.
          </p>
        </Section>

        <Section title="3. Utilização aceitável">
          <p>Ao utilizar o nosso canal de WhatsApp, comprometes-te a:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>
              Não utilizar o canal para fins ilegais, abusivos ou fraudulentos
            </li>
            <li>
              Não enviar spam, conteúdo ofensivo ou material protegido por
              direitos de terceiros
            </li>
            <li>
              Respeitar os limites deste canal como meio de comunicação
              comercial
            </li>
          </ul>
        </Section>

        <Section title="4. Disponibilidade do serviço">
          <p>
            Fazemos os possíveis para responder de forma atempada, mas não
            garantimos disponibilidade contínua ou tempo de resposta imediato. O
            canal opera em horário comercial (dias úteis, 9h–18h, hora de
            Lisboa), salvo indicação em contrário.
          </p>
        </Section>

        <Section title="5. Propriedade intelectual">
          <p>
            Todo o conteúdo partilhado pela Strutura através deste canal —
            incluindo textos, metodologias, propostas e materiais — é
            propriedade da Strutura ou dos seus licenciantes, e não pode ser
            reproduzido ou utilizado sem autorização prévia e escrita.
          </p>
        </Section>

        <Section title="6. Limitação de responsabilidade">
          <p>A Strutura não se responsabiliza por:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Interrupções do serviço WhatsApp causadas pela Meta Platforms
            </li>
            <li>
              Decisões tomadas com base em informações partilhadas neste canal
              sem formalização contratual
            </li>
            <li>
              Danos indiretos decorrentes do uso ou da impossibilidade de uso
              deste canal
            </li>
          </ul>
        </Section>

        <Section title="7. Plataforma WhatsApp">
          <p>
            Este canal opera sobre a plataforma WhatsApp Business da Meta
            Platforms. A utilização do WhatsApp está sujeita aos{" "}
            <a
              href="https://www.whatsapp.com/legal/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Termos de Serviço da WhatsApp
            </a>{" "}
            e à respetiva{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Política de Privacidade
            </a>
            .
          </p>
        </Section>

        <Section title="8. Proteção de dados">
          <p>
            O tratamento dos teus dados pessoais é regido pela nossa{" "}
            <a
              href="/whatsapp/privacy"
              className="underline underline-offset-4"
            >
              Política de Privacidade
            </a>
            , em conformidade com o RGPD.
          </p>
        </Section>

        <Section title="9. Lei aplicável">
          <p>
            Estes Termos são regidos pela legislação portuguesa. Em caso de
            litígio, as partes submetem-se à jurisdição dos tribunais da comarca
            de Lisboa, sem prejuízo de outros meios de resolução alternativa de
            conflitos.
          </p>
        </Section>

        <Section title="10. Alterações aos Termos">
          <p>
            Podemos atualizar estes Termos a qualquer momento. A versão mais
            recente estará sempre disponível em{" "}
            <a href="/whatsapp/terms" className="underline underline-offset-4">
              strutura.ai/whatsapp/terms
            </a>
            . A utilização continuada do canal após alterações implica a
            aceitação dos novos termos.
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
