"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const MainNavbar = (props: Props) => {
  const [currentPathname, setCurrentPathname] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <div className="fixed top-[2rem] w-[25rem] left-1/2 py-2 bg-gradient-to-t from-[#232323] to-[#161616] rounded-[1.1rem] flex items-center gap-[3rem] border-borderC border text-[#707070] justify-evenly z-[2000]">
      <Link
        href={"/campaign"}
        className={currentPathname === "/campaign" ? "link2-active" : "link"}>
        Campaign
      </Link>
      <Link
        href={"/template"}
        className={
          currentPathname.startsWith("/template") ||
          currentPathname.startsWith("template")
            ? "link2-active"
            : "link"
        }>
        Template
      </Link>

      <Link
        href="/home"
        className={`p-2 border-borderC border rounded-lg text-xl transition-all${
          currentPathname === "/home"
            ? "bg-white text-white transition-all"
            : " text-textC hover:text-white  transition-all"
        }`}>
        <MdHomeFilled />
        {/* <Image
          src="./assets/svg/homeicon.svg"
          alt="icon"
          width={15}
          height={15}
        /> */}
      </Link>
    </div>
  );
};

export default MainNavbar;
