export default function AutomaticPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold pb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Soluções Automáticas para o Seu Negócio
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Transforme suas operações com IA e automação inteligente. Reduza custos, melhore a eficiência e foque no que realmente importa.
        </p>
      </div>

      {/* Chatbot Section */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/30 p-8 rounded-2xl border border-blue-700/50">
          <h2 className="text-4xl font-bold pb-6 text-center">Chatbot Inteligente <span className="whitespace-nowrap">Multi-Canal</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 pb-8">
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-cyan-400">Problemas que resolve:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Chamadas de clientes repetitivas</li>
                <li>• FAQ respondidas manualmente</li>
                <li>• Confirmações manuais demoradas</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-cyan-400">O que fornecemos:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Chatbot com IA no WhatsApp</li>
                <li>• Integração com website</li>
                <li>• Respostas automáticas de FAQ</li>
                <li>• Qualificação de leads</li>
                <li>• Confirmações automáticas 24h antes</li>
                <li>• Pedido automático de dados em falta</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-cyan-400">Benefícios:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Menos tempo com respostas repetitivas</li>
                <li>• Confirmações automáticas</li>
                <li>• Mais tempo para tarefas importantes</li>
                <li>• Menos interrupções e erros</li>
                <li>• Atendimento 24/7 instantâneo</li>
                <li>• Melhor taxa de conversão</li>
                <li>• Redução de stress da equipa</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-cyan-400">Garantias:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Redução de 40-50% nas chamadas repetitivas</li>
                <li>• Taxa de resposta automática de 70%</li>
                <li>• Disponibilidade 100% do chatbot</li>
                <li>• Ajustes de resposta incluídos</li>
              </ul>
            </div>
          </div>

          {/* ROI Calculation */}
          <div className="bg-black/30 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold pb-4 text-cyan-400">Retorno sobre Investimento:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
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
            <p className="text-2xl font-bold text-green-400 pt-4">
              ROI Total: €1.650/mês = €19.800/ano
            </p>
          </div>

          {/* Prototype CTA */}
          <div className="text-center bg-black/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold pb-3">Teste o Protótipo Agora</h3>
            <p className="text-gray-300 pb-4">Envie mensagem para o WhatsApp e experimente</p>
            <a 
              href="https://web.whatsapp.com/send?phone=+351938342970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              +351 938 342 970
            </a>
            <p className="text-sm text-gray-400 pt-2">Ainda em desenvolvimento - responde como atendente humano</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 p-8 rounded-2xl border border-purple-700/50">
          <h2 className="text-4xl font-bold pb-6 text-center">Dashboard Operações & Manutenção</h2>
          
          <div className="grid md:grid-cols-2 gap-8 pb-8">
            <div>
              <h3 className="text-2xl font-semibold pb-4 text-purple-400">O que fornecemos:</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="text-2xl font-semibold pb-4 text-purple-400">Benefícios:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Redução de stress e "apagar fogos"</li>
                <li>• Menos tarefas administrativas</li>
                <li>• Melhor coordenação entre equipa</li>
                <li>• Simplificação da agenda</li>
                <li>• Menos erros operacionais</li>
                <li>• Alertas automáticos de manutenção</li>
                <li>• Histórico completo de reservas</li>
              </ul>
              
              <h3 className="text-2xl font-semibold pb-4 pt-8 text-purple-400">Garantias:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 30 dias de ajustes gratuitos após o primeiro mês</li>
                <li>• Melhoria na coordenação entre colaboradores</li>
                <li>• Simplificação da agenda garantida</li>
                <li>• Redução de erros operacionais</li>
              </ul>
            </div>
          </div>

          {/* ROI Dashboard */}
          <div className="bg-black/30 p-6 rounded-lg pb-8 pt-8">
            <h3 className="text-2xl font-semibold pb-4 text-purple-400">Retorno sobre Investimento:</h3>
            <p className="text-gray-300 pb-2">20 horas/semana poupadas × €10/hora = <span className="text-green-400 font-bold">€800/mês</span></p>
            <p className="text-sm text-gray-400">Inclui: Planejamento + Coordenação + Procura de informação - Erros + Melhor gestão</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb-20">
        <h2 className="text-4xl font-bold pb-12 text-center">Ofertas e Preços</h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">


          {/* Dashboard Only */}
          <div className="group relative bg-gradient-to-br from-purple-900/70 via-purple-800/50 to-pink-900/70 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 text-purple-400 text-center">Dashboard Operações</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">€1.500</div>
                <div className="text-gray-400 pb-2">+ IVA</div>
                <div className="text-sm text-gray-500 pb-6">Entrega estimada: 2-3 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-300 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Setup completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Formação da equipa</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Vídeos de manual</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração com sistemas</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-purple-700/30">
                <div className="text-sm text-gray-400">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-purple-400">€100/mês (opcional)</div>
              </div>
            </div>
          </div>

          {/* Chatbot Only */}
          <div className="group relative bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-cyan-900/70 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 text-cyan-400 text-center">Chatbot AI</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">€5.000</div>
                <div className="text-gray-400 pb-2">+ IVA</div>
                <div className="text-sm text-gray-500 pb-6">Entrega estimada: 3-4 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-300 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Setup completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Chat website</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Treinamento da IA</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-blue-700/30">
                <div className="text-sm text-gray-400">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-cyan-400">€300/mês (opcional)</div>
              </div>
            </div>
          </div>

          {/* Combined Package */}
          <div className="group relative bg-gradient-to-br from-green-900/70 via-emerald-800/50 to-teal-900/70 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-400/50">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20">
              10% DESCONTO
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold pb-4 text-green-400 text-center">Pacote Completo</h3>
              <div className="text-center">
                <div className="text-4xl font-bold pb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">€5.850</div>
                <div className="text-gray-400 pb-2">+ IVA</div>
                <div className="text-sm text-gray-500 pb-6">Entrega estimada: 5-7 semanas</div>
              </div>
              <ul className="space-y-3 text-gray-300 pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Chatbot AI completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dashboard Operações</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Integração total</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Formação completa</span>
                </li>
              </ul>
              <div className="text-center pt-4 border-t border-green-700/30">
                <div className="text-sm text-gray-400">Suporte & Atualização</div>
                <div className="text-lg font-semibold text-green-400">€360/mês ambos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
          <p className="text-2xl text-green-400 font-bold pb-2">Investimento Recuperado em 2-3 Meses</p>
          <p className="text-gray-300">ROI de €19.800/ano (Chatbot) + €9.600/ano (Dashboard)</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-20">
        <h2 className="text-3xl font-bold pb-4 text-center">Tecnologia e Ferramentas</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto pb-8">
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
              color: 'text-cyan-400',
              url: 'https://n8n.io/'
            },
            { 
              name: 'WaSenderAPI', 
              price: '€6/mês', 
              color: 'text-green-400',
              url: 'https://wasenderapi.com/'
            },
            { 
              name: 'Open Router', 
              price: '€5-10/mês', 
              color: 'text-purple-400',
              url: 'https://openrouter.ai/'
            },
            { 
              name: 'Eleven Labs', 
              price: '€0-5/mês', 
              color: 'text-pink-400',
              url: 'https://elevenlabs.io/'
            },
            { 
              name: 'Twilio', 
              price: '€15-20/mês', 
              color: 'text-orange-400',
              url: 'https://twilio.com/'
            },
          ].map((tech, index) => (
            <div key={index} className="bg-black/30 p-4 rounded-lg text-center">
              <a 
                href={tech.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${tech.color} font-semibold hover:opacity-80 transition-opacity inline-block`}
              >
                {tech.name}
              </a>
              <p className="text-gray-400">{tech.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Info */}
      <section className="pb-20">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50">
          <h2 className="text-3xl font-bold pb-6 text-center">Suporte & Atualização</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold pb-4 text-gray-300">O que incluímos:</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Verificação funcional do sistema</li>
                <li>• Testes de funcionalidade</li>
                <li>• Monitoramento métrico da IA</li>
                <li>• Correção ativa de erros</li>
                <li>• Prevenção de problemas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold pb-4 text-gray-300">Ajustes contínuos:</h3>
              <ul className="space-y-2 text-gray-400">
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
        <div className="text-center bg-black/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold pb-4">Condições de Pagamento</h2>
          <p className="text-xl text-gray-300">50% de entrada • 50% na entrega</p>
        </div>
      </section>

    </div>
  );
}