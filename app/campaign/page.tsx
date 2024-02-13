"use client";
import React, { useState } from "react";
import campaignData from "../../data/campaignData.json";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const [sortOption, setSortOption] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedCampaigns = campaignData.campaigns.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  const filteredCampaigns = sortedCampaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-screen h-full flex items-center justify-center pl-[20vw] overflow-auto">
      <div className="w-full h-full pt-[8rem] p-5 flex flex-wrap  gap-5 justify-evenly">
        <div className="flex items-center w-full justify-between text-white">
          <div>
            <label htmlFor="sort">Sort By:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border-element">
              <option value="name">Name</option>
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
            </select>
          </div>
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

        {filteredCampaigns.map((campaign, index) => (
          <div
            key={index}
            className="text-white w-[22rem] h-[14rem] rounded-xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-105  border-transparent group ">
            <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar backdrop-blur-lg p-1 group-hover:backdrop-brightness-50 uppercase">
              {campaign.address}
            </div>

            <Image
              src={campaign.image}
              alt={campaign.name}
              width={1000}
              height={1000}
              className="w-full h-full overflow-hidden object-cover group-hover:brightness-50 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
