"use client";

import { Target, Zap, List, Bot, Send } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Actions from "./Actions";

export default function SolutionSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 lg:px-32 px-6 w-full py-28">
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <div className="flex flex-col items-center gap-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue/20 text-blue text-sm font-medium tracking-wide uppercase">
              Como Funciona
            </span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Automatize Todo o Seu Pipeline de Leads em 3 Semanas
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-blue/80 leading-relaxed">
            Construímos sistemas inteligentes de automação de leads usando n8n que capturam,
            enriquecem, classificam e entregam cada lead à sua equipa de vendas em menos de 2
            minutos — sem nenhum trabalho manual.
          </p>
        </RevealOnScroll>
      </div>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Capture & Enrich */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-blue/50 hover:border-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue/20">
                  <Target
                    className="w-6 h-6 text-blue"
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xl font-bold">Captura & Enriquecimento</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-blue mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    100% Captura de Leads
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    Cada submissão de formulário, consulta por chatbot ou contacto
                    inbound é capturado instantaneamente via webhooks automatizados.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-3">
                    Enriquecimento automático:
                  </p>
                  <ul className="space-y-2 text-white/85">
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                      <span>Nome da empresa, tamanho, indústria</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                      <span>Número de funcionários & sinais de crescimento</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                      <span>Stack tecnológico & dados firmográficos</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                      <span>Informações de contacto (email, telefone, LinkedIn)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-blue/90 font-medium pt-2">
                  Sem mais pesquisa manual. Cada lead chega totalmente carregado
                  com dados.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Column 2: AI-Powered Scoring */}
          <RevealOnScroll delay={0.15}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-snow/5 hover:border-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue/20">
                  <Bot className="w-6 h-6 text-blue" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold">Classificação com IA</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-blue mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Qualificação Inteligente
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    O nosso modelo de IA classifica cada lead com base no seu Perfil
                    de Cliente Ideal em tempo real:
                  </p>
                </div>

                <ul className="space-y-2 text-white/85">
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Compatibilidade de tamanho da empresa</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Adequação da indústria</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Sinais de orçamento</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Indicadores de intenção de compra</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Autoridade do decisor</span>
                  </li>
                </ul>

                <p className="text-blue/90 font-medium pt-2">
                  Leads quentes são sinalizados instantaneamente. Leads frios vão para nutrição.
                  Os seus vendedores focam-se em negócios que fecham.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Column 3: Sync & Alert */}
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-snow/5 hover:border-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue/20">
                  <Send className="w-6 h-6 text-blue" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold">Sincronização & Alerta</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-blue mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Entrega Instantânea
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    Leads qualificados sincronizam com o seu CRM e alertam a sua equipa em
                    &lt;2 minutos:
                  </p>
                </div>

                <ul className="space-y-2 text-white/85">
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Criação automática no HubSpot/Salesforce/Pipedrive</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>Notificação Slack em tempo real com resumo do lead</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>
                      Sequência de emails personalizada acionada automaticamente
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-blue/80" />
                    <span>
                      Lead atribuído ao vendedor certo com base em território/produto
                    </span>
                  </li>
                </ul>

                <p className="text-blue/90 font-medium pt-2">
                  A sua equipa de vendas recebe leads acionáveis, não trabalho
                  de inserção de dados.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <RevealOnScroll delay={0.3}>
        <div className="flex justify-center w-full">
          <Actions />
        </div>
      </RevealOnScroll>
    </section>
  );
}
