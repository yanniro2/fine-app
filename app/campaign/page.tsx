// page.tsx
"use client";
import React, { useState } from "react";
import data from "../../data/campaign.json";
import Image from "next/image";

type Campaign = {
  name: string;
  image_url: string;
  address: string;
  date: string;
  status: string;
};

const Page: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const filteredData = data
    .filter((item: Campaign) => {
      // Filter by name, date, or property status
      if (filter === "name") {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (filter === "date") {
        return true; // Adjust your date filtering logic here
      } else if (filter === "status") {
        return item.status.toLowerCase().includes(searchTerm.toLowerCase());
      }
      // Default: no filter
      return true;
    })
    .sort((a: Campaign, b: Campaign) => {
      // Sort by name, date, or property status
      if (sortOrder === "asc") {
        if (filter === "name") {
          return a.name.localeCompare(b.name);
        } else if (filter === "date") {
          // Adjust your date sorting logic here
          return 0;
        } else if (filter === "status") {
          return a.status.localeCompare(b.status);
        }
      } else {
        if (filter === "name") {
          return b.name.localeCompare(a.name);
        } else if (filter === "date") {
          // Adjust your date sorting logic here
          return 0;
        } else if (filter === "status") {
          return b.status.localeCompare(a.status);
        }
      }
      // Default: no sorting
      return 0;
    });

  const renderImages = () => {
    return filteredData.map((item: Campaign, index) => (
      <div
        key={index}
        className="w-full h-full cursor-pointer relative rounded-2xl overflow-hidden hover:scale-105 transition-all drop-shadow-md  border-2 hover:border-white border-transparent  group">
        <Image
          //   src={item.image_url}
          src="/assets/img/land.jpeg"
          alt={`Image ${index + 1}`}
          width={500}
          height={500}
          className="group-hover:brightness-50 transition-all brightness-90"
        />
        <p className="absolute bottom-5 left-1/2 right-1/2  -translate-x-1/2 w-full text-center uppercase backdrop-blur backdrop-brightness-50 ">
          {item.address}
        </p>
      </div>
    ));
  };

  return (
    <section className="pl-[20vw] pt-[8rem] text-white">
      <div className="p-3 flex items-center justify-center flex-col">
        <div className="w-full flex justify-between items-center">
          {/* Filter dropdown */}
          <label className="bg-transparent">
            Filter by:{" "}
            <select
              value={filter || ""}
              onChange={(e) => setFilter(e.target.value || null)}
              className="bg-transparent">
              <option value="">-- Select Filter --</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="status">Property Status</option>
            </select>
          </label>

          {/* Sort dropdown */}
          <label>
            Sort by:{" "}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>

          {/* Search input */}
          <input
            type="text"
            placeholder={`Search by ${
              filter === "status" ? "property status" : filter || "name"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent"
          />
        </div>
        <div className="grid grid-rows-3 grid-cols-3 gap-5 p-3">
          {renderImages()}
        </div>
      </div>
    </section>
  );
};

export default Page;
