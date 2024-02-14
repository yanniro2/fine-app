import { NextPage } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<PageProps> = ({ params }) => {
  return <div className="page-bg text-white z-10">My Post: {params.slug}</div>;
};

export default Page;
