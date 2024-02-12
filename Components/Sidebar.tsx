"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { MdOutlineSettings } from "react-icons/md";
import Link from "next/link";

import Logo from "./Logo";
type Props = {};
const Sidebar: React.FC = ({}: Props) => {
  const pathname = usePathname();

  return (
    <section className="w-[20vw] bg-gradient-to-t from-[#232323] to-[#161616] h-screen  drop-shadow-lg shadow-lg border-r-4 border-borderC flex justify-between flex-col text-textC">
      <Logo />

      {/* Contents */}

      <Link
        className={`p-3 capitalize text-center flex items-center w-full justify-center gap-3 border-borderC border-t hover:bg-dark hover:text-white text-textC transition-all   ${
          pathname === "/setting" ? " text-white group bg-dark" : ""
        }`}
        href="/setting">
        <MdOutlineSettings className="p-1 text-[1.6rem] rounded-lg" />
        settings
      </Link>
    </section>
  );
};

export default Sidebar;
