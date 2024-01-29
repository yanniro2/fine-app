"use client";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="w-screen h-screen flex items-center justify-center pl-[20vw]  text-white">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 lg:w-auto w-full flex items-center justify-center text-primary gap-5">
          Ops <FaRegFaceSadTear />
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 ">
          Page {pathname} not found (404)!
        </h1>

        <p className="text-base md:text-lg lg:text-xl">
          Could not find requested ,
        </p>
        <p className="capitalize gap-1 flex items-center">
          go home click here
          <Link
            href="/"
            className="text-primary underline uppercase font-semibold">
            home
          </Link>
        </p>
      </div>
    </div>
  );
}
