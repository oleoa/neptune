import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-40">
      <div className="flex justify-start items-center px-12 py-4 w-full backdrop-blur-xl">
        <div className="flex gap-4 items-center">
          <Image src={"/logo.png"} width={50} height={50} alt="Neptune Logo" />
          <h1 className="text-2xl font-black italic">Neptune Solutions</h1>
        </div>
      </div>
    </div>
  );
}
