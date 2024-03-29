import Sidebar from "./Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen flex">
      <Sidebar />
      {children}
    </section>
  );
}
