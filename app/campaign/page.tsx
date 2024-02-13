import React from "react";
import campaignData from "../../data/campaignData.json";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-screen h-full flex items-center justify-center pl-[20vw] overflow-auto">
      <div className="w-full h-full pt-[8rem] p-5 grid grid-cols-3 grid-rows-auto  gap-5">
        {campaignData.campaigns.map((campaign, index) => (
          <div
            key={index}
            className="text-white w-full h-full rounded-xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-105  border-transparent group">
            <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar backdrop-blur-lg p-1 group-hover:backdrop-brightness-50">
              {campaign.address}
            </div>

            {/* {campaign.address} */}
            {/* {campaign.date} */}
            <Image
              src={campaign.image}
              alt={campaign.name}
              width={800}
              height={800}
              className="w-full h-full overflow-hidden object-cover group-hover:brightness-50 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
