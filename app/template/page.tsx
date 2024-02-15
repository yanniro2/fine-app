"use client";
import React, { useState } from "react";
import draftData from "../../data/template/draftData.json";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const [sortOption, setSortOption] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortDraft = draftData.drafts.sort((a, b) => {
    if (sortOption === "name") {
      return a.heading.localeCompare(b.heading);
    } else if (sortOption === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  const filterDraft = sortDraft.filter((campaign) =>
    campaign.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <div className="w-full h-full pt-[8rem] ">
        <div className="w-full flex items-center justify-between text-white my-5 px-3">
          <div className="">
            <label htmlFor="sort">Sort By:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border-element ">
              <option value="name">Name</option>
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
            </select>
          </div>

          <h1 className="h1 px-3 underline">draft</h1>
          <div>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-element"
            />
          </div>
        </div>

        <div className="w-full h-full overflow-scroll flex flex-wrap  gap-5 justify-evenly pb-[5rem] pt-3">
          {filterDraft.map((campaign, index) => (
            <div
              key={index}
              className="text-white w-[22rem] h-[14rem] rounded-xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-105  border-transparent group drop-shadow hover:drop-shadow-lg bg-gradient-to-b from-[#3F3E3E] to-[#262626]">
              <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar  p-1  uppercase">
                {campaign.heading}
              </div>

              <div className="absolute top-3 left-0 right-0 z-50  w-full text-center font-Myanmar  p-1 px-3  uppercase flex justify-between items-center">
                <span className="text-span">{campaign.date}</span>
                <span className="text-span">{campaign.time}</span>
              </div>

              {/* <Image
                src={campaign.image}
                alt={campaign.name}
                width={1000}
                height={1000}
                className="w-full h-full overflow-hidden object-cover group-hover:brightness-50 transition-all brightness-75"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
