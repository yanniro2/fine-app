"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { MdOutlineSettings } from "react-icons/md";
import Link from "next/link";

// import Logo from "../../Components/Logo";
// import Navbar from "./Navbar";
import Logo from "@/Components/Logo";

type Props = {};
const Sidebar: React.FC = ({}: Props) => {
  const pathname = usePathname();

  return (
    <section className="sidemenu">
      <Logo />

      {/* Contents */}
      {/* <Navbar /> */}
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
