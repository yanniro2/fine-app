"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import navbarData from "../../data/navbarData.json";
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
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent className="text-primary" />;
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
        className="flex items-start px-[.5rem] py-3 cursor-pointer  flex-col justify-center">
        <div
          className={`navLink group ${
            main === item.codeName ? "navLink-active" : ""
          }`}
          onClick={() => handleClick(item.codeName.toLocaleLowerCase())}>
          <div className="navlinkIcon">{renderIcon(item.icon)}</div>

          {item.name}
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
        className={`navLink group ${
          sub === subItem.name.toLowerCase() ? "navlink-active-Primary" : ""
        }`}>
        <Link
          className="flex items-center justify-end gap-3"
          href={subItem.url}>
          <div className="navlinkIcon">{renderIcon(subItem.icon)}</div>
          {subItem.name}
        </Link>
      </div>
    ));
  };

  return (
    <section className="w-fit bg-darkMin h-screen fixed top-0 left-0 bottom-0 z-[2000] drop-shadow-lg shadow-lg border-r-4 border-borderC flex justify-between flex-col text-textC ">
      <Logo />

      <div className="pl-[2rem]">
        {renderNavbarItems(navbarData.navbar.main)}
      </div>
      <Link
        className={`p-3 capitalize text-center flex items-center w-full justify-center gap-3 border-borderC border-t hover:bg-primary transition-all text-white  ${
          pathname === "/setting" ? "bg-primary text-white group" : ""
        }`}
        href="/setting">
        <MdOutlineSettings className=" border-borderC border p-1 text-[1.6rem] rounded-lg" />
        settings
      </Link>
    </section>
  );
};

export default Navbar;
