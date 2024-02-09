import CampainContent from "../Components/Campaign/CampainContent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-screen h-full relative">
      {children}
      <CampainContent />
    </section>
  );
}
