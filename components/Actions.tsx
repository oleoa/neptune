import Link from "next/link";
import { Button } from "./ui/button";
import Calendly from "./Calendly";

export default function Actions() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
      <Calendly />
      <Link href="/form">
        <Button
          variant="outline"
          size="xl"
        >
          Entrar em Contacto
        </Button>
      </Link>
    </div>
  );
}
