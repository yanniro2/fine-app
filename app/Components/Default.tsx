"use client";
import React from "react";
import { usePathname } from "next/navigation";
type Props = {};

const Page = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className="w-screen h-screen pl-[20vw] flex items-center justify-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-white w-1/2 text-center">
        Its {pathname} page working on process we will updated as soon. 🔜
      </h1>
    </section>
  );
};

export default Page;
