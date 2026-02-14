"use client";

import posthog from "posthog-js";

export default function AutomaticPage() {
  const handleWhatsAppClick = () => {
    posthog.capture("whatsapp_prototype_clicked", {
      phone_number: "+351938342970",
      destination_url: "https://web.whatsapp.com/send?phone=+351938342970",
    });
  };

  const handleExternalLinkClick = (toolName: string, toolUrl: string) => {
    posthog.capture("external_link_clicked", {
      tool_name: toolName,
      destination_url: toolUrl,
    });
  };

  return (
    <div className="py-16 flex flex-col justify-center w-screen items-center bg-snow text-gray-900">

      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold pb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
          Soluções Automáticas para o Seu Negócio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforme suas operações com IA e automação inteligente. Reduza custos, melhore a eficiência e foque no que realmente importa.
        </p>
      </div>

      {/* Chatbot Section */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 p-8 rounded-2xl border border-blue-300 shadow-lg shadow-blue-100/50">
          <h2 className="text-4xl font-bold pb-6 text-center bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Chatbot Inteligente <span className="whitespace-nowrap">Multi-Canal</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 pb-8">
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-blue-600">Problemas que resolve:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Chamadas de clientes repetitivas</li>
                <li>• FAQ respondidas manualmente</li>
                <li>• Confirmações manuais demoradas</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-cyan-600">O que fornecemos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Chatbot com IA no WhatsApp</li>
                <li>• Integração com website</li>
                <li>• Respostas automáticas de FAQ</li>
                <li>• Qualificação de leads</li>
                <li>• Confirmações automáticas 24h antes</li>
                <li>• Pedido automático de dados em falta</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-sky-600">Benefícios:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Menos tempo com respostas repetitivas</li>
                <li>• Confirmações automáticas</li>
                <li>• Mais tempo para tarefas importantes</li>
                <li>• Menos interrupções e erros</li>
                <li>• Atendimento 24/7 instantâneo</li>
                <li>• Melhor taxa de conversão</li>
                <li>• Redução de stress da equipa</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-teal-600">Garantias:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de 40-50% nas chamadas repetitivas</li>
                <li>• Taxa de resposta automática de 70%</li>
                <li>• Disponibilidade 100% do chatbot</li>
                <li>• Ajustes de resposta incluídos</li>
              </ul>
            </div>
          </div>

          {/* ROI Calculation */}
          <div className="bg-snow/80 p-6 rounded-lg mb-8 border border-cyan-200 shadow-md shadow-cyan-50">
            <h3 className="text-2xl font-semibold pb-4 text-cyan-600">Retorno sobre Investimento:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-600">
              <div>
                <p className="font-semibold">Chamadas FAQ:</p>
                <p>80h/mês → ~€430/mês</p>
              </div>
              <div>
                <p className="font-semibold">Confirmações:</p>
                <p>42h/mês → ~€220/mês</p>
              </div>
              <div>
                <p className="font-semibold">Atendimento 24/7:</p>
                <p>~€1000/mês</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-emerald-600 pt-4">
              ROI Total: €1.650/mês = €19.800/ano
            </p>
          </div>

          {/* Prototype CTA */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 shadow-md shadow-green-50">
            <h3 className="text-xl font-semibold pb-3 text-gray-900">Teste o Protótipo Agora</h3>
            <p className="text-gray-600 pb-4">Envie mensagem para o WhatsApp e experimente</p>
            <a
              href="https://web.whatsapp.com/send?phone=+351938342970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              onClick={handleWhatsAppClick}
            >
              +351 938 342 970
            </a>
            <p className="text-sm text-gray-500 pt-2">Ainda em desenvolvimento - responde como atendente humano</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-purple-100 via-fuchsia-50 to-pink-100 p-8 rounded-2xl border border-purple-300 shadow-lg shadow-purple-100/50">
          <h2 className="text-4xl font-bold pb-6 text-center bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">Dashboard Operações & Manutenção</h2>
          
          <div className="grid md:grid-cols-2 gap-8 pb-8">
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-purple-600">O que fornecemos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dashboard completo com todas as operações</li>
                <li>• Sincronização automática de reservas</li>
                <li>• Controle total e visão geral</li>
                <li>• Planeamento semanal de lavagens e manutenções</li>
                <li>• Coordenação dos colaboradores</li>
                <li>• Rastreamento de manutenções</li>
                <li>• Relatórios e métricas detalhadas</li>
                <li>• Envio de confirmações num clique</li>
                <li>• Coordenação diária automática</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-fuchsia-600">Benefícios:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redução de stress e "apagar fogos"</li>
                <li>• Menos tarefas administrativas</li>
                <li>• Melhor coordenação entre equipa</li>
                <li>• Simplificação da agenda</li>
                <li>• Menos erros operacionais</li>
                <li>• Alertas automáticos de manutenção</li>
                <li>• Histórico completo de reservas</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-pink-600">Garantias:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 30 dias de ajustes gratuitos após o primeiro mês</li>
                <li>• Melhoria na coordenação entre colaboradores</li>
                <li>• Simplificação da agenda garantida</li>
                <li>• Redução de erros operacionais</li>
              </ul>
            </div>
          </div>

          {/* ROI Dashboard */}
          <div className="bg-snow/80 p-6 rounded-lg pb-8 pt-8 border border-purple-200 shadow-md shadow-purple-50">
            <h3 className="text-2xl font-semibold pb-4 text-purple-600">Retorno sobre Investimento:</h3>
            <p className="text-gray-600 pb-2">20 horas/semana poupadas × €10/hora = <span className="text-emerald-600 font-bold">€800/mês</span></p>
            <p className="text-sm text-gray-500">Inclui: Planejamento + Coordenação + Procura de informação - Erros + Melhor gestão</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb-20">
        <h2 className="text-4xl font-bold pb-12 text-center bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Ofertas e Preços</h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">


          {/* Dashboard Only */}
          <div className="group relative bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 p-8 rounded-2xl border border-purple-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:border-purple-400">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-200/30 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">Dashboard Operações</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">€1.500</div>
                <div className="text-sm text-gray-400 pb-6">Entrega estimada: 2-3 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-600 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Setup completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Formação da equipa</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Vídeos de manual</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração com sistemas</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-purple-300">
                <div className="text-sm text-gray-500">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-purple-600">€100/mês (opcional)</div>
              </div>
            </div>
          </div>

          {/* Chatbot Only */}
          <div className="group relative bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 p-8 rounded-2xl border border-blue-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 hover:border-blue-400">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/30 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-center">Chatbot AI</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">€5.000</div>
                <div className="text-sm text-gray-400 pb-6">Entrega estimada: 3-4 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-600 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Setup completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Chat website</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Treinamento da IA</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-blue-300">
                <div className="text-sm text-gray-500">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-blue-600">€300/mês (opcional)</div>
              </div>
            </div>
          </div>

          {/* Combined Package */}
          <div className="group relative bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-8 rounded-2xl border-2 border-green-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-300/50 hover:border-green-500">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-20 whitespace-nowrap">
              10% DESCONTO
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-200/30 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center">Pacote Completo</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">€5.850</div>
                <div className="text-sm text-gray-400 pb-6">Entrega estimada: 5-7 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-600 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Chatbot AI completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dashboard Operações</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração total</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Formação completa</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-green-300">
                <div className="text-sm text-gray-500">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-emerald-600">€360/mês ambos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
          <p className="text-2xl font-bold pb-2 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Investimento Recuperado em 2-3 Meses</p>
          <p className="text-gray-600">ROI de €19.800/ano (Chatbot) + €9.600/ano (Dashboard)</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-20">
        <h2 className="text-3xl font-bold pb-4 text-center bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Tecnologia e Ferramentas</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto pb-8">
          Nossa tecnologia foi desenvolvida para serem <br />
          utilizadas com as ferramentas descritas abaixo. <br />
          Os valores referem se ao custo mensal <br />
          por cada uma delas
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { 
              name: 'n8n', 
              price: '€24/mês', 
              color: 'text-cyan-600',
              bg: 'bg-cyan-50 border-cyan-200',
              url: 'https://n8n.io/'
            },
            { 
              name: 'WaSenderAPI', 
              price: '€6/mês', 
              color: 'text-green-600',
              bg: 'bg-green-50 border-green-200',
              url: 'https://wasenderapi.com/'
            },
            { 
              name: 'Open Router', 
              price: '€5-10/mês', 
              color: 'text-purple-600',
              bg: 'bg-purple-50 border-purple-200',
              url: 'https://openrouter.ai/'
            },
            { 
              name: 'Eleven Labs', 
              price: '€0-5/mês', 
              color: 'text-pink-600',
              bg: 'bg-pink-50 border-pink-200',
              url: 'https://elevenlabs.io/'
            },
            { 
              name: 'Twilio', 
              price: '€15-20/mês', 
              color: 'text-orange-600',
              bg: 'bg-orange-50 border-orange-200',
              url: 'https://twilio.com/'
            },
          ].map((tech, index) => (
            <div key={index} className={`${tech.bg} p-4 rounded-lg text-center border shadow-sm`}>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${tech.color} font-semibold hover:opacity-80 transition-opacity inline-block`}
                onClick={() => handleExternalLinkClick(tech.name, tech.url)}
              >
                {tech.name}
              </a>
              <p className="text-gray-500">{tech.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Info */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-8 rounded-2xl border border-indigo-200 shadow-lg shadow-indigo-50">
          <h2 className="text-3xl font-bold pb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Suporte & Atualização</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold pb-4 text-indigo-600">O que incluímos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Verificação funcional do sistema</li>
                <li>• Testes de funcionalidade</li>
                <li>• Monitoramento métrico da IA</li>
                <li>• Correção ativa de erros</li>
                <li>• Prevenção de problemas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold pb-4 text-purple-600">Ajustes contínuos:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ajustes com crescimento da empresa</li>
                <li>• Adaptação a alterações operacionais</li>
                <li>• Upgrade da IA com novas tecnologias</li>
                <li>• Atendimento de dúvidas à equipa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="pb-20">
        <div className="text-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 shadow-md">
          <h2 className="text-2xl font-bold pb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Condições de Pagamento</h2>
          <p className="text-xl text-gray-700">50% de entrada • 50% na entrega</p>
        </div>
      </section>

    </div>
  );
}