"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import posthog from "posthog-js";

export default function Cal({ size = "xl" }: { size?: "default" | "xl" }) {
  const handleClick = () => {
    posthog.capture("schedule_audit_clicked", {
      button_size: size,
      destination_url: "https://cal.eu/strutura/discovery",
    });
  };

  return (
    <Link
      href="https://cal.eu/strutura/discovery"
      target="_blank"
      onClick={handleClick}
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
