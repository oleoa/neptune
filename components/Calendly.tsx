import { Button } from "./ui/button";
import Link from "next/link";

export default function Calendly({ size = "xl" }: { size?: "default" | "xl" }) {
  return (
    <Link
      href="https://calendly.com/strutura-ai/30min"
      target="_blank"
    >
      <Button
        className="bg-yellow text-black font-bold hover:bg-yellow/80"
        size={size}
      >
        Agendar Auditoria Gratuita
      </Button>
    </Link>
  );
}
