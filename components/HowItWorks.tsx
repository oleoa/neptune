"use client";

import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  {
    number: "01",
    title: "Sessão de Descoberta",
    description:
      "Numa call de 30 minutos, analisamos os teus processos e identificamos onde a automação gera mais impacto. Sem compromisso.",
  },
  {
    number: "02",
    title: "Proposta Personalizada",
    description:
      "Recebes um plano claro com as automações recomendadas, o impacto esperado e os próximos passos. Sem jargão técnico.",
  },
  {
    number: "03",
    title: "Implementação e Resultados",
    description:
      "A nossa equipa implementa tudo. Tu só tens de ver os resultados — leads qualificados, tempo poupado, processos a correr sozinhos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative flex flex-col items-center justify-center gap-20 lg:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-how-bg)" }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Como funciona
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Como funciona
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Da primeira conversa à automação a funcionar — em menos de 2
            semanas.
          </p>
        </RevealOnScroll>
      </div>

      {/* Steps — vertical timeline on mobile, horizontal grid on desktop */}
      <div className="w-full max-w-5xl">
        {/* Mobile timeline */}
        <div className="flex flex-col md:hidden">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={i} delay={0.1 + i * 0.15}>
              <div className="flex gap-5">
                {/* Left: bubble + vertical line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow/10 border border-yellow/30 shrink-0">
                    <span className="text-xl font-bold text-yellow tabular-nums leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 w-px bg-linear-to-b from-yellow/40 to-yellow/10 my-2" />
                </div>

                {/* Right: content */}
                <div
                  className={`flex flex-col gap-2 pt-1 ${i < STEPS.length - 1 ? "pb-10" : ""}`}
                >
                  <h3 className="text-lg font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={i} delay={0.1 + i * 0.15}>
              <div className="flex flex-col items-start gap-6 p-8">
                {/* Bubble + connector row */}
                <div className="flex items-center w-full">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow/10 border border-yellow/30 shrink-0">
                    <span className="text-3xl font-bold text-yellow tabular-nums leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-linear-to-r from-yellow/40 to-yellow/10 ml-3" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", background: "linear-gradient(to bottom, transparent, var(--section-how-fade))", pointerEvents: "none" }} />
    </section>
  );
}
