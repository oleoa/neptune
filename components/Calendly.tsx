import { Button } from "./ui/button";
import Link from "next/link";

export default function Calendly({ size = "xl" }: { size?: "default" | "xl" }) {
  return (
    <Link
      href="https://calendly.com/leonardo-neptunesolutions/30min"
      target="_blank"
    >
      <Button
        className="bg-bright-blue text-white hover:bg-bright-blue/80"
        size={size}
      >
        Book Free Lead Audit
      </Button>
    </Link>
  );
}
