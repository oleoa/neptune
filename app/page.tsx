import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-deep-blue text-white px-32">

      <div className="flex flex-col items-center justify-center gap-8 h-screen">
        <h1 className="text-7xl text-center font-bold">
          Transform Your Business <br/>
          with AI Innovation
        </h1>
        <p className="text-center text-xl">
          Expert AI solutions that drive growth, efficiency and future-ready <br/>
          scalability for your enterprise
        </p>
        <Button variant={"secondary"}>Get Started</Button>
      </div>

      <div className="flex flex-col items-center gap-8 pb-24">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-gray">Comprehensive intelligence solutions tailored to your needs</p>
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
      </div>

    </main>
  );
}
