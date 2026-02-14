"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Cal from "./Cal";
import posthog from "posthog-js";

export default function Actions() {
  const handleContactClick = () => {
    posthog.capture("contact_button_clicked", {
      destination_url: "/form",
    });
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
      <Cal />
      <Link href="/form" onClick={handleContactClick}>
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
