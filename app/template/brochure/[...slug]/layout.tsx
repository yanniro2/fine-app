import Image from "next/image";
// import Sidebar from "./Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen flex relative bg-liner ">
      <Image
        src="/assets/img/gridLayout.png"
        width={1000}
        height={800}
        className="w-full h-full object-cover z-0 top-0 left-0 right-0 bottom-0 opacity-60"
        alt="bg-grid"
      />
      {children}
    </section>
  );
}
