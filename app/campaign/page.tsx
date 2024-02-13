import React from "react";
import campaignData from "../../data/campaignData.json";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-screen h-full flex items-center justify-center pl-[20vw] overflow-auto">
      <div className="w-full h-full pt-[8rem] p-5 flex flex-wrap  gap-5 justify-evenly">
        {campaignData.campaigns.map((campaign, index) => (
          <div
            key={index}
            className="text-white w-[22rem] h-[14rem] rounded-xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-105  border-transparent group ">
            <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar backdrop-blur-lg p-1 group-hover:backdrop-brightness-50 uppercase">
              {campaign.address}
            </div>

            {/* {campaign.address} */}
            {/* {campaign.date} */}
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

export default page;
