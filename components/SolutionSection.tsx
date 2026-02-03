"use client";

import { Target, Zap, List, Bot, Send } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Actions from "./Actions";

export default function SolutionSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 lg:px-32 px-6 bg-deepest-blue w-full py-28">
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <div className="flex flex-col items-center gap-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-bright-blue/20 text-bright-blue text-sm font-medium tracking-wide uppercase">
              How It Works
            </span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate Your Entire Lead Pipeline in 3 Weeks
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-white/80 leading-relaxed">
            We build intelligent lead automation systems using n8n that capture,
            enrich, score, and deliver every lead to your sales team in under 2
            minutes—with zero manual work.
          </p>
        </RevealOnScroll>
      </div>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Capture & Enrich */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-bright-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-bright-blue/20">
                  <Target
                    className="w-6 h-6 text-bright-blue"
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xl font-bold">Capture & Enrich</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-bright-blue mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    100% Lead Capture
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    Every form submission, chatbot inquiry, or inbound contact
                    is captured instantly via automated webhooks.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-3">
                    Automatic enrichment:
                  </p>
                  <ul className="space-y-2 text-white/85">
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                      <span>Company name, size, industry</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                      <span>Employee count & growth signals</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                      <span>Tech stack & firmographics</span>
                    </li>
                    <li className="flex gap-2">
                      <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                      <span>Contact info (email, phone, LinkedIn)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-bright-blue/90 font-medium pt-2">
                  No more manual research. Every lead arrives fully loaded with
                  data.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Column 2: AI-Powered Scoring */}
          <RevealOnScroll delay={0.15}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-bright-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-bright-blue/20">
                  <Bot className="w-6 h-6 text-bright-blue" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold">AI-Powered Scoring</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-bright-blue mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Intelligent Qualification
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    Our AI model scores every lead against your Ideal Customer
                    Profile in real-time:
                  </p>
                </div>

                <ul className="space-y-2 text-white/85">
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Company size match</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Industry fit</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Budget signals</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Buying intent indicators</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Decision-maker authority</span>
                  </li>
                </ul>

                <p className="text-bright-blue/90 font-medium pt-2">
                  Hot leads get flagged instantly. Cold leads go to nurture.
                  Your reps focus on deals that close.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Column 3: Sync & Alert */}
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-bright-blue/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-bright-blue/20">
                  <Send className="w-6 h-6 text-bright-blue" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold">Sync & Alert</h4>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <p className="font-semibold text-bright-blue mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Instant Delivery
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    Qualified leads sync to your CRM and alert your team in
                    &lt;2 minutes:
                  </p>
                </div>

                <ul className="space-y-2 text-white/85">
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Auto-created in HubSpot/Salesforce/Pipedrive</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>Real-time Slack notification with lead summary</span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>
                      Personalized email sequence triggered automatically
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <List className="w-4 h-4 shrink-0 mt-1 text-bright-blue/80" />
                    <span>
                      Lead assigned to right rep based on territory/product
                    </span>
                  </li>
                </ul>

                <p className="text-bright-blue/90 font-medium pt-2">
                  Your sales team gets actionable leads, not data entry
                  homework.
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
