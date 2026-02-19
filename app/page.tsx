import RevealOnScroll from "@/components/RevealOnScroll";
import Actions from "@/components/Actions";
import ElevenLabs from "@/components/ElevenLabs";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="[&>div]:px-32">
      <section className="relative flex flex-col items-center justify-center gap-8 min-h-screen">
        <ElevenLabs />

        <div className="relative z-10 flex flex-col items-center gap-8 lg:px-32 px-6">
          <RevealOnScroll delay={0}>
            <h1 className="lg:text-6xl text-4xl text-center font-bold">
              <span className="text-yellow">Automação com AI</span>
              <br />
              Escale sem aumentar equipe
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-center text-xl">
              Captura automática de leads, qualificação com IA e sincronização instantânea com CRM
              <br />
              Resumos, relatórios automáticos e integrações com todas as ferramentas
              <br />
              A sua equipa pode se concentrar no que importa
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Actions />
          </RevealOnScroll>
        </div>
      </section>
      <ProductsSection />
    </main>
  );
}
