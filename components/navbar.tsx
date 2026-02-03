import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-start items-center px-30 py-4 w-full backdrop-blur-xl border-b border-bright-blue">
        <Link href="/">
          <Image
            src={"/nav-logo.png"}
            width={220}
            height={60}
            alt="Neptune Logo"
          />
        </Link>
      </div>
    </div>
  );
}
