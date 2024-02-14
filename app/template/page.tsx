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

  return <div className="page-bg text-white">Template Page</div>;
};

export default Page;
