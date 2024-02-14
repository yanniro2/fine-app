import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="uppercase flex flex-col items-center leading-none justify-center text-center p-5 pt-[1rem]">
      <Link href="/home" className="flex items-center justify-center">
        <Image
          src="/assets/svg/logo.svg"
          alt="logo img"
          className=" drop-shadow shadow"
          width={150}
          height={150}
        />
        {/* <div className="flex items-center justify-center flex-col text-white text-center w-full drop-shadow-lg shadow-lg">
          <h1 className="text-6xl font-light tracking-[8px] font">fine</h1>
          <span className="text-sm -ml-[6px]">luxury property</span>
        </div> */}
      </Link>
    </div>
  );
};

export default Logo;
