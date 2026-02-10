import RevealOnScroll from "@/components/RevealOnScroll";
import Three from "@/components/HeroThree";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import Actions from "@/components/Actions";
import ElevenLabs from "@/components/ElevenLabs";

export default function Home() {
  return (
    <main className="text-white [&>div]:px-32">
      <section className="relative flex flex-col items-center justify-center gap-8 min-h-screen">
        <Three />
        <ElevenLabs />

        <div className="relative z-10 flex flex-col items-center gap-8 lg:px-32 px-6">
          <RevealOnScroll delay={0}>
            <h1 className="lg:text-6xl text-4xl text-center font-bold">
              Stop Losing Leads.
              <br />
              Start Converting in Under 2 Minutes.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-center text-xl">
              Automated lead capture, AI-powered qualification, and instant CRM
              sync for B2B SaaS companies.
              <br />
              Your sales team gets every lead, perfectly scored, in
              real-time—without lifting a finger.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Actions />
          </RevealOnScroll>
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
              d="M0,48 C360,0 1080,96 1440,48 L1440,96 L0,96 Z"
              className="text-deep-blue"
            />
          </svg>
        </div>
      </section>

      <ProblemsSection />

      <SolutionSection />
    </main>
  );
}
