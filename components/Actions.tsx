import Link from "next/link";
import { Button } from "./ui/button";

export default function Actions() {
  return (
    <div className="flex gap-4">
      <Link href="/form">
        <Button
          className="bg-deep-blue text-white hover:bg-deep-blue/80"
          size="lg"
        >
          Get In Touch
        </Button>
      </Link>
      <Link
        href="https://calendly.com/leonardo-neptunesolutions/30min"
        target="_blank"
      >
        <Button
          className="bg-bright-blue text-white hover:bg-bright-blue/80"
          size="lg"
        >
          Book Free Lead Audit
        </Button>
      </Link>
    </div>
  );
}
