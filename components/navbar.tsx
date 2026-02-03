import Image from "next/image";
import Link from "next/link";
import Calendly from "./Calendly";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center lg:px-32 px-6 py-4 w-full backdrop-blur-xl border-b border-bright-blue">
        <Link href="/">
          <Image
            src={"/nav-logo.png"}
            width={250}
            height={60}
            alt="Neptune Logo"
          />
        </Link>
        <Calendly size="default" />
      </div>
    </div>
  );
}
