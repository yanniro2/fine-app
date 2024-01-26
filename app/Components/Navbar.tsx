"use client"
import React, { useState } from "react";
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
} from "react-icons/md";
import Link from "next/link";

type SubNavbarItem = {
  name: string;
  icon: string;
  url: string;
};

type MainNavbarItem = {
  name: string;
  icon: string;
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
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent className="text-primary"/>;
};

const Navbar: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMainItemClick = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const renderNavbarItems = (items: MainNavbarItem[]) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="flex items-start px-[1rem] py-3 cursor-pointer  flex-col justify-between">
        <div
          className="link"
          onClick={() => item.subsections && handleMainItemClick(item.name)}>
          {renderIcon(item.icon)}
          {item.name}
          {item.subsections && item.subsections.length > 0 && (
            <MdKeyboardArrowDown />
          )}
        </div>
        {item.subsections && activeSubmenu === item.name && (
          <div className="ml-4">{renderSubNavbarItems(item.subsections)}</div>
        )}
      </div>
    ));
  };

  const renderSubNavbarItems = (subItems: SubNavbarItem[]) => {
    return subItems.map((subItem, subIndex) => (
      <div
        key={subIndex}
        className="flex items-start px-[1rem] py-3 cursor-pointer  flex-col justify-between">
        <Link className="flex items-center gap-3" href={subItem.url}>
          {renderIcon(subItem.icon)}
          {subItem.name}
        </Link>
      </div>
    ));
  };

  return (
    <section className="w-[30vh] bg-darkMin h-screen fixed top-0 left-0 bottom-0 z-[2000] drop-shadow-lg shadow-lg border-r-4 border-borderC flex justify-between flex-col text-textC ">
      <div className="uppercase flex flex-col items-center leading-none justify-center text-center p-5 pt-[2rem]">
        <img src="/assets/img/fine logo.svg" alt="logo img" />
      </div>
      <div className="pl-[2rem]">
        {renderNavbarItems(navbarData.navbar.main)}
      </div>
      <div className="pl-[3rem] p-3 capitalize link">
        <MdOutlineSettings className="text-primary"/>
        settings</div>
    </section>
  );
};

export default Navbar;
