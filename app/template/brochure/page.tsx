import React from "react";
import brochureData from "../../../data/template/brochureSectionsData.json";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const page: React.FC = (props: Props) => {
  return (
    <div className="page-bg text-white">
      <div className="w-full h-full overflow-scroll flex flex-wrap  gap-5 justify-evenly pb-[5rem] pt-[8rem]">
        {brochureData.brochureSections.map((section, index) => (
          <Link
            href={section.linkUrl}
            key={index}
            className="text-white w-[22rem] h-[14rem] rounded-xl  relative overflow-hidden cursor-pointer  transition-all border-2 hover:border-white hover:scale-105  border-transparent group drop-shadow hover:drop-shadow-lg bg-[#303030]">
            <div className="absolute bottom-3 left-1/2 right-0 z-50 -translate-x-1/2 w-3/4 text-center font-Myanmar  p-1  uppercase">
              {section.title} - {section.numberOfPages} pages
            </div>

            {/* <Image
              src={section.image}
              alt={section.title}
              width={1000}
              height={1000}
              className="w-full h-full overflow-hidden object-cover group-hover:brightness-50 transition-all brightness-75"
            /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
