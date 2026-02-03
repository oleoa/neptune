import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";
import Three from "@/components/HeroThree";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white [&>div]:px-32">
      <section className="relative flex flex-col items-center justify-center gap-8 h-screen overflow-hidden">
        <Three />

        <div className="relative z-10 flex flex-col items-center gap-8 px-32">
          <RevealOnScroll delay={0}>
            <h1 className="text-6xl text-center font-bold">
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
            <div className="flex gap-4">
              <Link href="/form">
                <Button>Get In Touch</Button>
              </Link>
              <Link
                href="https://calendly.com/leonardo-neptunesolutions/30min"
                target="_blank"
              >
                <Button variant={"secondary"}>Book Free Lead Audit</Button>
              </Link>
            </div>
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

      <section
        id="our-services"
        className="flex flex-col items-center justify-center gap-8 px-32 bg-deep-blue w-full py-28"
      >
        <h1 className="text-5xl font-bold text-center">
          Your Sales Team Is
          <br />
          Drowning in Manual Work
        </h1>
        <p className="text-gray">
          Most B2B SaaS companies lose 40-60% of their leads to manual processes
          that can&apos;t keep up.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 border border-bright-blue p-4 rounded-lg">
            <h2 className="text-2xl font-bold">AI Strategy & Consulting</h2>
            <p>
              We help you navigate the AI landscape with <br />
              strategic roadmaps tailored to your business <br />
              goals and market position
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-bright-blue p-4 rounded-lg">
            <h2 className="text-2xl font-bold">AI Agents</h2>
            <p>
              Custom made AI Agents that work 24/7 answering your clients <br />
              and bringing more revenue with a scalable arquiteture
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-bright-blue p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Data Analytics & Insights</h2>
            <p>
              Turn raw data into actionable intelligence with <br />
              our advanced analytics and visualization services
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
