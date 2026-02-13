import Image from "next/image";
import Link from "next/link";
import Calendly from "./Cal";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center lg:px-32 px-6 w-full backdrop-blur-xl border-b border-yellow h-20">
        <Link href="/">
          <Image
            src={"/logos/transparent-extended-logo/light.png"}
            width={160}
            height={40}
            alt="Strutura Logo"
          />
        </Link>
        {/* <Calendly size="default" /> */}
      </div>
    </div>
  );
}
