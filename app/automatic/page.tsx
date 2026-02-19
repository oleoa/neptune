"use client";

import posthog from "posthog-js";
import { Check } from "lucide-react";

export default function AutomaticPage() {
  const handleWhatsAppClick = () => {
    posthog.capture("whatsapp_prototype_clicked", {
      phone_number: "+351938342970",
      destination_url: "https://web.whatsapp.com/send?phone=+351938342970",
    });
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 lg:px-32 pt-32 pb-20 flex flex-col gap-20">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Proposta Personalizada
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Soluções Automáticas para o{" "}
            <span className="text-yellow">Seu Negócio</span>
          </h1>
          <p className="text-xl text-foreground/65 max-w-3xl leading-relaxed">
            Transforme as suas operações com IA e automação inteligente. Reduza
            custos, melhore a eficiência e foque no que realmente importa.
          </p>
        </div>

        {/* Chatbot Section */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
              Solução 01
            </span>
            <h2 className="text-4xl font-bold">
              Chatbot Inteligente{" "}
              <span className="whitespace-nowrap">Multi-Canal</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Problems & What we provide */}
            <div
              className="p-8 rounded-2xl bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         flex flex-col gap-8"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Problemas que resolve:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Chamadas de clientes repetitivas
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    FAQ respondidas manualmente
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Confirmações manuais demoradas
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">O que fornecemos:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Chatbot com IA no WhatsApp
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Integração com website
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Respostas automáticas de FAQ
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Qualificação de leads
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Confirmações automáticas 24h antes
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Pedido automático de dados em falta
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits & Guarantees */}
            <div
              className="p-8 rounded-2xl bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         flex flex-col gap-8"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Benefícios:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Menos tempo com respostas repetitivas
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Confirmações automáticas
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Mais tempo para tarefas importantes
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Menos interrupções e erros
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Atendimento 24/7 instantâneo
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Melhor taxa de conversão
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Redução de stress da equipa
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Garantias:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Redução de 40–50% nas chamadas repetitivas
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Taxa de resposta automática de 70%
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Disponibilidade 100% do chatbot
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    Ajustes de resposta incluídos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div
            className="p-6 rounded-2xl border border-yellow/20 bg-yellow/4
                       dark:bg-yellow/3"
          >
            <h3 className="text-lg font-semibold mb-4">
              Retorno sobre Investimento
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-foreground/65 mb-4">
              <div>
                <p className="font-semibold text-foreground/80">Chamadas FAQ:</p>
                <p>80h/mês → ~€430/mês</p>
              </div>
              <div>
                <p className="font-semibold text-foreground/80">Confirmações:</p>
                <p>42h/mês → ~€220/mês</p>
              </div>
              <div>
                <p className="font-semibold text-foreground/80">Atendimento 24/7:</p>
                <p>~€1.000/mês</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-yellow">
              ROI Total: €1.650/mês = €19.800/ano
            </p>
          </div>

          {/* Prototype CTA */}
          <div
            className="p-6 rounded-2xl bg-white dark:bg-transparent
                       border border-foreground/8 dark:border-foreground/10
                       shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                       text-center flex flex-col items-center gap-4"
          >
            <h3 className="text-lg font-semibold">Teste o Protótipo Agora</h3>
            <p className="text-foreground/65 text-sm">
              Envie mensagem para o WhatsApp e experimente
            </p>
            <a
              href="https://web.whatsapp.com/send?phone=+351938342970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-6 rounded-xl transition-colors"
              onClick={handleWhatsAppClick}
            >
              +351 938 342 970
            </a>
            <p className="text-xs text-foreground/45">
              Ainda em desenvolvimento — responde como atendente humano
            </p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
              Solução 02
            </span>
            <h2 className="text-4xl font-bold">
              Dashboard Operações &{" "}
              <span className="text-yellow">Manutenção</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* What we provide */}
            <div
              className="p-8 rounded-2xl bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         flex flex-col gap-3"
            >
              <h3 className="text-lg font-semibold">O que fornecemos:</h3>
              <ul className="space-y-2 text-foreground/65 text-sm">
                {[
                  "Dashboard completo com todas as operações",
                  "Sincronização automática de reservas",
                  "Controle total e visão geral",
                  "Planeamento semanal de lavagens e manutenções",
                  "Coordenação dos colaboradores",
                  "Rastreamento de manutenções",
                  "Relatórios e métricas detalhadas",
                  "Envio de confirmações num clique",
                  "Coordenação diária automática",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits & Guarantees */}
            <div
              className="p-8 rounded-2xl bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         flex flex-col gap-8"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Benefícios:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  {[
                    "Redução de stress e \"apagar fogos\"",
                    "Menos tarefas administrativas",
                    "Melhor coordenação entre equipa",
                    "Simplificação da agenda",
                    "Menos erros operacionais",
                    "Alertas automáticos de manutenção",
                    "Histórico completo de reservas",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Garantias:</h3>
                <ul className="space-y-2 text-foreground/65 text-sm">
                  {[
                    "30 dias de ajustes gratuitos após o primeiro mês",
                    "Melhoria na coordenação entre colaboradores",
                    "Simplificação da agenda garantida",
                    "Redução de erros operacionais",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ROI Dashboard */}
          <div
            className="p-6 rounded-2xl border border-yellow/20 bg-yellow/4
                       dark:bg-yellow/3"
          >
            <h3 className="text-lg font-semibold mb-3">
              Retorno sobre Investimento
            </h3>
            <p className="text-foreground/65 text-sm mb-1">
              20 horas/semana poupadas × €10/hora ={" "}
              <span className="text-yellow font-bold text-base">€800/mês</span>
            </p>
            <p className="text-xs text-foreground/45">
              Inclui: Planeamento + Coordenação + Procura de informação — Erros
              + Melhor gestão
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="flex flex-col gap-10">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
              Ofertas e Preços
            </span>
            <h2 className="text-4xl font-bold">Escolha o seu plano</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Dashboard Only */}
            <div
              className="group relative flex flex-col p-8 rounded-2xl
                         bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         hover:border-yellow/35 hover:bg-yellow/2
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow/10 border border-yellow/20 mb-6">
                <svg
                  className="w-7 h-7 text-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Dashboard Operações</h3>
              <p className="text-xs text-foreground/45 mb-6">
                Entrega estimada: 2–3 semanas
              </p>
              <div className="text-4xl font-bold mb-6">€1.500</div>
              <ul className="space-y-3 text-sm text-foreground/65 flex-1 mb-6">
                {[
                  "Setup completo",
                  "Formação da equipa",
                  "Vídeos de manual",
                  "Integração com sistemas",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-foreground/8 dark:border-foreground/10 text-sm">
                <span className="text-foreground/45">Suporte & Atualização — </span>
                <span className="font-semibold">€100/mês</span>
                <span className="text-foreground/45"> (opcional)</span>
              </div>
            </div>

            {/* Chatbot Only */}
            <div
              className="group relative flex flex-col p-8 rounded-2xl
                         bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         hover:border-yellow/35 hover:bg-yellow/2
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow/10 border border-yellow/20 mb-6">
                <svg
                  className="w-7 h-7 text-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Chatbot AI</h3>
              <p className="text-xs text-foreground/45 mb-6">
                Entrega estimada: 3–4 semanas
              </p>
              <div className="text-4xl font-bold mb-6">€5.000</div>
              <ul className="space-y-3 text-sm text-foreground/65 flex-1 mb-6">
                {[
                  "Setup completo",
                  "Integração WhatsApp",
                  "Chat website",
                  "Treinamento da IA",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-foreground/8 dark:border-foreground/10 text-sm">
                <span className="text-foreground/45">Suporte & Atualização — </span>
                <span className="font-semibold">€300/mês</span>
                <span className="text-foreground/45"> (opcional)</span>
              </div>
            </div>

            {/* Combined Package */}
            <div
              className="group relative flex flex-col p-8 rounded-2xl
                         bg-yellow/5 dark:bg-yellow/4
                         border-2 border-yellow/40
                         shadow-[0_2px_24px_rgba(233,215,58,0.12)]
                         hover:border-yellow/60
                         transition-all duration-300"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow text-dark px-4 py-1 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
                10% DESCONTO
              </div>
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-yellow/60 to-transparent" />
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow/15 border border-yellow/30 mb-6">
                <svg
                  className="w-7 h-7 text-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Pacote Completo</h3>
              <p className="text-xs text-foreground/45 mb-6">
                Entrega estimada: 5–7 semanas
              </p>
              <div className="text-4xl font-bold text-yellow mb-6">€5.850</div>
              <ul className="space-y-3 text-sm text-foreground/65 flex-1 mb-6">
                {[
                  "Chatbot AI completo",
                  "Dashboard Operações",
                  "Integração total",
                  "Formação completa",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-yellow/20 text-sm">
                <span className="text-foreground/45">Suporte & Atualização — </span>
                <span className="font-semibold">€360/mês</span>
                <span className="text-foreground/45"> ambos</span>
              </div>
            </div>
          </div>

          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-2xl font-bold text-yellow">
              Investimento Recuperado em 2–3 Meses
            </p>
            <p className="text-foreground/55">
              ROI de €19.800/ano (Chatbot) + €9.600/ano (Dashboard)
            </p>
          </div>
        </section>

        {/* Support Info */}
        <section>
          <div
            className="p-8 rounded-2xl
                       bg-white dark:bg-transparent
                       border border-foreground/8 dark:border-foreground/10
                       shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none"
          >
            <h2 className="text-2xl font-bold mb-6">Suporte & Atualização</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">O que incluímos:</h3>
                <ul className="space-y-2 text-sm text-foreground/65">
                  {[
                    "Verificação funcional do sistema",
                    "Testes de funcionalidade",
                    "Monitoramento métrico da IA",
                    "Correção ativa de erros",
                    "Prevenção de problemas",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold">Ajustes contínuos:</h3>
                <ul className="space-y-2 text-sm text-foreground/65">
                  {[
                    "Ajustes com crescimento da empresa",
                    "Adaptação a alterações operacionais",
                    "Upgrade da IA com novas tecnologias",
                    "Atendimento de dúvidas à equipa",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Info */}
        <section>
          <div className="text-center p-8 rounded-2xl border border-yellow/20 bg-yellow/[0.04] dark:bg-yellow/[0.03]">
            <h2 className="text-xl font-bold mb-2">Condições de Pagamento</h2>
            <p className="text-lg text-foreground/70">
              50% de entrada&ensp;·&ensp;50% na entrega
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
