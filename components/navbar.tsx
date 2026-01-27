import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center px-12 py-4 w-full backdrop-blur-lg">
        <div className="flex gap-4 items-center">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="Neptune Logo"
          />
          <h1 className="text-2xl font-black italic">Neptune</h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <p>Services</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <Button variant={"secondary"}>Get Started</Button>
      </div>
    </div>
  )
}
