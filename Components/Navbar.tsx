"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import navbarData from "../data/navbarData.json";
import { CgPolaroid, CgFileDocument } from "react-icons/cg";
import { FaNewspaper, FaAddressCard, FaMeta } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  MdCreate,
  MdLibraryBooks,
  MdDescription,
  MdLocalActivity,
  MdGroups,
  MdBusinessCenter,
  MdPalette,
  MdBuild,
  MdDiversity2,
  MdEdit,
  MdDirectionsWalk,
  MdDevicesOther,
  MdCalendarViewMonth,
  MdBrokenImage,
  MdPrint,
  MdKeyboardArrowDown,
  MdOutlineSettings,
  MdInfo,
  MdCheckCircle,
  MdMonetizationOn,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

type SubNavbarItem = {
  name: string;
  icon: string;
  url: string;
  codeName: string;
};

type MainNavbarItem = {
  name: string;
  icon: string;
  codeName: string;
  url?: string;
  subsections?: SubNavbarItem[];
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    MdCreate,
    MdLibraryBooks,
    MdDescription,
    MdLocalActivity,
    MdGroups,
    MdBusinessCenter,
    MdPalette,
    MdBuild,
    MdDiversity2,
    MdEdit,
    MdDirectionsWalk,
    MdDevicesOther,
    MdCalendarViewMonth,
    MdBrokenImage,
    MdPrint,
    MdInfo,
    MdCheckCircle,
    MdMonetizationOn,
    CgPolaroid,
    FaNewspaper,
    FaAddressCard,
    CgFileDocument,
    HiOutlineDocumentText,
    FaMeta,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent className="text-white " />;
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  // Assuming pathname is "/newspaper/advertise"
  const main = pathSegments[0]; // "newspaper"
  const sub = pathSegments[1]; // "advertise"

  const [active, setActive] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setActive(name);
  };

  const renderNavbarItems = (items: MainNavbarItem[]) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="flex items-center px-[2rem] py-3 cursor-pointer  flex-col justify-between w-[20vw]  ">
        <div
          className={`flex items-center justify-between gap-3 hover:border hover:border-borderC p-1 rounded-2xl hover:bg-dark w-full transition-all hover:text-white border   group ${
            main === item.codeName
              ? "border-borderC bg-dark transition-all text-white border "
              : "border-darkMin"
          }`}
          onClick={() => handleClick(item.codeName.toLocaleLowerCase())}>
          <div className="flex items-center justify-center gap-3">
            <div className="p-2   rounded-xl">{renderIcon(item.icon)}</div>

            {item.name}
          </div>

          {item.subsections && item.subsections.length > 0 && (
            <MdKeyboardArrowDown />
          )}
        </div>
        {item.subsections && main === item.codeName.toLocaleLowerCase() && (
          <div className="ml-4 flex flex-col p-1 gap-1">
            {renderSubNavbarItems(item.subsections)}
          </div>
        )}
        {item.subsections &&
          active === item.codeName.toLocaleLowerCase() &&
          main !== item.codeName.toLocaleLowerCase() && (
            <div className="ml-4">{renderSubNavbarItems(item.subsections)}</div>
          )}
      </div>
    ));
  };

  const renderSubNavbarItems = (subItems: SubNavbarItem[]) => {
    return subItems.map((subItem, subIndex) => (
      <div
        key={subIndex}
        className={`flex items-center justify-between gap-3 hover:border hover:border-borderC p-1 rounded-2xl hover:bg-dark w-full transition-all hover:text-white border   group pr-[1rem] ${
          sub === subItem.name.toLowerCase()
            ? "border-borderC bg-dark transition-all text-white border "
            : "border-darkMin"
        }`}>
        <Link
          className="flex items-center justify-start gap-3 w-full"
          href={subItem.url}>
          <div className="p-2   rounded-xl">{renderIcon(subItem.icon)}</div>
          {subItem.name}
        </Link>
      </div>
    ));
  };

  return (
    <section className="w-[20vw] bg-gradient-to-t from-[#232323] to-[#161616] h-screen fixed top-0 left-0 bottom-0 z-[2000] drop-shadow-lg shadow-lg border-r-4 border-borderC flex justify-between flex-col text-textC ">
      <Logo />

      <div className="w-full h-[60vh] flex flex-col justify-between transition-all">
        {renderNavbarItems(navbarData.navbar.main)}
      </div>
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

export default Navbar;
