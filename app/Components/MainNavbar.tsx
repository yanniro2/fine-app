"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { usePathname } from "next/navigation";
type Props = {};

const MainNavbar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="fixed top-[2rem] w-[25rem] left-1/2 py-2  bg-[#1E1E1E] rounded-[1.1rem] flex items-center gap-[3rem] border-borderC border text-[#707070] justify-evenly">
      <Link
        href={"/template"}
        className={pathname === "/template" ? "link2-active" : "link"}>
        Template
      </Link>
      <Link
        href={"/campaign"}
        className={pathname === "/campaign" ? "link2-active" : "link"}>
        Campaign
      </Link>
      <Link
        href="/home"
        className={`p-2 border-borderC border rounded-lg text-xl transition-all${
          pathname === "/home"
            ? "bg-white text-white transition-all"
            : " text-textC hover:bg-white  transition-all"
        }`}>
        {/* <Image
          src="/assets/svg/homeicon.svg"
          width={15}
          height={15}
          alt={"home icon"}
        /> */}
        <MdHomeFilled />
      </Link>
    </div>
  );
};

export default MainNavbar;
