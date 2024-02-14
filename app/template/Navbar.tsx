import React, { useEffect, useState } from "react";

import navbarLink from "../../data/templateLinks.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

const Navbar: React.FC = (props: Props) => {
  const [currentPathname, setCurrentPathname] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <nav className="w-full text-white font-Myanmar pl-[2rem] h-full pt-[4rem] pr-[2rem] ">
      {/* <ul className="flex flex-col items-start gap-5 h-full w-full"> */}

      <div className="flex flex-col items-start gap-5 h-full w-full">
        {navbarLink.navbarLinks.map((link, index) => (
          <Link
            href={`${link.url}`}
            key={index}
            className={`nav-link w-full ${
              currentPathname.startsWith(link.url) ||
              currentPathname.startsWith(`/${link.url}`)
                ? "nav-link-active"
                : ""
            }`}>
            {link.text}
          </Link>
        ))}
        {/* <div>{currentPathname} , </div> */}
      </div>
      {/* </ul> */}
    </nav>
  );
};

export default Navbar;
