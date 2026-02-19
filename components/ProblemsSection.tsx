"use client";

import { XCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const PROBLEMS = [
  {
    text: "Leads preenchem formulários, mas ficam na sua caixa de entrada por horas (ou dias) antes de alguém dar seguimento",
  },
  {
    text: "A sua equipa de vendas perde mais de 20 horas/semana a copiar dados de formulários para o CRM",
  },
  {
    text: "Leads quentes esfriam enquanto os vendedores pesquisam manualmente informações da empresa no LinkedIn",
  },
  {
    text: "A classificação de leads é adivinhação — os vendedores perseguem prospects não qualificados em vez de compradores reais",
  },
  {
    text: "Os leads estão espalhados por 5 ferramentas diferentes sem uma única fonte de verdade",
  },
  {
    text: "Os seus concorrentes mais rápidos respondem em minutos. Você responde em horas.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-16 md:px-32 px-6 bg-blue w-full pt-28 pb-48">
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center text-white">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue/20 text-blue text-sm font-medium tracking-wide uppercase">
            Parece familiar?
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            O caos de leads que toda equipa SaaS conhece
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-white/80">
            Estes problemas custam-lhe negócios, tempo e receita — todos os dias.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {PROBLEMS.map((problem, i) => (
          <RevealOnScroll key={i} delay={0.05 * (i % 3)}>
            <div
              className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-snow/5 
                         hover:bg-snow/10 hover:border-bright-blue/30 transition-all duration-300
                         backdrop-blur-sm"
            >
              <div className="shrink-0 mt-0.5">
                <XCircle
                  className="w-6 h-6 text-red-400/90 group-hover:text-red-300 transition-colors"
                  strokeWidth={2}
                />
              </div>
              <p className="text-base leading-relaxed text-white/95">
                {problem.text}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <div className="absolute bottom-0 h-32 w-full">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          width="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="currentColor"
            d="M1440,80 C1080,32 360,96 0,64 L0,96 L1440,96 Z"
            className="text-white"
          />
        </svg>
      </div>
    </section>
  );
}
