import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-deep-blue text-white">

      <div className="flex flex-col items-center gap-8 h-screen pt-48">
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

    </main>
  );
}
 