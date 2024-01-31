"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";

type Props = {};

const MainNavbar = (props: Props) => {
  const [currentPathname, setCurrentPathname] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <div className="fixed top-[2rem] w-[25rem] left-1/2 py-2 bg-[#1E1E1E] rounded-[1.1rem] flex items-center gap-[3rem] border-borderC border text-[#707070] justify-evenly">
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
        href={"/campaign"}
        className={currentPathname === "/campaign" ? "link2-active" : "link"}>
        Campaign
      </Link>
      <Link
        href="/home"
        className={`p-2 border-borderC border rounded-lg text-xl transition-all${
          currentPathname === "/home"
            ? "bg-white text-white transition-all"
            : " text-textC hover:bg-white  transition-all"
        }`}>
        <MdHomeFilled />
      </Link>
    </div>
  );
};

export default MainNavbar;
