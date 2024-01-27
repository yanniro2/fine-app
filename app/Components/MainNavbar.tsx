import Link from "next/link";
import React from "react";
import { MdHomeFilled } from "react-icons/md";
type Props = {};

const MainNavbar = (props: Props) => {
  return (
    <div className="fixed top-[2rem] w-min left-1/2 py-1 px-[2rem] bg-[#1E1E1E] rounded-2xl flex items-center gap-[3rem] border-borderC border text-[#707070]">
      <Link href={"/"} className="link2-active">
        Template
      </Link>
      <Link href={"/"} className="link-2">
        Campaign
      </Link>
      <Link
        href="/"
        className="p-3 border-borderC border rounded-xl text-xl link-2">
        <MdHomeFilled />
      </Link>
    </div>
  );
};

export default MainNavbar;
