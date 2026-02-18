"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { isDark } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center lg:px-32 px-6 w-full backdrop-blur-xl border-b border-yellow h-20">
        <Link href="/">
          <Image
            src={
              isDark
                ? "/logos/transparent-extended-logo/dark.png"
                : "/logos/transparent-extended-logo/light.png"
            }
            width={160}
            height={40}
            alt="Strutura Logo"
          />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
