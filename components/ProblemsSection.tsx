"use client";

import { XCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const PROBLEMS = [
  {
    text: "Leads fill out forms, but sit in your inbox for hours (or days) before anyone follows up",
  },
  {
    text: "Your sales team wastes 20+ hours/week copying data from forms into your CRM",
  },
  {
    text: "Hot leads go cold while reps manually research company info on LinkedIn",
  },
  {
    text: "Lead scoring is guesswork—reps chase unqualified prospects instead of real buyers",
  },
  {
    text: "Leads are scattered across 5 different tools with no single source of truth",
  },
  {
    text: "Your fastest competitors respond in minutes. You respond in hours.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-16 lg:px-32 px-6 bg-deep-blue w-full pt-28 pb-48">
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-bright-blue/20 text-bright-blue text-sm font-medium tracking-wide uppercase">
            Sound familiar?
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The lead chaos every SaaS team knows
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-white/80">
            These problems cost you deals, time, and revenue—every single day.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {PROBLEMS.map((problem, i) => (
          <RevealOnScroll key={i} delay={0.05 * (i % 3)}>
            <div
              className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5 
                         hover:bg-white/10 hover:border-bright-blue/30 transition-all duration-300
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
            className="text-deepest-blue"
          />
        </svg>
      </div>
    </section>
  );
}
